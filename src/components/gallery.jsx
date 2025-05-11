import React, { useEffect, useState } from 'react';

const images = [
  { src: '/Album/IMG_3115.jpg', caption: 'Artistic Code Warrior' },
  { src: '/Album/IMG_13_1_1.jpg', caption: 'Yosemite Lake' },
  { src: '/Album/IMG_13_1_3.jpg', caption: 'Yosemite Lake' },
  { src: '/Album/Yosemite_Lake.jpg', caption: 'Still Waters' },
  { src: '/Album/IMG_3119-Enhanced-NR.jpg', caption: 'Bridge in Focus' },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div style={{ padding: 20, background: 'black', color: 'white', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center' }}>Mobile Image Slideshow</h2>

      <div style={{ textAlign: 'center', marginBottom: 10 }}>
        <img
          src={images[index].src}
          alt={images[index].caption}
          style={{
            width: '100%',
            maxWidth: 500,
            borderRadius: 12,
            border: '2px solid white',
            display: 'block',
            margin: '0 auto',
          }}
          onError={() => console.error(`❌ Failed to load: ${images[index].src}`)}
        />
        <div
          style={{
            background: 'rgba(0,0,0,0.6)',
            padding: '8px 12px',
            borderRadius: '0 0 12px 12px',
            marginTop: -4,
            fontStyle: 'italic',
          }}
        >
          {images[index].caption}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
        <button
          onClick={prevImage}
          style={{
            padding: '10px 20px',
            backgroundColor: '#00cdd3',
            color: 'black',
            border: 'none',
            borderRadius: 6,
            fontWeight: 'bold',
          }}
        >
          ◀ Prev
        </button>
        <button
          onClick={nextImage}
          style={{
            padding: '10px 20px',
            backgroundColor: '#00cdd3',
            color: 'black',
            border: 'none',
            borderRadius: 6,
            fontWeight: 'bold',
          }}
        >
          Next ▶
        </button>
      </div>
    </div>
  );
}
