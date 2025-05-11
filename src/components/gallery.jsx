import React, { useEffect, useState } from 'react';
import '../style.css';
import Navbar from './Navbar.jsx';

const images = [
  {
    src: '/Album/IMG_3115.jpg',
    caption: 'Artistic Code Warrior',
  },
  {
    src: '/Album/IMG_13_1_1.jpg',
    caption: 'Yosemite Lake',
  },
  {
    src: '/Album/IMG_13_1_3.jpg',
    caption: 'Yosemite Lake',
  },
  {
    src: '/Album/IMG_13_1_1.jpg',
    caption: 'Serene Reflection',
  },
  {
    src: '/Album/Yosemite_Lake.jpg',
    caption: 'Still Waters',
  },
  {
    src: '/Album/IMG_3119-Enhanced-NR.jpg',
    caption: 'Bridge in Focus',
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const background = document.getElementById('background-blur');
    if (background) {
      background.style.opacity = 0;
      setTimeout(() => {
        background.style.backgroundImage = `url('${images[index].src}')`; // ✅ fixed backticks
        background.style.opacity = 1;
      }, 300);
    }

    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFadeIn(true);
      }, 200);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  const nextImage = () => {
    setFadeIn(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setFadeIn(true);
    }, 200);
  };

  const prevImage = () => {
    setFadeIn(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
      setFadeIn(true);
    }, 200);
  };

  return (
    <>
      <Navbar />
      <div className="background-blur" id="background-blur"></div>
      <div className="gallery-wrapper">
        <div className="sidebar">
          <h3>Categories</h3>
          <ul className="category-list">
            <li>📷 Nature</li>
            <li>🏙️ Urban</li>
            <li>🛶 Lakes</li>
            <li>🧭 Adventure</li>
            <li>🖼️ Artistic</li>
          </ul>
        </div>
        <div className="slideshow-layout">
          <div className="image-window">
            {images.map((img, i) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.caption}
                className={i === index && fadeIn ? 'active' : ''}
                onError={() => console.error(`❌ Failed to load: ${img.src}`)}
              />
            ))}
          </div>
          <div className="caption">{images[index].caption}</div>
          <div className="nav-buttons">
            <button onClick={prevImage}>◀ Prev</button>
            <button onClick={nextImage}>Next ▶</button>
          </div>
        </div>
      </div>
    </>
  );
}
