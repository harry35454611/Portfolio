import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <h2 className="font-secondary text-primary">Sai Seshu</h2>
          </div>
          
          {/* Desktop Navigation */}
          <div className="nav-links desktop-up">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="nav-actions desktop-up">
            <Button variant="outline" size="sm">
              Download CV
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn mobile-only"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav mobile-only">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mobile-nav-actions">
              <Button variant="outline" size="sm">
                Download CV
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;