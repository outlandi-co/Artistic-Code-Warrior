import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css';

export default function Splash() {
  const navigate = useNavigate();

  // Optional: Auto-redirect after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      {/* Splash Video (Logo Animation) */}
      <video
        className="splash-logo"
        autoPlay
        muted
        playsInline
      >
        <source src="/video/intro_.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Manual Entry Button */}
      <button onClick={() => navigate('/home')} className="enter-button">
        Enter Site
      </button>
    </div>
  );
}
