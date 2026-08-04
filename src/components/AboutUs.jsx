import React from 'react';
import './AboutUs.css';
import aboutImg from '../assets/images/Screenshot 2026-04-07 180334.png';

const AboutUs = () => {
  return (
    <section id="about" className="section about-section">
      <div className="about-grid">
        <div className="about-text">
          <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 30px 0' }}>Our Story</h2>
          <h3 className="about-subtitle">A passion for flavor, a commitment to quality.</h3>
          <p>
            Athena Lounge & Bar was born out of a desire to create a sanctuary where culinary excellence meets unparalleled ambiance. 
            We seamlessly blend the vibrant, bold flavors of Indian street food and curries with the intricate, delicate techniques of Chinese cuisine.
          </p>
          <p>
            Our master chefs source only the freshest ingredients, crafting each dish with authenticity and a modern twist. 
            Whether you are here for a quick bite, a celebratory feast, or simply to unwind at our elegant bar, 
            Athena Lounge & Bar promises an unforgettable sensory journey.
          </p>
          
          <div className="highlights">
            <div className="highlight-item">
              <h4>Exquisite Cuisines</h4>
              <p>Indian & Chinese</p>
            </div>
            <div className="highlight-item">
              <h4>Upscale Ambiance</h4>
              <p>Cozy & Energetic</p>
            </div>
          </div>
        </div>
        <div className="about-image-wrapper">
          <img src={aboutImg} alt="Athena Lounge Interior" className="about-image" />
          <div className="image-accent"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
