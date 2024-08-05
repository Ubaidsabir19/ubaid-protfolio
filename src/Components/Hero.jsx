import React from 'react';
import logo from '../logo.svg';
import '../Css-Sheets/hero.css';

function Hero() {
    return (
      <section className="hero">
        <div className="hero-content">
          <h2>Hello, i'm</h2>
          <h1>Ubaid Ur Rehman</h1>
          <p>Freelance, Fullstack Web & Mobile Developer. I create seamless web & mobile app experiences for end-users.</p>
          <button className='btn-about'>About me</button>
          <button className='btn-proj'>Projects</button>
        </div>
        <div className="hero-image">
          <img src={logo} alt="Hero" />
        </div>
      </section>
    );
  }
  
  export default Hero;