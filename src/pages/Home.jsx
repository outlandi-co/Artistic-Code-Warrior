import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

export default function Home() {
  return (
    <div>
      {/* Fullscreen background video */}
      <video className="video-bg" autoPlay muted loop playsInline>
        <source src="/video/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Section */}
      <div className="hero-content">
        {/* Clickable animated logo */}
        <Link to="/gallery">
          <video
            className="hero-logo"
            autoPlay
            loop
            muted
            playsInline
            width="200"
            style={{ cursor: 'pointer' }}
          >
            <source src="/video/logo-spin.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Link>

        <h1>Welcome to Artistic Code Warrior</h1>
        <p>
          Explore a blend of design, photography, and creative technology.
          Dive into the gallery or connect through the contact page.
        </p>
        <Link to="/gallery">
          <button>View Gallery</button>
        </Link>
      </div>
    </div>
  );
}
