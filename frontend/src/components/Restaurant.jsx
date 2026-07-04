import "../styles/Restaurant.css";

const menuItems = [
  { tag: 'Starter', name: 'Garlic Bread', desc: 'Warm, toasted bread with fresh garlic, butter, and parsley.' },
  { tag: 'Main Course', name: 'Grilled Chicken with Rice', desc: 'Perfectly grilled chicken served with fragrant jasmine rice and seasonal vegetables.' },
  { tag: 'Seafood', name: 'Grilled Fish Fillet', desc: 'Fresh fish fillet grilled to perfection with lemon butter sauce and garden vegetables.' },
  { tag: 'Dessert', name: 'Chocolate Cake', desc: 'Rich, moist chocolate cake served with vanilla ice cream.' },
];

const cuisines = ['Continental', 'Indian', 'Japanese', 'Mediterranean', 'Vegan Options', 'Private Dining'];

export default function Restaurant() {
  return (
    <section id="restaurant" className="restaurant-section">
      <div className="restaurant-wrap">
        <div className="restaurant-img-stack">
          <img className="rest-img-1"
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80"
            alt="Restaurant Interior" />
          <img className="rest-img-2"
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"
            alt="Chef's Special" />
        </div>
        <div className="restaurant-info">
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            <div className="section-tag">Culinary Excellence</div>
            <h2 className="section-title">Skypeak <em>Kitchen</em></h2>
            <div className="section-divider" style={{ margin: '1.2rem 0' }} />
          </div>
          <p>Under the direction of our Michelin-trained Executive Chef Sofia Marchetti, Skypeak Kitchen is a celebration of global flavours rooted in local ingredients. From intimate tasting menus to lavish Sunday brunches, every meal is a story told on a plate.</p>
          <p>Our dining philosophy is simple: exceptional produce, honest technique, and the warmth of genuine hospitality.</p>
          <div className="menu-tags">
            {cuisines.map(c => <span className="menu-tag" key={c}>{c}</span>)}
          </div>
        </div>
      </div>

      <div className="section-header" style={{ marginTop: '1rem' }}>
        <div className="section-tag">Chef's Favourites</div>
        <h3 className="section-title">Signature <em>Dishes</em></h3>
        <div className="section-divider" />
      </div>
      <div className="menu-grid">
        {menuItems.map(item => (
          <div className="menu-card" key={item.name}>
            <div className="menu-card-tag">{item.tag}</div>
            <h4 className="menu-card-name">{item.name}</h4>
            <p className="menu-card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
