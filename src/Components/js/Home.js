import React from'react';
import '../css/home.css'
import NavBar from './Navbar'
import CarouselHome from './Carousel';
import BackgroundImage from './Background';
import AboutUs from './AboutUs';
import Banner from './Banners';

function Home() {
  return (
    <>
      <NavBar />
      {/* <BackgroundImage src="https://i.ibb.co/Sn9YBC4/fondo-pets-hub.jpg" /> */}

      <div className="carousel-container">
        <CarouselHome />
      </div>
      <Banner />
      <AboutUs />

    </>
  );
}

export default Home;