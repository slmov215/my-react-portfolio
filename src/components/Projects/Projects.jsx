// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <a href="https://example.com/project1" target="_blank" rel="noopener noreferrer">Project 1</a>
          <p>Description of project 1</p>
        </li>
        <li>
          <a href="https://example.com/project2" target="_blank" rel="noopener noreferrer">Project 2</a>
          <p>Description of project 2</p>
        </li>
        {/* Add more projects */}
      </ul>
    </section>
  );
};

export default Projects;
