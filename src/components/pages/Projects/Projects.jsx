import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import projectsData from "./data/projects";

const Projects = () => {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowCards(true);
    }, 500); // Delay the animation start for 500ms
  }, []);
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Projects</h2>
        <div className="row text-center">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 mb-4 ${
                showCards ? "animated-card" : ""
              }`}
            >
              <div className="card shadow-sm">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top"
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <Link
                    to={project.gitHub}
                    className="btn btn-custom btn-sm mt-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
