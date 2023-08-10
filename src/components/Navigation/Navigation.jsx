import React from "react";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";


const pages = ["About", "Project", "Contact"];

function Navigation({ currentPage, setCurrentPage, handleCloseNavMenu }) {
  return (
    <nav className="nav justify-content-center justify-content-md-start">
      {pages.map((page) => (
        <a
        key={page}
        href={`#${page}`}
          onClick={() => setCurrentPage(page)}
          className={currentPage === page ? "nav-link active" : "nav-link"}
        >
          {page}</a>
      ))}


      {/* <a
        id="nav-link"
        href="#about"
        onClick={() => setCurrentPage("About")}
        className={currentPage === "About" ? "nav-link active" : "nav-link"}
      >
        About
      </a>
      <a
        id="nav-link"
        href="#projects"
        onClick={() => setCurrentPage("Projects")}
        className={currentPage === "Projects" ? "nav-link active" : "nav-link"}
      >
        Projects
      </a>
      <a
        id="nav-link"
        href="#contact"
        onClick={() => setCurrentPage("Contact")}
        className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
      >
        Contact
      </a> */}
    </nav>
  );
}

// Export
export default Navigation;
