import { useState } from 'react';
import "../styles/Gallery.css";

const images = [
  { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80', alt: 'Hotel' },
  { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80', alt: 'Room' },
  { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80', alt: 'Pool' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', alt: 'Dining' },
  { src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&q=80', alt: 'Exterior' },
  { src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80', alt: 'Spa' },
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80', alt: 'Events' },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80', alt: 'Restaurant' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="gallery-section">
      <div className="section-header">
        <div className="section-tag">Visual Stories</div>
        <h2 className="section-title">Hotel <em>Gallery</em></h2>
        <div className="section-divider" />
      </div>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <div className={`gallery-item gallery-item-${i + 1}`} key={img.alt} onClick={() => setLightbox(img)}>
            <img src={img.src} alt={img.alt} />
            <div className="gallery-overlay"><span>⊕</span></div>
          </div>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <span className="lightbox-close">✕</span>
          <img src={lightbox.src} alt={lightbox.alt} />
        </div>
      )}
    </section>
  );
}
