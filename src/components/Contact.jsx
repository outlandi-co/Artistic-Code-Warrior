import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <>
      <div className="background-blur" id="background-blur"></div>

      {/* ✅ Router navigation */}
      

      <div className="gallery-wrapper" id="contact">
        <div className="slideshow-layout">
          <h1>Contact</h1>
          <p>If you have a question, project idea, or collaboration request, feel free to reach out.</p>
          <p>
            📧 <a href="mailto:adam@example.com" style={{ color: '#13a2b5' }}>
              adam@example.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
