import React, { useState, useEffect} from 'react'
import './App.css';
import { NavBar } from './Components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Footer from './Components/Footer/Footer';
import Axios from 'axios';
// import  ThemeScene  from './Components/Home/ThemeScene';
// import Shoe from './Components/Home/Logo'

// import { OrbitControls, Stage, BakeShadows } from '@react-three/drei'

function App(props) {
    const [searchItem, setSearchItem] = useState('tech');
   
    const api = 'https://api.mercadolibre.com/sites/MLA/search?q=' + searchItem;
    const [cartas, setCartas] = useState([]);
    
    useEffect(() => {
        Axios.get(api)
        .then (response => {
            setCartas(response.data.results);
        })
    }, [api]);
    
    const handleChange = (e) => {
        setSearchItem(e.target.value);
        return searchItem;
    }

    const handleSearch = ( endSearch ) => {
        let searchResults = cartas.filter((e)=>{
          if(e.title.toString().toLowerCase().includes(endSearch.toString().toLowerCase())){
              return e;
          } else {
            return e;
          }
        });
        setSearchItem(searchResults);
    };
    
    const onSubmit = (e) => {
      e.preventDefault();
    };
        
  return (
    <div className="App">
      <section className="App-content">
        <BrowserRouter>
        
          <section className="NavBar">
          <NavBar 
              handleSearch={handleSearch}
              handleChange={handleChange}
              searchItem={searchItem}
              onSubmit={onSubmit}
              />
          </section>

          <section className="Routes">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="shop/*" element={<Shop cartas={cartas} />} />
            </Routes>
          </section>

          <Footer /> 

        </BrowserRouter>
      </section>
    </div>
  
  );
}

export default App;