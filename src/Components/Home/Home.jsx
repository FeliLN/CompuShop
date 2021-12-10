import React, { useState } from 'react'
// import { Button } from 'react-bootstrap'
import  CarouselComponent  from './Carousel/CarouselComponent';
import './Home.css'
import Intel from '../img/intel.png'
import Amd from '../img/amd.png'
import Nvidia from '../img/nvidia.png'
// import FondoProcesadores from '../img/circle.png'

const Home = () => {

// const [isLoading, setisLoading] = useState(false);
// const [speed, setSpeed] = useState(100);

//useEffect(() => {
    //isLoading = true;
    //setShow(true);
    



    return (
        <div>
            <section >
                <CarouselComponent />
            </section>
            
            <div className="procesadores" 
           
            > 
                {/* <img src={FondoProcesadores} alt="fondo" className="fondoProcesadores" style={{animation: `spin ${speed}s linear infinite`}}/> */}
                <button  className="buttonShop">Get Started!</button>
                <section className="logo-procesadores" >
                    <img src={Intel} alt="intel" className="intel" color="grey" />   
                    <img src={Amd} alt="amd" className="amd" />  
                </section> 
            </div>
            <section className="video" >
                <img src={Nvidia} alt="nvidia" className="nvidia" />
            </section>
                
            

        </div>
    )
}

export default Home



