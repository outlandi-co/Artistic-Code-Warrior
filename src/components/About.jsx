import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom'; // use Link for routing

export default function About() {
  return (
    <>
      <div className="background-blur" id="background-blur"></div>

      {/* ✅ Router-friendly Navigation */}
      <nav>
        <Link to="/about">About</Link> |{' '}
        <Link to="/gallery">Gallery</Link> |{' '}
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="gallery-wrapper" id="about">
        <div className="slideshow-layout">
          <h1>About Me</h1>
          <p>
            I’m a Creative Technologist and the mind behind <strong>Artistic Code Warrior</strong>. My passion lies in blending photography, design, videography, and immersive technology to craft compelling stories and functional experiences.
          </p>
          <p>
            With a background in coding, 3D modeling, motion graphics, and UX/UI design, my goal is to merge artistry with innovation—whether through web development, interactive visuals, or product design.
          </p>
          <p>
            From the military to multimedia, this platform reflects my creative journey and offers a space for unique digital collaboration.
          </p>
        </div>
      </div>
    </>
  );
}
