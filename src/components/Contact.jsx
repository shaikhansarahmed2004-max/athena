import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-grid">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p className="contact-desc">Have questions or want to reach out directly? We'd love to hear from you.</p>
          
          <div className="info-item">
            <MapPin className="info-icon" />
            <div>
              <h4>Location</h4>
              <p>123 Culinary Boulevard, Food District<br/>Cityname, State 12345</p>
            </div>
          </div>
          
          <div className="info-item">
            <Phone className="info-icon" />
            <div>
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>
          
          <div className="info-item">
            <Mail className="info-icon" />
            <div>
              <h4>Email</h4>
              <p>hello@athenalounge.com</p>
            </div>
          </div>

          <div className="social-links">
            <a href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
        
        <div className="contact-card">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea rows="4" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
