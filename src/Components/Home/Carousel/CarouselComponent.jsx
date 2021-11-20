import Carousel from 'react-bootstrap/Carousel'
import './Carousel.css'
import imgHeader from './imgHeader.png'
const CarouselComponent = () => {
    
  const prevIcon = <span className="carousel-control-prev-icon" height="100px"></span>

  return(
<div className="carousel" >
    <Carousel prevIcon={prevIcon} >
    <Carousel.Item interval={1000}  >
        <img
        className="d-block"
        src={imgHeader}
        alt="First slide"
        />
        <Carousel.Caption>
        <h1>First slide label</h1>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
        <img
        className="d-block"
        src={imgHeader}
        alt="Second slide"
        />
        <Carousel.Caption>
        <h1>Second slide label</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block"
        src={imgHeader}     
        alt="Third slide"
        />
        <Carousel.Caption>
        <h1>Third slide label</h1>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block"
        src={imgHeader}
        
        alt="Third slide"
        />
        <Carousel.Caption>
        <h1>Third slide label</h1>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
</div>
  )
}
export default CarouselComponent;

/*
import React from "react";
import imgHeader from './imgHeader.png'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

const CarouselComponent = () => {
  return (
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={imgHeader}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Light mask</h3>
            <p>First text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={imgHeader}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Strong mask</h3>
            <p>Second text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={imgHeader}
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Slight Mast</h3>
            <p>Third text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselComponent;*/