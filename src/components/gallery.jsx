import React, { useEffect, useState } from 'react';
import '../style.css';

const images = [
  { src: process.env.PUBLIC_URL + '/Album/IMG_3115.jpg', caption: 'Artistic Code Warrior' },
  { src: process.env.PUBLIC_URL + '/Album/IMG_13_1_2.jpg', caption: 'Yosemite Lake' },
  { src: process.env.PUBLIC_URL + '/Album/IMG_13_1_3.jpg', caption: 'Yosemite Lake' },
  { src: process.env.PUBLIC_URL + '/Album/IMG_13_1_1.jpg', caption: 'Serene Reflection' },
  { src: process.env.PUBLIC_URL + '/Album/Yosemite_Lake.jpg', caption: 'Still Waters' },
  { src: process.env.PUBLIC_URL + '/Album/IMG_3119-Enhanced-NR.jpg', caption: 'Bridge in Focus' },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const background = document.getElementById('background-blur');
    if (background) {
      background.style.opacity = 0;
      setTimeout(() => {
        background.style.backgroundImage = `url('${images[index].src}')`;
        background.style.opacity = 1;
        console.log('✅ Background set to', images[index].src);
      }, 300);
    }
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <div className="background-blur" id="background-blur" />

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
                className={i === index ? 'active' : 'inactive'}
                onError={() => console.error(`❌ Failed to load: ${img.src}`)}
              />
            ))}
            <div className="caption">{images[index].caption}</div>
          </div>

          <div className="nav-buttons">
            <button onClick={prevImage}>◀ Prev</button>
            <button onClick={nextImage}>Next ▶</button>
          </div>
        </div>
      </div>
    </>
  );
}
