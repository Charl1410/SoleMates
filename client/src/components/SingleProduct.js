import React from 'react';

const SingleProduct = ({ title, image, description, price }) => {
  return (
    <div className="product">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Price: £{price}</p>
    </div>
  );
};

export default SingleProduct;