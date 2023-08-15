import React from "react";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";
// import imgPath from "../assets/img/my-pic-1.jpeg";
import ImagePath from "../../assets/images/my-pic-1.jpeg";

function Header({ currentPage, setCurrentPage }) {
  return (
    <header id="home" className="header text-center bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3">
            <div className="image-container">
              <img
                src={ImagePath}
                // src="../src/assets/img/my-pic-1.jpeg"
                alt="Stephen"
                className="img-fluid rounded-circle animated-image"
              />
            </div>
          </div>
          <div className="col-md-9 text-md-left text-center">
            <h1 className="h1">
              <strong>Stephen Mov</strong>
            </h1>
            <Navigation
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
