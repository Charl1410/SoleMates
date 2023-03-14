import React from 'react';
import { Link } from 'react-router-dom';

const newCards = ( props ) => {
  const {title, image, price, _id, onAddToCart} = props;

  return (
    <div className="card w-96 bg-base-100 shadow-xl m-5 w-80 ">
      <Link to={`/product/${_id}`}>
        <figure>
          <img src={`${image}`} alt={title} />
        </figure>
      </Link>
      
      <div className="card-body card-body flex flex-col justify-center items-center text-center">
        <h2 className="card-title">
          <Link to={`/product/${_id}`}>
            {title}
          </Link>
    
          <div className="badge badge-secondary">NEW</div>
        </h2>
       
        <div className="card-actions card-body flex flex-col justify-center items-center text-center">
        <div className="badge badge-outline">£{price}</div>
          <button className="btn btn-primary " onClick={onAddToCart}>
            Add to Cart
          </button>
           
        </div>
      </div>
    </div>
  )
}


export default newCards

