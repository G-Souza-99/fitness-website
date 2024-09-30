// src/components/HeroSection/HeroSection.tsx

import React from 'react';
import Slider from 'react-slick';
import './HeroSection.scss';

const HeroSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
  };

  return (
    <section className="hero-section">
      <Slider {...settings}>

        <div className="slick-slide slide-1">
          <div className="hero-black-overlay"></div>
          
          <div className="hero-overlay">
            <h1>Training Programs</h1>
            <p>Personal training, outdoor, at home</p>
            <button className="cta-button">See Plans</button>
          </div>
        </div>

        <div className="slick-slide slide-2">
          <div className="hero-black-overlay"></div>
          
          <div className="hero-overlay">
            <h1>Training Online</h1>
            <p>Workout anywhere and whenever</p>
            <button className="cta-button">Start Now</button>
          </div>
        </div>

        <div className="slick-slide slide-3">
          <div className="hero-black-overlay"></div>
          
          <div className="hero-overlay">
            <h1>Equipment</h1>
            <p>Get ready to workout with top-tier equipment</p>
            <button className="cta-button">Shop Now</button>
          </div>
        </div>
        
      </Slider>
    </section>
  );
};

export default HeroSection;
