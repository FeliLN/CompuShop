import React from 'react'
import './Shop.css';


function formatPrice(price) {
    return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}



const Shop = (props) => {

    const listItems = props.cartas.map((d) => 
    <li key={d.id} img={d.thumbnail}> 
        <img className="producto" alt="new" src={d.thumbnail} /> 
        <div className="title">
            {d.title}
        </div>
        <div className="price">
           $ {formatPrice(d.price)} 
        </div>
        <button className="btn-grad ">Añadir al carrito</button>
    </li>
    );
 
    return (    
        <div className="shop">
            <div className="Board">
                <section className="Cartas">
                   {listItems}
                </section>
            </div>
        </div>
    )
}

export default Shop;
