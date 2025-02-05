import React from "react";
import { Link } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Resume.css"; 
import StephenResume from "../../../assets/stephen-resume.pdf";

const Resume = () => {
  return (
    <section id="resume" className="py-5 text-center">
      <div className="container">
        <Slide bottom>
          <h2 className="mb-4">Resume</h2>
        </Slide>

        <Slide bottom>
          <a
            href={StephenResume}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            <FaFilePdf className="resume-icon" />
            Download Resume
          </a>
        </Slide>

        <div className="proficiencies-container">
          {/* Front-End Proficiencies */}
          <Slide bottom>
            <div className="proficiency-section">
              <h4>Front-End Proficiencies</h4>
              <ul>
                <li>React, Redux</li>
                <li>HTML, CSS, JavaScript</li>
                <li>Responsive & Accessible Design</li>
                <li>RESTful APIs & GraphQL</li>
                <li>UI/UX Best Practices</li>
              </ul>
            </div>
          </Slide>

          {/* Back-End Proficiencies */}
          <Slide bottom>
            <div className="proficiency-section">
              <h4>Back-End Proficiencies</h4>
              <ul>
                <li>Node.js, Express.js</li>
                <li>Database Management (MongoDB, MySQL)</li>
                <li>API Development & Integration</li>
                <li>Authentication & Authorization</li>
                <li>Cloud & Server Deployment</li>
              </ul>
            </div>
          </Slide>

          {/* Data Analysis Proficiencies */}
          <Slide bottom>
            <div className="proficiency-section">
              <h4>Data Analysis & Visualization</h4>
              <ul>
                <li>Python, R, SQL</li>
                <li>Data Cleaning & Processing</li>
                <li>Data Visualization (Tableau, Matplotlib, Seaborn)</li>
                <li>Statistical Analysis & A/B Testing</li>
                <li>ETL Pipelines & Data Storytelling</li>
              </ul>
            </div>
          </Slide>

          {/* Other Proficiencies */}
          <Slide bottom>
            <div className="proficiency-section">
              <h4>Other Technical Skills</h4>
              <ul>
                <li>Version Control (Git, GitHub)</li>
                <li>Command Line & Shell Scripting</li>
                <li>Agile Development & Scrum</li>
                <li>Problem Solving & Debugging</li>
                <li>Remote Team Collaboration</li>
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
