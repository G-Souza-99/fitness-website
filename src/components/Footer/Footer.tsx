// src/components/Footer/Footer.tsx

import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp as faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer">
        <p>&copy; 2024 Your Fitness Brand. All rights reserved.</p>
        <p>
          Website developed by{' '}
          <a
            href="https://www.linkedin.com/in/gsouzaa4/"
            target="_blank"
          >
            Gabriel De Souza 
          </a>
        </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/gsouzaa4/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/G-Souza-99"
            target="_blank"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        className="scroll-to-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </>
  );
};

export default Footer;
