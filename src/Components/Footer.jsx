import React from 'react';
import '../Css-Sheets/footer.css'; 
import UbaidImg from '../Assets/Images/ubaid.png'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={UbaidImg} alt='Company Logo'/>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-links">
          <h2>Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
       

        <div className="footer-info">
          <h2>My Info</h2>
          <p>Johar Town, Phase 2 Lahore, Pakistan</p>
          <p>Github: https://github.com/Ubaidsabir19</p>
          <p>Email: ubaidsabir19@gmail.com</p>
          <p>Phone: +92 304 0460318</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MyCompany. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
