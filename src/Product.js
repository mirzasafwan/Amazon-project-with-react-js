import React from 'react'
import "./Product.css";
import { useStateValue } from './StateProvider';
function Product({id,title,price,image}) {
   const[{cart},dispatch]=useStateValue();
   console.log("in side cart",cart)
   const addtoCart=()=>{
       dispatch(
           {
           type:"Add_to_Cart",
           item:{
               id:id,
               title:title,
               price:price,
               image:image,
           }    
           }
       );
   }
    return (
        <div className="product">
            <div class="product__info">
                <p>{title}</p>  
            <p className="product__price">
                <bold>₹</bold>
                <strong>{price}</strong>
            </p>
            <img className="product__image" src={image} alt="Loading Failed"/>
            </div>
            <button className="product__button" onClick={addtoCart}>Add to Cart</button>
        </div>

    )
}
export default Product
