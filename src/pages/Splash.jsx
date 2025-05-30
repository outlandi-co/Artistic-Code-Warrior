import React, { useRef } from 'react';

export default function Splash() {
  const videoRef = useRef(null);

  const enableAudio = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.volume = 1.0;
      video.currentTime = 0; // Optional: restart video with sound
      video.play();
    }
  };

  return (
    <div className="splash-container">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button
        onClick={enableAudio}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#13a2b5',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '6px',
        }}
      >
        🔊 Enable Sound
      </button>
    </div>
  );
}
