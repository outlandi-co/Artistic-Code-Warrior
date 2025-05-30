import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css';

export default function Splash() {
  const navigate = useNavigate();

  // Auto-redirect after 5 seconds (optional)
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); // or "/gallery" if you prefer
    }, 5000); // 5000 ms = 5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <video
        className="splash-logo"
        autoPlay
        muted
        playsInline
        onEnded={() => navigate('/home')} // optional: redirect after video ends
      >
        <source src="/video/logo-spin.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button onClick={() => navigate('/home')} className="enter-button">
        Enter Site
      </button>
    </div>
  );
}
