import React from 'react';
import Card from 'react-bootstrap/Card';
import { skills } from '../../data/info'; // Assuming you have a file with skills data
import './Skills.css'; // Ensure the correct CSS file is imported

function Skills() {
  return (
    <div className="skills-section">
      <div className="tech-background"></div> {/* Animated background */}
      <div className="skills-header">
        <Card>
          <Card.Body>
            <Card.Title className="card-title">Skills</Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div className="skills-container">
        {skills.map((skill, idx) => (
          <Card className="card" key={idx}>
            <Card.Body>
              <Card.Title className="card-title">{skill.title}</Card.Title>
              <Card.Text>
                {skill.skills.map((item, index) => (
                  <div key={index} className="skill-item">
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                  </div>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Skills;
