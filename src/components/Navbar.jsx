// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/gallery">Gallery</Link> |{" "}
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
