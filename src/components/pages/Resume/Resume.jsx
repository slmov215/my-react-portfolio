import React from "react";
import { Link } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Resume.css"; 

const Resume = () => {
  return (
    <section id="resume" className="py-5 text-center">
      <div className="container">
        <Slide bottom>
          <h2 className="mb-4">Resume</h2>
        </Slide>
        <Slide bottom>
          <a
            href="/path-to-your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            <FaFilePdf className="resume-icon" />
            Download Resume
          </a>
        </Slide>
        <div className="proficiencies-container">
          <Slide bottom>
            <div className="proficiency-section">
              <h4>Front-End Proficiencies</h4>
              <ul>
                <li>React and Redux</li>
                <li>HTML, CSS, JavaScript</li>
                <li>Responsive Design</li>
                <li>RESTful APIs</li>
                <li>UI/UX Design Principles</li>
              </ul>
            </div>
          </Slide>
          <Slide bottom>
            <div className="proficiency-section">
              <h4>Back-End Proficiencies</h4>
              <ul>
                <li>Node.js and Express.js</li>
                <li>Database Management</li>
                <li>API Development</li>
                <li>Authentication and Authorization</li>
                <li>Server Deployment</li>
              </ul>
            </div>
          </Slide>
          <Slide bottom>
            <div className="proficiency-section">
              <h4>Other Proficiencies</h4>
              <ul>
                <li>Version Control (Git)</li>
                <li>Command Line and Terminal</li>
                <li>Agile Development</li>
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
              </ul>
            </div>
          </Slide>
        </div>
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
