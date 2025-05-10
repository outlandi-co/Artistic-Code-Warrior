import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './pages/Home';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

export default function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Only one instance here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Router>
  );
}
