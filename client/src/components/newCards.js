import React from 'react';
import { Link } from 'react-router-dom';

const newCards = ( props ) => {
  const {title, image, price, _id, onAddToCart} = props;

  return (
   <div className="card w-96 bg-base-100 shadow-xl m-5 w-80 transition duration-500 hover:scale-125 ">
      <Link to={`/product/${_id}`}>
        <figure>
          <img src={`${image}`} alt={title} />
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title">
          <Link to={`/product/${_id}`}>
            {title}
          </Link>
        </h2>
        <div className="badge badge-secondary">NEW</div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary " onClick={onAddToCart}>
            Add to Cart
          </button>
          <div className="badge badge-outline">£{price}</div> 
        </div>
      </div>
    </div>
  )
}

export default newCards

