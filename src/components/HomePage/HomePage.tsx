import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import ServicesSection from '../ServicesSection/ServicesSection';
import CoursesSection from '../CoursesSection/CoursesSection';
import TestimonialsSection from '../TestimonialsSection/TestimonialsSection';
import ContactSection from '../ContactSection/ContactSection';
import Footer from '../Footer/Footer';
import './HomePage.scss';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <ServicesSection />
      <CoursesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
