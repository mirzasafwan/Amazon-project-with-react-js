import React from 'react'
import "./Product.css";
function Product({id,title,price,image}) {
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
            <button className="product__button">Add to Cart</button>
        </div>

    )
}
export default Product
