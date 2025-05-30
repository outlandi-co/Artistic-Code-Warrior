import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Component imports
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/gallery';

// Page imports
import Home from './pages/Home';
import Splash from './pages/Splash'; // <- add this

// Inner App content wrapper to control Navbar visibility
function AppContent() {
  const location = useLocation();

  // Only show Navbar on non-splash pages
  const showNavbar = location.pathname !== '/';

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
