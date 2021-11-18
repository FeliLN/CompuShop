import React from 'react'; 
import './App.css';
import { NavBar } from './Components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Slider from './Components/Home/Slider/Slider';
  

function App() {

  
  return (
    <div className="App">
      <section className="App-content">
     
      <BrowserRouter>
        < NavBar /> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="shop/*" element={<Shop />} />
          </Routes>
      {/*< Slider />*/}  

       
      </BrowserRouter>
      </section>
    </div>
  );
}

export default App;
