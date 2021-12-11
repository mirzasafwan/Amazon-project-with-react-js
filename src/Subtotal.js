import React from 'react'
import "./Subtotal.css"
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from './reducer';
 
function Subtotal() {
    const [{cart},dispatch]=useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value)=>(
            <>
            <p>Subtotal({cart.length} items): <strong>{value}</strong></p>
            <small className="subtotal__gift"><input type="checkbox" />This code contains gift</small>
            </>
            )}
            decimalScale={2}
            value={getCartTotal(cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            />
            <button>Proceed to Buy</button>
        </div>
    )
}

export default Subtotal
