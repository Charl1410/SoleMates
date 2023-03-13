import React from 'react';
import { Link } from 'react-router-dom';

const Card = ( props ) => {

  console.log(props)
  const {title, image, price, _id, onAddToCart} = props;

  return (
    // Need to fix scale property here 
  <div className="card w-96 bg-base-100 shadow-xl m-5 w-80 transition duration-500 hover:scale-125 ">
    <figure><img src={`${image}`} alt={title} /></figure>
    <div className="card-body">
      <h2 className="card-title"><Link to={`/product/${_id}`}>
        {title}</Link>
        {/* this NEW badge can be used for homepage cards that are generated to show the newest products */}
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <div className="card-actions justify-end">
      <button className="btn btn-primary " onClick={onAddToCart} >Add to Cart</button>
        <div className="badge badge-outline">£{price}</div> 
      </div>
    </div>
</div>

      )
}

export default Card