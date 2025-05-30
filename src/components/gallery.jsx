import React, { useState, useEffect } from 'react';
import '../style.css';

const images = [
  { src: '/Album/Image-1.jpg', caption: 'Golden Horizon Over Tranquil Waters' },
  { src: '/Album/Image-2.jpg', caption: 'Amber Sunset Mirror' },
  { src: '/Album/Image-3.jpg', caption: 'Serene Forest Reflection' },
  { src: '/Album/Image-4.jpg', caption: 'Golden Hillside Ripples' },
  { src: '/Album/Image-5.jpg', caption: 'Historic Lift Bridge Crossing' },
  { src: '/Album/Image-6.jpg', caption: 'Sunlight Through the Canopy' },
  { src: '/Album/Image-7.jpg', caption: 'Verdant Waters with Reflection' },
  { src: '/Album/Image-8.jpg', caption: 'Winding Stream Through the Grove' },
  { src: '/Album/Image-9.jpg', caption: 'Winding Stream Through the Grove' },
  { src: '/Album/Image-10.jpg', caption: 'Winding Stream Through the Grove' },
  { src: '/Album/Image-11.jpg', caption: 'Winding Stream Through the Grove' },
  { src: '/Album/Image-12.jpg', caption: 'Winding Stream Through the Grove' },
  { src: '/Album/Image-13.jpg', caption: 'Winding Stream Through the Grove' },
  { src: '/Album/Image-14.jpg', caption: 'Winding Stream Through the Grove' },
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
        <h2 style={{ textAlign: 'center' }}>Image Slideshow</h2>

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
