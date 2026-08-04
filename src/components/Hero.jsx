import React from 'react';
import './Hero.css';
// We use one of the provided images
import heroBg from '../assets/images/Screenshot 2026-04-07 180315.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url("${heroBg}")` }}></div>
      <div className="hero-overlay"></div>
      <div className="hero-content animate-fade-in">
        <h1>Experience Culinary Excellence</h1>
        <p>Where tradition meets modern gastronomy. Discover our unique blend of exquisite Indian and Chinese cuisines in an upscale, inviting atmosphere.</p>
        <div className="hero-buttons">
          <a href="#menu" className="btn">View Menu</a>
          <a href="#reservations" className="btn btn-outline hero-secondary-btn">Make a Reservation</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
