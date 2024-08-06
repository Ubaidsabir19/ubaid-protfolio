import React from 'react';
import ubaidImg from '../Assets/Images/ubaid.png';
import { Link } from 'react-scroll';
import '../Css-Sheets/hero.css';


function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Hello, I'm</h2>
        <h1>Ubaid Ur Rehman</h1>
        <p>Freelance, Fullstack Web & Mobile Developer. I create seamless web & mobile app experiences for end-users.</p>
        <Link to="about" smooth={true} duration={300} className="btn-about">About me</Link>
        <Link to="projects" smooth={true} duration={300} className="btn-proj">Projects</Link>
      </div>
      <div className="hero-image">
        <img src={ubaidImg} alt="Hero" />
      </div>
    </section>
  );
}

export default Hero;
