import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    {/* BACKEND: replace console.log with API call */}
    console.log("Inline reservation submitted");
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title reveal-on-scroll">Find Us</h2>
      
      <div className="contact-container">
        <div className="contact-info reveal-on-scroll reveal-delay-1">
          <h3>Location</h3>
          <p>123 Divine Avenue<br />Metropolis, NY 10001</p>
          
          <h3 className="mt-2">Contact</h3>
          <p>+1 (555) 019-8372<br />reservations@sinsofgod.com</p>
          
          <h3 className="mt-2">Hours</h3>
          <p>Mon - Thu: 11am - 10pm<br />Fri - Sun: 10am - 11pm</p>
        </div>

        <div className="contact-form-wrapper reveal-on-scroll reveal-delay-2">
          <form className="reservation-form" onSubmit={handleSubmit}>
            <h3>Book a Table</h3>
            <div className="form-group">
              <label htmlFor="inline-restaurant">Restaurant</label>
              <select id="inline-restaurant" required>
                <option value="sins-of-god">Sins of God - Metropolis</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="inline-name">Name</label>
              <input type="text" id="inline-name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="inline-guests">Guests</label>
              <select id="inline-guests" required>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5+">5+ People</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="inline-time">Time</label>
              <input type="datetime-local" id="inline-time" required />
            </div>
            <button type="submit" className="btn-outline submit-btn">Make Reservation</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
