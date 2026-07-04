import { useEffect, useRef, useState } from 'react';
import "../styles/Rooms.css";

const rooms = [
  {
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1000&q=80',
    tag: 'Standard',
    name: 'Classic Standard Room',
    shortDesc: 'A serene retreat featuring premium bedding, garden views, and modern amenities.',
    desc: 'Our Classic Standard Room offers a harmonious blend of comfort and utility. Designed with a warm color palette and sophisticated layout, it provides a quiet sanctuary with views of our beautifully manicured gardens. Complete with state-of-the-art climate control, a luxurious bathroom, and plush bedding, it ensures a deeply restoring stay for solo travelers or couples.',
    features: ['🛏 King Bed', '📶 Free Wi-Fi', '❄️ AC', '🛁 Rain Shower'],
    amenities: ['24/7 Room Service', 'In-room Safety Box', 'Smart Flat Screen TV', 'Espresso Coffee Machine', 'Premium Toiletries', 'Hairdryer & Bathrobes'],
    price: '₹4,500',
    capacity: 'Max: 2 Adults + 1 Child',
  },
  {
    img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1000&q=80',
    tag: 'Deluxe',
    name: 'Deluxe Ocean View',
    shortDesc: 'Indulge in sweeping ocean panoramas, a private balcony, and a hand-curated minibar.',
    desc: 'Elevate your stay in our Deluxe Ocean View room, where large glass doors open onto a private balcony with panoramic ocean vistas. The interior boasts mid-century modern design elements, custom-crafted wood furniture, a luxury marble bathroom with a deep soaking tub, and a curated minibar filled with local gourmet treats and premium beverages.',
    features: ['🛏 King Bed', '🌊 Ocean View', '🛁 Jacuzzi', '🍾 Minibar'],
    amenities: ['Private Balcony', 'Fully-stocked Minibar', 'Soaking Jacuzzi Tub', 'Bose Bluetooth Speaker', 'High-Speed Wi-Fi', 'Luxury Linens & Pillow Menu'],
    price: '₹8,200',
    capacity: 'Max: 2 Adults + 1 Child',
  },
  {
    img: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=1000&q=80',
    tag: 'Family Suite',
    name: 'Grand Family Suite',
    shortDesc: 'Two interconnected rooms designed for families with a private plunge pool.',
    desc: 'The Grand Family Suite is the perfect choice for families seeking both togetherness and privacy. Featuring two spacious, interconnected bedrooms, a modern living room, and direct access to a private outdoor deck with a plunge pool. The children’s room is equipped with custom bunk beds and a gaming console to keep the little ones entertained.',
    features: ['🛏 2 Bedrooms', '🏊 Plunge Pool', '👨‍👩‍👧 Family-Friendly', '🎮 Kids Room'],
    amenities: ['Private Plunge Pool', 'Interconnected Bedrooms', 'Kids Gaming Console', 'Separate Living Area', 'Microwave & Dining Table', 'Complimentary Kids Snacks'],
    price: '₹14,000',
    capacity: 'Max: 4 Adults + 2 Children',
  },
  {
    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1000&q=80',
    tag: 'Presidential',
    name: 'Presidential Suite',
    shortDesc: 'A full-floor sanctuary with a private terrace, butler service, and panoramic views.',
    desc: 'Experience the height of opulence in our magnificent Presidential Suite. Occupying an entire upper floor, this sanctuary offers 360-degree views of the coastline and city. It features an expansive master bedroom with a king-size canopy bed, a private executive study, a grand piano in the formal living room, a dining hall for 8 guests, a private swimming pool, and dedicated 24-hour butler service.',
    features: ['🛏 Master Bedroom', '🌅 Panoramic View', '🛁 Private Pool', '🎹 Grand Piano'],
    amenities: ['24-Hour Dedicated Butler', 'Private Heated Swimming Pool', 'Grand Piano & Entertainment Room', 'Private Kitchen & Dining Room', 'Steam Room & Sauna', 'VIP Airport Transfers'],
    price: '₹45,000',
    capacity: 'Max: 4 Adults + 2 Children',
  },
];

export default function Rooms() {
  const cardRefs = useRef([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    cardRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedRoom(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Disable body scroll when modal is active
  useEffect(() => {
    if (selectedRoom) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedRoom]);

  return (
    <section id="rooms" className="rooms-section">
      <div className="section-header">
        <div className="section-tag">Accommodations</div>
        <h2 className="section-title">Our Rooms &amp; <em>Suites</em></h2>
        <div className="section-divider" />
        <p className="section-desc">Each space is a masterclass in refined living — thoughtfully designed to envelop you in warmth, elegance, and uncompromising comfort.</p>
      </div>
      <div className="rooms-grid">
        {rooms.map((room, i) => (
          <div
            className="room-card"
            key={room.name}
            ref={el => (cardRefs.current[i] = el)}
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
            onClick={() => setSelectedRoom(room)}
          >
            <div className="room-card-img">
              <img src={room.img} alt={room.name} />
              <div className="room-tag">{room.tag}</div>
            </div>
            <div className="room-card-body">
              <h3 className="room-name">{room.name}</h3>
              <p className="room-desc">{room.shortDesc}</p>
              <div className="room-card-btn-wrap">
                <button className="room-view-details-btn">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedRoom && (
        <div className="room-modal-overlay active" onClick={() => setSelectedRoom(null)}>
          <div className="room-modal-container" onClick={e => e.stopPropagation()}>
            <button className="room-modal-close" onClick={() => setSelectedRoom(null)}>×</button>
            <div className="room-modal-content">
              <div className="room-modal-img-wrap">
                <img src={selectedRoom.img} alt={selectedRoom.name} />
              </div>
              <div className="room-modal-info">
                <div>
                  <div className="room-modal-tag">{selectedRoom.tag}</div>
                  <h3 className="room-modal-name">{selectedRoom.name}</h3>
                  <p className="room-modal-desc">{selectedRoom.desc}</p>
                  
                  <div className="room-modal-section-title">Features</div>
                  <div className="room-modal-features">
                    {selectedRoom.features.map(f => (
                      <span className="room-modal-feature" key={f}>{f}</span>
                    ))}
                  </div>
                  
                  <div className="room-modal-section-title">All Amenities</div>
                  <div className="room-modal-amenities-list">
                    {selectedRoom.amenities.map(a => (
                      <div className="room-modal-amenity" key={a}>{a}</div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="room-modal-meta">
                    <div className="room-meta-item">
                      <span className="room-meta-label">Capacity</span>
                      <span className="room-meta-val">{selectedRoom.capacity}</span>
                    </div>
                    <div className="room-meta-item">
                      <span className="room-meta-label">Price Per Night</span>
                      <span className="room-meta-val price">
                        {selectedRoom.price} 
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '0.3rem' }}>/ night</span>
                      </span>
                    </div>
                  </div>
                  <a
                    href="#booking"
                    className="room-modal-book-btn"
                    onClick={() => setSelectedRoom(null)}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
