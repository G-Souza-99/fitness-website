// src/components/HeroSection/HeroSection.tsx

import React from 'react';
import './HeroSection.scss';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <h1>Transform Your Life</h1>
        <p>Achieve your fitness goals with personalized training and courses.</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
