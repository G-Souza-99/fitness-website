import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const ServicePage: React.FC = () => {
  const { serviceName } = useParams<{ serviceName: string }>();

  // Fetch or display data based on serviceName
  // For example:
  // const serviceData = services.find(service => service.name === serviceName);

  return (
    <>
      <Helmet>
        <title>Services</title>
        <meta name="Services" content="Services page." />
      </Helmet> 
      
      <div className="service-page">
        <h1>{serviceName}</h1>
        {/* Render service details here */}
      </div>
    </>
  );
};

export default ServicePage;
