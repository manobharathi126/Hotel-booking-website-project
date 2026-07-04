import "../styles/About.css";

const stats = [
  { num: '180', label: 'Luxury Rooms' },
  { num: '98%', label: 'Guest Satisfaction' },
  { num: '15', label: 'Awards Won' },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        <div className="about-img-wrap">
          <img
            className="about-img-main"
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&q=80"
            alt="Hotel Exterior"
          />
          <img
            className="about-img-accent"
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80"
            alt="Pool View"
          />
          <div className="about-badge">
            <div className="num">30+</div>
            <div className="lbl">Years of<br />Excellence</div>
          </div>
        </div>
        <div className="about-text">
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <div className="section-tag">Our Story</div>
            <h2 className="section-title">A Legacy of<br /><em>Timeless Hospitality</em></h2>
            <div className="section-divider" style={{ margin: '1.5rem 0' }} />
          </div>
          <p>Founded in 1993, Skypeak Resort was born from a singular vision: to create a sanctuary where discerning travelers could experience the finest in luxury, comfort, and authentic hospitality. Nestled among rolling landscapes and serene heights, our resort has stood as a beacon of elegance for over three decades.</p>
          <p>Our mission is simple — to anticipate your every desire before you even know you have it. Our vision is to remain the destination of choice for guests who seek not just a room, but a memory that endures a lifetime.</p>
          <div className="about-stats">
            {stats.map(stat => (
              <div className="stat-item" key={stat.label}>
                <div className="stat-num">{stat.num}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          <a href="#rooms" className="btn-primary">Discover Our Rooms</a>
        </div>
      </div>
    </section>
  );
}
