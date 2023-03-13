import React from 'react';
// import { Link } from 'react-router-dom';

const BasketCard = (props) => {
        console.log(props)
        const {title, image, price} = props; 

    return (
    <>
        <h1 class="text-4xl font-extrabold dark:text-white text-center m-5" >Your Basket</h1>

        <div className="card card-side bg-base-100 shadow-xl m-5">
        <figure><img src={`${image}`} alt={title} class="w-96"/></figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>Description</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">£{price}</div> 
            <button className="btn btn-primary">Remove</button>
            </div>
        </div>
        </div>

</>

      )
}

export default BasketCard