import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom'; // Using useNavigate
import './AboutMe.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Assuming you're using FontAwesome icons
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import bannerImage from '../../assets/images/about-me.jpg'; // Replace with correct image path
import profilePic1 from '../../assets/images/group-training.jpg'; // Replace with correct image path
import profilePic2 from '../../assets/images/group-training.jpg'; // Replace with correct image path

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
      
      <div className="about-me">
        <div className="banner">
          <img src={bannerImage} alt="About Me Banner" className="banner-img" />
          <div className="about-black-overlay"></div>
          <div className="banner-text">
            <div className="heading-with-arrow">
              <FontAwesomeIcon icon={faArrowLeft} onClick={handleGoBack} className="back-arrow" />
              <h1>About Me</h1>
            </div>
            <p>Discover my journey, expertise, and how I can help you achieve your fitness goals.</p>
          </div>
        </div>

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
        </div>
      </div>
    </>
  );
};

export default AboutMe;
