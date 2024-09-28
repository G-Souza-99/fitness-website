// src/components/ServicePage/ServicePage.tsx

import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import './ServicePage.scss';

const serviceData = [
  {
    id: 'personal-training',
    name: 'Personal Training',
    description: 'One-on-one personalized training sessions.',
    image: '/assets/images/personal-training.jpg',
  },
  // Add more service data as needed
];

const ServicePage: React.FC = () => {
  const { serviceName } = useParams<{ serviceName: string }>();

  const service = serviceData.find(
    (s) => s.id === serviceName
  );

  if (!service) {
    return <div>Service not found.</div>;
  }

  return (
    <>
      <Helmet>
        <title>{service.name} - Services</title>
        <meta name="description" content={`Details about ${service.name}.`} />
      </Helmet>

      <div className="service-page">
        <div className="service-image">
          <img src={service.image} alt={service.name} />
        </div>
        <div className="service-details">
          <h1>{service.name}</h1>
          <p>{service.description}</p>
          {/* Add more details or a call-to-action button */}
        </div>
      </div>
    </>
  );
};

export default ServicePage;
