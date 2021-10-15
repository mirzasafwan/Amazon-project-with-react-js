import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';
function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__img" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21P1/pay_stripe_desk.png" alt="Loading Failed"/>
                <div>
                    <h3 className="checkout__title">Your Shopping Details</h3>
                </div>
            </div>

            <div className="checkout__right">
            <Subtotal/>
                
            </div>
        </div>
    )
}

export default Checkout
