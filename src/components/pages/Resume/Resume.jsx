import React from "react";
import { Link } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Resume.css"; // Create a CSS file for Resume styles

const Resume = () => {
  return (
    <section id="resume" className="py-5 text-center">
      <div className="container">
        <Slide bottom>
          <h2 className="mb-4">Resume</h2>
        </Slide>
        <Slide bottom>
          <a
            href="/path-to-your-resume.pdf" // Replace with your actual resume file path
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            <FaFilePdf className="resume-icon" />
            Download Resume
          </a>
        </Slide>
        <Slide bottom>
          <div className="proficiencies">
            <h4>Proficiencies</h4>
            <ul>
              <li>Front-end Development</li>
              <li>React and Redux</li>
              <li>HTML, CSS, JavaScript</li>
              <li>Responsive Design</li>
              <li>RESTful APIs</li>
              <li>Git and Version Control</li>
            </ul>
          </div>
        </Slide>
        <Slide bottom>
          <Link to="/" className="btn btn-back">
            Back Home
          </Link>
        </Slide>
      </div>
    </section>
  );
};

export default Resume;
