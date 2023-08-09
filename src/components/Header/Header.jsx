// components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3">
            <img
              src="img/my-pic-1.jpeg" // Replace with the actual path to your image
              alt="Your Name"
              className="img-fluid rounded-circle"
              style={{ width: '100px', height: '100px' }}
            />
          </div>
          <div className="col-md-9 text-md-left text-center">
            <h1 className="display-4">Your Name</h1>
            <nav className="nav justify-content-center justify-content-md-start">
              <a className="nav-link" href="#about">About</a>
              <a className="nav-link" href="#projects">Projects</a>
              <a className="nav-link" href="#contact">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
