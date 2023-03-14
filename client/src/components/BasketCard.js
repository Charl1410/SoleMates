import { Link } from 'react-router-dom';

const BasketCard = (props) => {

        const {title, image, price, _id, onRemoveFromCart} = props; 

    return (
    <>

        <div className="card card-side bg-base-100 shadow-xl m-5">
        <figure><img src={`${image}`} alt={title} class="w-96"/></figure>
        <div className="card-body">
            <h2 className="card-title"><Link to={`/product/${_id}`}>{title}</Link>
            </h2>
            <p>Description</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">£{price}</div> 
            <button className="btn btn-primary" onClick={onRemoveFromCart}>Remove</button>
            </div>
        </div>
        </div>
</>
      )
}

export default BasketCard