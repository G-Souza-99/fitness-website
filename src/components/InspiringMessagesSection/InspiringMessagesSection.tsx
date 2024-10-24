// src/components/InspiringMessagesSection/InspiringMessagesSection.tsx

import React from 'react';
import './InspiringMessagesSection.scss';
import breakthroughImage from '../../assets/images/breakthrough.png';
import elevateImage from '../../assets/images/elevate.png';
import unlockImage from '../../assets/images/unlock.png';

const messages = [
  {
    title: 'Breakthrough Performance',
    description:
      'Unlock Your Full Potential with Our Cutting-Edge Online Training Program',
    image: breakthroughImage,
  },
  {
    title: 'Unlock Your Potential',
    description:
      'Discover the Joy of Outdoor Training with Our Dynamic Sessions',
    image: unlockImage,
  },
  {
    title: 'Elevate Your Fitness',
    description:
      'Embrace the Convenience of Onsite Training at RiseUp. Elevate Your Workout Experience with State-of-the-Art Facilities, Personalized Coaching',
    image: elevateImage,
  },
];

const InspiringMessagesSection: React.FC = () => (
  <section className="inspiring-messages-section">
    <div className="messages-container">
      {messages.map((message, index) => (
        <div key={index} className="message-card">
          <img src={message.image} alt={message.title} />
          <h2>{message.title}</h2>
          <p>{message.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default InspiringMessagesSection;
