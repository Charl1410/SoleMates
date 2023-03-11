import React from 'react';
// import { Link } from 'react-router-dom';

const Card = ( props ) => {

  console.log(props)
  const {title, image, price} = props;

  return (
  <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={`${image}`} alt={title} /></figure>
    <div className="card-body">
      <h2 className="card-title">
        {title}
        {/* this NEW badge can be used for homepage cards that are generated to show the newest products */}
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to Cart</button>
        <div className="badge badge-outline">£{price}</div> 
      </div>
    </div>
</div>

      )
}

export default Card