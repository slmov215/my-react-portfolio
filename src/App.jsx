// import { useState } from 'react'
import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import "./styles.css";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <footer>
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
        <p>Email: <a href="mailto:slmov215@gmail.com">slmov215@gmail.com</a></p>
      </footer>
    </div>
  );
};

export default App;
