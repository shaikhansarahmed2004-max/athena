import React from 'react';
import './Reservations.css';

const Reservations = () => {
  return (
    <section id="reservations" className="section reservations-section">
      <div className="reservations-container">
        <h2 className="section-title">Reserve a Table</h2>
        <p className="reservations-subtitle">Experience our culinary delights in person. Book your table now.</p>
        
        <form className="reservations-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="+91 98765 43210" required />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Date</label>
              <input type="date" required />
            </div>
            <div className="form-group">
              <label>Time</label>
              <input type="time" required />
            </div>
          </div>
          
          <div className="form-group">
            <label>Number of Guests</label>
            <select defaultValue="2" required>
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5+">5+ People</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Special Requests (e.g. Birthday, Wheelchair Access)</label>
            <textarea rows="3" placeholder="Any special requests?"></textarea>
          </div>
          
          <button type="submit" className="btn submit-btn">Confirm Reservation</button>
        </form>
      </div>
    </section>
  );
};

export default Reservations;
