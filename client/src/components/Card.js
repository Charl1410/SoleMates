import React from 'react';


export default function Card () {
    return (
    
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="http://i1.adis.ws/i/truworths/prod3066641_1.jpeg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
    <button className="btn btn-primary">Buy Now</button>
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>

      )

}