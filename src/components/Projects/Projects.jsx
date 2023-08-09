// components/Projects.jsx
import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container py-5">
        <h2 className="text-center mb-5">Projects</h2>
        <div className="row">
          <div className="col">
            <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="img/project-1.jpg" className="d-block w-100" alt="Project 1" />
                </div>
                <div className="carousel-item">
                  <img src="img/project-2.jpg" className="d-block w-100" alt="Project 2" />
                </div>
                {/* Add more carousel items for your projects */}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
