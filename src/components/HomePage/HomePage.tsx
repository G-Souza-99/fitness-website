import React, { useState, useEffect } from 'react';
import HeroSection from '../HeroSection/HeroSection';
import InspiringMessagesSection from '../InspiringMessagesSection/InspiringMessagesSection';
import ServicesSection from '../ServicesSection/ServicesSection';
import CoursesSection from '../CoursesSection/CoursesSection';
import TestimonialsSection from '../TestimonialsSection/TestimonialsSection';
import ContactSection from '../ContactSection/ContactSection';
import Footer from '../Footer/Footer';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './HomePage.scss';

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="home-page">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="home-page">
      <HeroSection />
      <InspiringMessagesSection />
      <ServicesSection />
      <CoursesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
