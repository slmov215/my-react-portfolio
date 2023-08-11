import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";

const pages = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
  { name: "Resume", path: "/resume" },
];

function Navigation({ currentPage, setCurrentPage, handleCloseNavMenu }) {
  return (
    <nav className="nav justify-content-center justify-content-md-start">
      {pages.map((page) => (
        <Link
          key={page.name}
          to={page.path} // Use Link to create navigation links
          className="nav-link"
        >
          {page.name}
        </Link>
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
