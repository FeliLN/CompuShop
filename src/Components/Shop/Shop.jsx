import React, { useState, useEffect} from 'react'
import './Shop.css';
import Axios from 'axios';


const Shop = () => {

    const [cartas, setCartas] = useState([]);
    
    useEffect(() => {
        Axios.get('https://api.mercadolibre.com/sites/MLA/search?q=computadoras')
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
           $ {d.price} 
        </div>
        <button className="button">Comprar</button>
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
