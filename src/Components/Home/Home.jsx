import React from 'react'
import  CarouselComponent  from './Carousel/CarouselComponent';
import './Home.css'
import imgHeader from './Carousel/imgHeader.png'

const Home = () => {


    return (
        <div>
          
            <section >
                
                <CarouselComponent />
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

        </div>
    )
}

export default Home



