import React from 'react'
import Product from './Product';
import "./Home.css";
function Home() {
    return (
        <div className="Home">
            <div className="Home__box">
           <img className="Home__img" src="https://m.media-amazon.com/images/I/61VAXLxegiL._SX3000_.jpg" alt="Loading Failed"/>
        
        <div className="Home__container">
            <Product
            id="01"
            title="See U in C by Ali Karim Sayed (Author)"
            price={4450}
            image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg" alt="Loading Failed"
            />
            <Product
            id="02"
            title="Amazon Brand - Solimo 12-inch Wall Clock - Classic Roulette "
            price={629}
            image="https://m.media-amazon.com/images/I/81XEPquUw3L._SL1500_.jpg" alt="Loading Failed"
            />
            <Product
            id="03"
            title="
            Redgear A-20 Wired Gaming Mouse with RGB and Upto"
            price={799}
            image="https://m.media-amazon.com/images/I/51T4TveQd5L._SL1000_.jpg"
            />
        </div>
        
        <div className="Home__container">
        <Product
            id="04"
            title="New Apple iPhone 12 Pro Max (256GB) - Pacific Blue with Apple 20W USB-C Power Adapter"
            price={125205}
            image="https://m.media-amazon.com/images/I/71caibxmUlL._SL1500_.jpg" alt="Loading Failed"
            />
        <Product
            id="05"
            title="ASUS ROG G531GT-BI7N6 15.6 FHD Gaming Laptop"
            price={138043}
            image="https://m.media-amazon.com/images/I/71CSbyoByWL._SL1500_.jpg" alt="Loading Failed"
            />    
        </div>

        <div className="Home__container">
        <Product
            id="06"
            title="
            OnePlus 9R 5G (Lake Blue, 8GB RAM, 128GB Storage)"
            price={39999}
            image="https://images-eu.ssl-images-amazon.com/images/I/415z6pkibAL._SX300_SY300_QL70_FMwebp_.jpg"
            />
        </div>
        
        </div>
        </div>
    )
}

export default Home
