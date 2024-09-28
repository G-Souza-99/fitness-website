// src/components/AboutMe/AboutMe.tsx

import React from 'react';
import { Helmet } from 'react-helmet';
import './AboutMe.scss';
import profilePic from '../../assets/images/hero-bg2.jpg'; // Ensure you have a profile image in this path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutMe: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Me - Luis Nicolau Personal Trainer</title>
        <meta
          name="description"
          content="Learn more about Luis Nicolau, a dedicated personal trainer committed to helping you achieve your fitness goals."
        />
      </Helmet>
      
      <div className="about-me-page">
        <div className="profile-section">
          <img src={profilePic} alt="Luis Nicolau" className="profile-pic" />
          <div className="profile-info">
            <h1>About Me</h1>
            <p>
              Hi, I'm Luis Nicolau, a certified personal trainer with over 10 years of experience in helping individuals achieve their fitness goals. My mission is to provide personalized training programs that cater to your unique needs and lifestyle.
            </p>
            <div className="social-links">
              <a
                href="https://www.facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={['fab', 'facebook']} />
              </a>
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </a>
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
              {/* Add more social links as needed */}
            </div>
          </div>
        </div>

        <div className="experience-section">
          <h2>My Experience</h2>
          <div className="experience-item">
            <h3>Certified Personal Trainer</h3>
            <p>National Academy of Sports Medicine (NASM) - 2012</p>
          </div>
          <div className="experience-item">
            <h3>Strength and Conditioning Specialist</h3>
            <p>International Sports Sciences Association (ISSA) - 2015</p>
          </div>
          <div className="experience-item">
            <h3>Nutrition Coach</h3>
            <p>Precision Nutrition - 2018</p>
          </div>
          {/* Add more experience items as needed */}
        </div>

        <div className="skills-section">
          <h2>My Skills</h2>
          <ul className="skills-list">
            <li>
              <FontAwesomeIcon icon="check-circle" className="skill-icon" />
              Personalized Training Programs
            </li>
            <li>
              <FontAwesomeIcon icon="check-circle" className="skill-icon" />
              Nutrition Planning
            </li>
            <li>
              <FontAwesomeIcon icon="check-circle" className="skill-icon" />
              Strength Training
            </li>
            <li>
              <FontAwesomeIcon icon="check-circle" className="skill-icon" />
              Weight Management
            </li>
            <li>
              <FontAwesomeIcon icon="check-circle" className="skill-icon" />
              Injury Prevention
            </li>
            <li>
              <FontAwesomeIcon icon="check-circle" className="skill-icon" />
              Online Coaching
            </li>
            {/* Add more skills as needed */}
          </ul>
        </div>

        <div className="contact-section">
          <h2>Get in Touch</h2>
          <p>If you're ready to start your fitness journey or have any questions, feel free to reach out!</p>
          <a href="/contact" className="contact-button">Contact Me</a>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
