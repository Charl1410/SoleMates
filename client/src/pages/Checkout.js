import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


import { useMutation } from "@apollo/client";
import { CHECKOUT } from "../utils/mutations";

const CheckoutForm = () => {
  const { cartItems } = useCart();
  const [checkout] = useMutation(CHECKOUT);
  const [total, setTotal] = useState(0);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  useEffect(() => {
    const newTotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
  }, [cartItems]);

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      const { data } = await checkout({
        variables: { amount: total },
      });

      const confirmPayment = await stripe.confirmCardPayment(
        data.checkout.client_secret,
        {
          payment_method: {
            card: elements.getElement(CardNumberElement),
          },
        }
      );

      if ("error" in confirmPayment) {
        setError(confirmPayment.error.message);
        return;
      }

      if (confirmPayment.paymentIntent.status === "succeeded") {
        setPaymentConfirmed(true);
      }
    } catch (e) {
      console.error(e);
      setError("An error occurred while processing your payment.");
    }
  };

  return (
        <div className="card ml-5 w-96 bg-base-100 shadow-xl" >
          <form onSubmit={handlePayment}>
        <div className="form-row">
          <label htmlFor="name">Name:  </label>
          <input type="text" id="name" />
        </div>
        <div className="form-row">
          <label htmlFor="address">Address:  </label>
          <input type="text" id="address" />
        </div>
        <div className="form-row">
          <label htmlFor="address">Promo Code:  </label>
          <input type="text" id="promo-code" />
        </div>
            <div className="form-row">
          <label htmlFor="card-number">Card Number:</label>
          <CardNumberElement id="card-number" />
        </div>
        <div className="form-row">
          <label htmlFor="card-expiry">Expiration Date:</label>
          <CardExpiryElement id="card-expiry" />
        </div>
        <div className="form-row">
          <label htmlFor="card-cvc">CVC:</label>
          <CardCvcElement id="card-cvc" />
          
        </div>
        <button class="btn btn-primary">Confirm Payment</button>
      </form>
      {error && <div className="error">{error}</div>}
      {paymentConfirmed && <div className="success">Payment confirmed!</div>}
    </div>
  );
};

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Checkout = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Checkout;