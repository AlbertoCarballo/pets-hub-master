import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carouselImages from './CarouselImg.js';
import ExampleCarouselImage from './ExampleCarouselImage.js';

function CarouselHome() {
  return (
    <>
      <Carousel>
        {carouselImages.map((image, index) => (
          <Carousel.Item key={index}>
            <ExampleCarouselImage src={image.src} alt={image.alt}/>
            <Carousel.Caption>
              <h3>{image.caption.title}</h3>
              <p>{image.caption.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default CarouselHome;
