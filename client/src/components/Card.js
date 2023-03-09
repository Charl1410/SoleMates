import React from 'react';
// import { Link } from 'react-router-dom';

const ProductCard = ( props ) => {

  console.log(props)
  const {title, description, image, price, onAddToCart} = props;

  return (
        
  <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={`${image}`} alt={title} /></figure>
    <div className="card-body">
      <h2 className="card-title">
        {title}
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <p>{description}</p>
      <div className="card-actions justify-end">
      <button className="btn btn-primary"onClick={onAddToCart}>Add to Cart</button>
        <div className="badge badge-outline">£{price}</div> 
        <div className="badge badge-outline">Products</div>
      </div>
    </div>
</div>

      )
}

export default ProductCard