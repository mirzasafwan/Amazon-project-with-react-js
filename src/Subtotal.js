import React from 'react'
import "./Subtotal.css"
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from './reducer';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
 
function Subtotal() {
    const [{cart},dispatch]=useStateValue();
    const history= useHistory()
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
            <button onClick={e=>history.push('/payment')}>Proceed to Buy</button>
        </div>
    )
}

export default Subtotal
