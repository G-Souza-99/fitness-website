import React from 'react';
import './ContactSection.scss';

const ContactSection: React.FC = () => {
  return (
    <section className="contact-section">
      <h2>Get in Touch</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button className="cta-button" type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactSection;
