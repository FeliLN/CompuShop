import React from 'react'
import  CarouselComponent  from './Carousel/CarouselComponent';
import './Home.css'
import imgHeader from './Carousel/imgHeader.png'

const Home = () => {


    return (
        <div>
          
            <section >
                
                <CarouselComponent />
            <section className="imgs" >
                    <h1>Esto esta solved</h1>
                <img src={imgHeader} alt="imgHeader" className="img-fluid" />
                <img src={imgHeader} alt="imgHeader" className="img-fluid" />
                <img src={imgHeader} alt="imgHeader" className="img-fluid" />
                <img src={imgHeader} alt="imgHeader" className="img-fluid" />
                <img src={imgHeader} alt="imgHeader" className="img-fluid" />
                <img src={imgHeader} alt="imgHeader" className="img-fluid" />
                <img src={imgHeader} alt="imgHeader" className="img-fluid" />
                <img src={imgHeader} alt="imgHeader" className="img-fluid" />
                <img src={imgHeader} alt="imgHeader" className="img-fluid" />
                <img src={imgHeader} alt="imgHeader" className="img-fluid" />
                <img src={imgHeader} alt="imgHeader" className="img-fluid" />
                <img src={imgHeader} alt="imgHeader" className="img-fluid" />
                </section>
            </section>

        </div>
    )
}

export default Home



