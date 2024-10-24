// src/components/ServicesSection/ServicesSection.tsx

import React, { useState } from 'react';
import './ServicesSection.scss';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';

const ServicesSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="services-section">
      <div
        className="services-container"
        onMouseLeave={() => setExpandedIndex(null)}
      >
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`service-card ${
              expandedIndex === index ? 'expanded' : expandedIndex === null ? 'normal' : 'collapsed'
            }`}
            onMouseEnter={() => setExpandedIndex(index)}
          >
            <img src={service.image} alt={service.name} />
            <div className="content">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <Link to={`/services/${service.slug}`}>
                <button className="cta-button">Learn More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
