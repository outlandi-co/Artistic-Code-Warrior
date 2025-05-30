import React, { useRef } from 'react';
import './Splash.css'; // Optional for styling

export default function Splash() {
  const videoRef = useRef(null);

  const handleEnableAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  };

  return (
    <div className="splash-container">
      <video
        ref={videoRef}
        src="/videos/intro.mp4"
        autoPlay
        muted
        playsInline
        className="intro-video"
      />
      <button className="sound-button" onClick={handleEnableAudio}>
        🔊 Enable Sound
      </button>
    </div>
  );
}
