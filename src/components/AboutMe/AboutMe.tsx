// src/components/AboutMe/AboutMe.tsx

import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import './AboutMe.scss';
import profilePic1 from '../../assets/images/group-training.jpg'; // Replace with correct image path
import profilePic2 from '../../assets/images/group-training.jpg'; // Replace with correct image path
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner'; // Import the Banner component
import bannerImage from '../../assets/images/about-me.jpg'; // Replace with correct image path

const AboutMe: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1); // Go back in the browser history
    } else {
      navigate('/'); // Redirect to home if no previous page
    }
  };

  return (
    <>
      <Helmet>
        <title>About Me - Luis Nicolau Personal Trainer</title>
        <meta
          name="description"
          content="Learn more about Luis Nicolau, a dedicated personal trainer committed to helping you achieve your fitness goals."
        />
      </Helmet>

      <Banner
        image={bannerImage}
        title="About Me"
        description="Discover my journey, expertise, and how I can help you achieve your fitness goals."
        onBack={handleGoBack}
      />

      <div className="about-me">
        <div className="container">
          <section className="section">
            <div className="image-content">
              <img src={profilePic1} alt="Pilates Training" />
            </div>
            <div className="text-content">
              <h2>Pilates</h2>
              <p>
                My training in Pilates focuses on mindful bodywork, aligning and activating every muscle structure.
                With balanced loads on all muscle groups combined with necessary breathing techniques, I ensure
                concentration and precision in every movement.
              </p>
            </div>
          </section>

          <section className="section">
            <div className="image-content">
              <img src={profilePic2} alt="Strength Training" />
            </div>
            <div className="text-content">
              <h2>Aplomb</h2>
              <p>
                Aplomb is a training system utilizing resistance bands. These exercises focus on flexibility, strength, and
                balancing physical movements to improve body posture and coordination. Aplomb exercises refine motor
                skills and enhance overall body strength, which leads to better functional movement.
              </p>
            </div>
          </section>

          <section className="section">
            <div className="image-content">
              <img src={profilePic1} alt="Pilates Training" />
            </div>
            <div className="text-content">
              <h2>Pilates</h2>
              <p>
                My training in Pilates focuses on mindful bodywork, aligning and activating every muscle structure.
                With balanced loads on all muscle groups combined with necessary breathing techniques, I ensure
                concentration and precision in every movement.
              </p>
            </div>
          </section>

          <section className="section">
            <div className="image-content">
              <img src={profilePic2} alt="Strength Training" />
            </div>
            <div className="text-content">
              <h2>Aplomb</h2>
              <p>
                Aplomb is a training system utilizing resistance bands. These exercises focus on flexibility, strength, and
                balancing physical movements to improve body posture and coordination. Aplomb exercises refine motor
                skills and enhance overall body strength, which leads to better functional movement.
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutMe;
