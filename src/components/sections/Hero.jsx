import React from 'react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hello, I'm <span className="text-secondary">Sai Seshu</span>
            </h1>
            <p className="hero-subtitle text-muted">
              AI & ML Developer passionate about creating innovative solutions through 
              artificial intelligence, machine learning, and mobile development.
            </p>
            <div className="hero-actions">
              <Button variant="primary" size="lg">
                Get In Touch
              </Button>
              <Button variant="outline" size="lg">
                View Projects
              </Button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image-container">
              <img 
                src="/images/profile.jpg" 
                alt="Sai Seshu Adimulam" 
                className="profile-image"
              />
              <div className="profile-badge">
                <span>AI/ML</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;