import React from 'react';
import '../Css-Sheets/about.css';
import logo from '../logo.svg';
import codingImg from '../Assets/Images/coding.jpg'

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-left">
          <h1 className='about-heading'>About Me</h1>
          <p className='about-desc'>I am a Full Stack Mobile Application Developer with over 1 year of experience in Mobile Application Development. I also have strong experience in Flutter, React, Node.js, and Ruby on Rails.</p>
          <div className="cards">
            <div className="card">
              <h2>Client Satisfaction</h2>
              <p>1000%</p>
            </div>
            <div className="card">
              <h2>Clients</h2>
              <p>Almost 100</p>
            </div>
            <div className="card">
              <h2>Experience</h2>
              <p>10+ years in the industry</p>
            </div>
            <div className="card">
              <h2>Projects</h2>
              <p>500+ completed projects</p>
            </div>
          </div>
        </div>
        <div className="about-right">
          <img src={codingImg} alt="About Me" className="about-image" />
        </div>
      </div>
    </section>
  );
}

export default About;
