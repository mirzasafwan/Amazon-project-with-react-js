import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title, price, image }) {
    const [{cart},dispatch]=useStateValue();
    const removeFromCart=()=>{
        dispatch({
            type:"Remove_From_Cart",
            id:id,
        })
    }
    return (
        <div className='Checkout_product'>
            <img className='Checkout_img' src={image} alt=''/>

            <div className='Checkout_info'>
                <p className='Checkout_title'>{title}</p>
                <p className='Checkout_price'>
                <bold>₹</bold>
                <strong>{price}</strong>
                </p>
                <button onClick={removeFromCart}>Remove From Cart</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct