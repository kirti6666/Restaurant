import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container reveal-on-scroll">
        <div className="footer-brand">
          <h2>Sins of God</h2>
          <p>A Taste of Divine Indulgence.</p>
        </div>
        
        <nav className="footer-nav">
          <a href="#">Home</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      
      <div className="footer-bottom reveal-on-scroll reveal-delay-1">
        <p>&copy; {new Date().getFullYear()} Sins of God. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
