import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Athena <span>Lounge & Bar</span></h2>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#reservations">Reservations</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} Athena Lounge & Bar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
