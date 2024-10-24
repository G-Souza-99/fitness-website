// src/components/Banner/Banner.tsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Banner.scss';

interface BannerProps {
  image: string;
  title: string;
  description: string;
  onBack?: () => void;
  className?: string; // Optional additional class names
}

const Banner: React.FC<BannerProps> = ({ image, title, description, onBack, className = '' }) => {
  return (
    <div className={`banner ${className}`.trim()}>
      <img src={image} alt={`${title} Banner`} className="banner-img" />
      <div className="banner-overlay"></div>
      <div className="banner-text">
        <div className="heading-with-arrow">
          {onBack && (
            <FontAwesomeIcon
              icon={faArrowLeft}
              onClick={onBack}
              className="back-arrow"
              aria-label="Go Back"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onBack();
                }
              }}
            />
          )}
          <h1>{title}</h1>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Banner;
