// src/components/ServicesSection/ServicesSection.tsx

import React from 'react';
import './ServicesSection.scss';
import personalTraining from '../../assets/images/personal-training.jpg';
import groupTraining from '../../assets/images/group-training.jpg';
import nutrition from '../../assets/images/nutrition.jpg';
import { Link } from 'react-router-dom';

const services = [
  { title: 'Personal Training', image: personalTraining },
  { title: 'Group Training', image: groupTraining },
  { title: 'Nutrition Plans', image: nutrition },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>Discover how we can help you achieve your goals.</p>
            <Link to={`/services/${service.title.toLowerCase().replace(' ', '-')}`}>
              <button className="cta-button">Learn More</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
