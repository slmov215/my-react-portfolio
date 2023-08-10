// components/Header.jsx
import React from 'react';
import { useState } from "react";
import Navigation from '../Navigation/Navigation'
import "./Header.css";


function Header({currentPage, setCurrentPage}){
  return (
    <header id="home" className="header text-center bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3">
            <img
              src="\src\assets\img\my-pic-1.jpeg"
              alt="Stephen"
              className="img-fluid rounded-circle"
              style={{ width: '100px', height: '100px' }}
            />
          </div>
          <div className="col-md-9 text-md-left text-center">
            <h1 className="display-4">Stephen Mov</h1>
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
