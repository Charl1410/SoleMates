// UI Components
import BasketCard from '../components/BasketCard.js'

// Shopping Cart
import { useCart } from '../context/CartContext'

const Basket = () => {
  
  const { cartItems, onRemoveFromCart } = useCart()
  console.log(cartItems)

  // const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  
  return (
    <>
      <div className='w-75 border m-2 p-5'>
        <div className='section-title'>
          {cartItems.map(product => (
            <BasketCard key={product.title} {...product} onRemoveFromCart={()=>onRemoveFromCart(product)} />
          ))}
        </div>
      </div>  
      <div className='w-25 border m-2 p-5'>
        <div className='section-title'>
            Checkout Options
        </div>
        
      </div>
    </>
  )
}

export default Basket