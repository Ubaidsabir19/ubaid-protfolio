import React, { useState } from 'react';
import logo from '../logo.svg';
import '../Css-Sheets/header.css';
import { Link } from 'react-scroll';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <h2 className='Header-text'>Ubaid.</h2>
        <div className="drawer-toggle" id="drawerToggle" onClick={toggleDrawer}>
          ☰
        </div>
      </div>
      <nav id="drawer" className={`drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={toggleDrawer}>✖</div>
        <ul>
          <li><Link to="services" smooth={true} duration={500} onClick={toggleDrawer}>Services</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={toggleDrawer}>Contact Us</Link></li>
          <li><Link to="companies" smooth={true} duration={500} onClick={toggleDrawer}>Experience</Link></li>
        </ul>
      </nav>
      <nav className="desktop-nav">
        <ul>
          <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact Us</Link></li>
          <li><Link to="companies" smooth={true} duration={500}>Experience</Link></li>
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
