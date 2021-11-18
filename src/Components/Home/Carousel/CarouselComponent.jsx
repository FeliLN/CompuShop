import Carousel from 'react-bootstrap/Carousel'


const CarouselComponent = () => {
  return(
<Carousel >
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://www.latercera.com/resizer/zXy2WHJMbLQZ9-IQWyUTFAva1FE=/375x250/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/DYIU5QCGHJAJFOHFJXLPDJRS5Y.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>First slide label</h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://www.latercera.com/resizer/zXy2WHJMbLQZ9-IQWyUTFAva1FE=/375x250/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/DYIU5QCGHJAJFOHFJXLPDJRS5Y.jpg"
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
      src="https://www.latercera.com/resizer/zXy2WHJMbLQZ9-IQWyUTFAva1FE=/375x250/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/DYIU5QCGHJAJFOHFJXLPDJRS5Y.jpg"
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
