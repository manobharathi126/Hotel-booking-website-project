import "../styles/Facilities.css";

import infinityPoolImg from "../assets/facilities/infinity_pool.png";
import fitnessCentreImg from "../assets/facilities/fitness_centre.png";
import conferenceHallImg from "../assets/facilities/conference_hall.png";
import luxurySpaImg from "../assets/facilities/luxury_spa.png";
import valetParkingImg from "../assets/facilities/valet_parking.png";
import conciergeImg from "../assets/facilities/concierge_desk.png";

const facilities = [
  {
    img: infinityPoolImg,
    name: 'Infinity Pool',
    desc: 'A stunning 50-metre infinity pool overlooking panoramic vistas, open sunrise to sunset.',
  },
  {
    img: fitnessCentreImg,
    name: 'Fitness Centre',
    desc: 'State-of-the-art gym with Technogym equipment, personal trainers, and daily yoga classes.',
  },
  {
    img: conferenceHallImg,
    name: 'Conference Hall',
    desc: 'Modern conference and banquet facilities for up to 500 guests with A/V support.',
  },
  {
    img: luxurySpaImg,
    name: 'Luxury Spa',
    desc: 'Indulge in world-class treatments, steam rooms, and holistic wellness therapies.',
  },
  {
    img: valetParkingImg,
    name: 'Valet Parking',
    desc: 'Secure underground parking with complimentary valet service for all hotel guests.',
  },
  {
    img: conciergeImg,
    name: '24/7 Concierge',
    desc: 'Our dedicated concierge team is at your service round the clock for any request.',
  },
  {
    img: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&q=80&auto=format&fit=crop',
    name: "Kids' Club",
    desc: "A supervised children's activity zone with games, crafts, and entertainment.",
  },
  {
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80&auto=format&fit=crop',
    name: 'High-Speed Wi-Fi',
    desc: 'Complimentary ultra-fast fibre Wi-Fi throughout all rooms and public spaces.',
  },
];

const offers = [
  {
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&q=80',
    discount: '20% OFF',
    name: 'New Year Celebration',
    desc: 'Live music, dazzling fireworks and a midnight countdown to welcome the New Year in style.',
  },
  {
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&q=80',
    discount: '15% OFF',
    name: 'Weekend Escape',
    desc: 'Check-in Friday, check-out Sunday — includes breakfast, spa access, and late checkout.',
  },
  {
    img: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=700&q=80',
    discount: 'Kids Free',
    name: 'Family Adventure',
    desc: "Kids stay free, free Kids' Club access, family-friendly dining, and pool fun all day.",
  },
  {
    img: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=700&q=80',
    discount: '30% OFF',
    name: 'Seasonal Special',
    desc: "Our best seasonal rate — limited rooms at a dramatic discount. Book before they're gone.",
  },
];

export default function Facilities() {
  return (
    <>
      <section id="facilities" className="facilities-section">
        <div className="section-header">
          <div className="section-tag">World-Class Amenities</div>
          <h2 className="section-title">Facilities &amp; <em>Experiences</em></h2>
          <div className="section-divider" />
          <p className="section-desc">Every amenity is crafted to ensure your stay is not just comfortable, but genuinely unforgettable.</p>
        </div>
        <div className="facilities-grid">
          {facilities.map(f => (
            <div className="facility-card with-image" key={f.name}>
              <img className="facility-image" src={f.img} alt={f.name} loading="lazy" />
              <div className="facility-content">
                <h3 className="facility-name">{f.name}</h3>
                <p className="facility-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="offers" className="offers-section">
        <div className="section-header">
          <div className="section-tag">Exclusive Deals</div>
          <h2 className="section-title">Special <em>Packages</em></h2>
          <div className="section-divider" />
          <p className="section-desc">Curated experiences designed to make every occasion extraordinary.</p>
        </div>
        <div className="offers-grid">
          {offers.map(o => (
            <div className="offer-card" key={o.name}>
              <img src={o.img} alt={o.name} />
              <div className="offer-overlay">
                <span className="offer-discount">{o.discount}</span>
                <div className="offer-name">{o.name}</div>
                <div className="offer-desc">{o.desc}</div>
                <div className="offer-link">→ Explore Package</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
