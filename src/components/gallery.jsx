import React, { useState, useEffect } from 'react';
import '../style.css';

const images = [
  { src: '/Album/IMG_3115.jpg', caption: 'Artistic Code Warrior' },
  { src: '/Album/IMG_13_1_1.jpg', caption: 'Yosemite Lake' },
  { src: '/Album/IMG_13_1_3.jpg', caption: 'Yosemite Lake' },
  { src: '/Album/Yosemite_Lake.jpg', caption: 'Still Waters' },
  { src: '/Album/IMG_3119-Enhanced-NR.jpg', caption: 'Bridge in Focus' },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
     

      <div className="gallery-wrapper">
        <h2 style={{ textAlign: 'center' }}>Mobile Image Slideshow</h2>

        <div className="slideshow-layout">
          <div className="image-window">
            {images.map((img, i) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.caption}
                className={i === index ? 'active' : 'inactive'}
                onError={() => console.error(`❌ Failed to load: ${img.src}`)}
              />
            ))}
            <div className="caption">{images[index].caption}</div>
          </div>

          <div className="controls">
            <div className="nav-buttons">
              <button onClick={prevImage}>◀ Prev</button>
              <button onClick={nextImage}>Next ▶</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
