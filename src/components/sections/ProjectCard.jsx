import React from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const ProjectCard = ({ project }) => {
  return (
    <Card className="project-card">
      <Card.Header>
        <div className="project-image">
          <img src={project.image} alt={project.title} />
          <div className="project-overlay">
            <Badge variant={project.status === 'completed' ? 'secondary' : 'accent'}>
              {project.status}
            </Badge>
          </div>
        </div>
      </Card.Header>
      
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Subtitle>{project.category}</Card.Subtitle>
        <p className="project-description text-muted">
          {project.description}
        </p>
        
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="project-tag">
              {tag}
            </Badge>
          ))}
        </div>
      </Card.Body>
      
      <Card.Footer>
        <div className="project-actions">
          <Button variant="primary" size="sm">
            View Project
          </Button>
          <Button variant="ghost" size="sm">
            GitHub
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;