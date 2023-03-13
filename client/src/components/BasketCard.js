import React from 'react';
// import { Link } from 'react-router-dom';

const BasketCard = () => {


  return (
    <>
    <h1 class="text-4xl font-extrabold dark:text-white text-center m-5" >Your Basket</h1>

<div className="card card-side bg-base-100 shadow-xl m-5">
  <figure><img src="https://www.sneakersnstuff.com/images/228343/cd4487-100-1.jpg" alt="Movie" class="w-96"/></figure>
  <div className="card-body">
    <h2 className="card-title">Shoe name</h2>
    <p>Description</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Remove</button>
    </div>
  </div>
</div>

<div className="card card-side bg-base-100 shadow-xl ">
  <figure><img src="https://images.timberland.com/is/image/TimberlandEU/10061713-hero?wid=720&hei=720&fit=constrain,1&qlt=85,1&op_usm=1,1,6,0" alt="Movie" class="w-96"/></figure>
  <div className="card-body">
    <h2 className="card-title">Shoe name</h2>
    <p>Description</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Remove</button>
    </div>
  </div>
</div>
</>

      )
}

export default BasketCard