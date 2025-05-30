import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-content">
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
