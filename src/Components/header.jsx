import React from 'react';
import logo from '../logo.svg'; 
import '../Css-Sheets/header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="Logo" />
        <div className="drawer-toggle" id="drawerToggle">
          ☰
        </div>
      </div>
      <nav id="drawer" className="drawer">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
      <nav className="desktop-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
      <a 
        className="btn" 
        href="https://www.linkedin.com/in/ubaid-ur-rehman-8607aa201" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </header>
  );
}

export default Header;
