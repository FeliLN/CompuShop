import React, { useState, useEffect} from 'react'
import './Shop.css';
import Axios from 'axios';

function formatPrice(price) {
    return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


const Shop = () => {

    const [cartas, setCartas] = useState([]);
    
    useEffect(() => {
        Axios.get('https://api.mercadolibre.com/sites/MLA/search?q=pc')
        .then (response => {
            console.log(response);
            setCartas(response.data.results);
        })
    }, []);
    
    const listItems = cartas.map((d) => 
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

                    {/* {shop.items.map(item => <Carta key={item.id} item={item} img={item.img}/>)} */}
                </section>
            </div>
        </div>
    )
}

export default Shop;
