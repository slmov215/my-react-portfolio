import React from 'react';
import projectsData from '../data/projects';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projectsData.map((project, index) => (
          <li key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
