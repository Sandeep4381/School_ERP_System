// src/components/OurCoursePageSections/ContactSection.jsx

import React from 'react';
// Import your CSS file for styling

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-us-box">
        <h3>Contact Us</h3>
        <ul>
          <li><span role="img" aria-label="location-icon">📍</span> Visit Us: 123 Main St, Anytown, USA</li>
          <li><span role="img" aria-label="email-icon">📧</span> Email Us: contact@school.com</li>
          <li><span role="img" aria-label="phone-icon">📞</span> Call Us: +91 7833...</li>
        </ul>
      </div>
      <div className="get-in-touch-box">
        <h3>Get in Touch</h3>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Your Query" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;