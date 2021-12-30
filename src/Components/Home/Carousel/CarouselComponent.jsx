import React, { Suspense } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ImgHeader from '../../img/imgHeader1.jpg'
import './Carousel.css'
import  ThemeScene  from '../ThemeScene';
import Shoe from '../Logo'

import { OrbitControls, Stage, BakeShadows } from '@react-three/drei'

const CarouselComponent = () => {

  


  return(
    <Carousel >
      <Carousel.Item interval={10000}>
        <div style={{height : '100vh'}}>
          <ThemeScene >
          <color attach="background" args={['cyan']} />
           <Suspense fallback={null}>
        <Stage >
          <Shoe position={[0, 0, 0]} autoRotate />
          <Shoe scale={-1} rotation={[0, 0.5, Math.PI]} position={[0, 0, -2]} />
        </Stage>
        <BakeShadows />
      </Suspense>
      <OrbitControls autoRotate enableZoom={false} />
           <ambientLight/>
          
          </ThemeScene>
        </div> 
        <Carousel.Caption>
          <h1>First slide label</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={ImgHeader}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>Second slide label</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ImgHeader}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Third slide label</h1>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      )
    }
export default CarouselComponent;
