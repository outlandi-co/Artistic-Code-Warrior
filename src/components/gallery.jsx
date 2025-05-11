export default function Gallery() {
  return (
    <div style={{ padding: 20, background: 'black', color: 'white' }}>
      <h2>Mobile Image Test</h2>
      <img
        src="/Album/IMG_3115.jpg"
        alt="Test"
        style={{ width: '100%', maxWidth: 400, border: '2px solid white' }}
        onError={() => console.error('❌ Image failed to load')}
      />
    </div>
  );
}
