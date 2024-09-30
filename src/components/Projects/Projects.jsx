import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { projects } from '../../data/info.js';
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { HiLink } from "react-icons/hi";
import './Projects.css';

const paragraphStyles = {
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box'
};

function Projects() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="Projects">

    <div className="projects-section">
      <div className="projects-header">
        <Card>
          <Card.Body>
            <Card.Title className="projects-card-title">Projects</Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div className="projects-container">
        {projects.map((project, idx) => (
          <Card className="projects-card" key={idx}>
            <Card.Body className="projects-card-body">
              <div className="projects-card-header">
                <Card.Title className="projects-card-title">{project.title}</Card.Title>
              </div>
              <div className="projects-card-content">
                <img src={project.image} alt={project.title} />
                <div className="links-container">
                  <Link className="github" to={project.github} target="_blank">
                    <FaGithub /> Github
                  </Link>
                  {project.webapp && (
                    <Link className="webapp" to={project.webapp} target="_blank">
                      <HiLink /> Webapp
                    </Link>
                  )}
                </div>

                <div className="tags-container">
                  {project.tags.map((item, index) => (
                    <div key={index} className="projects-tags">
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p style={isOpen ? null : paragraphStyles}>{project.description}</p>
                <button className="read-more-btn" onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? 'Read less...' : 'Read more...'}
                </button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
    </section>
  );
}

export default Projects;
