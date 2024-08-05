import React from 'react';
import '../Css-Sheets/contact.css'; 
import ContactImg from '../Assets/Images/contact.jpg';

function Contact() {
  return (
    <section className="contact">
      <div className="form-container">
        <div className="form-content">
          <h1>Contact Us</h1>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
        <div className="image-container">
          <img src={ContactImg} alt="Contact" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
