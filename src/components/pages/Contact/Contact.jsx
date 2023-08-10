// src/components/Contact.jsx
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection && window.scrollY >= contactSection.offsetTop - window.innerHeight / 2) {
        setAnimate(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="contact" className={animate ? 'animate' : ''}>
      <h2>Contact</h2>
      <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
      <div className={`inquiry-text ${animate ? 'animate' : ''}`}>Make an inquiry</div>
      <div className="social-icons">
        <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/your_username" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/your_username" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
