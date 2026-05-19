import React from 'react';
import './ReservationModal.css';

const ReservationModal = ({ closeReservation }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    {/* BACKEND: replace console.log with API call */}
    console.log("Modal reservation submitted");
    closeReservation();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={closeReservation}>&times;</button>
        <h2 className="modal-title">Sins of God</h2>
        <p className="modal-subtitle">Reserve a Table</p>
        
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="modal-restaurant">Restaurant</label>
            <select id="modal-restaurant" required>
              <option value="sins-of-god">Sins of God - Metropolis</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="modal-name">Name</label>
            <input type="text" id="modal-name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="modal-guests">Guests</label>
            <select id="modal-guests" required>
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5+">5+ People</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="modal-time">Time</label>
            <input type="datetime-local" id="modal-time" required />
          </div>
          <button type="submit" className="btn-outline submit-btn modal-submit">Make Reservation</button>
        </form>
      </div>
    </div>
  );
};

export default ReservationModal;
