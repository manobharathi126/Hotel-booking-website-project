import "../styles/Events.css";

const events = [
  {
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&q=80',
    categoryImg: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=80&q=80',
    name: 'Wedding Ceremonies',
    desc: 'A fairy-tale setting for your most cherished day. Our grand ballroom and lush garden venue accommodate up to 800 guests with bespoke floral design and gourmet catering.',
    details: ['Grand Ballroom', 'Up to 800 guests', 'Full Planning'],
  },
  {
    img: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=700&q=80',
    categoryImg: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=80&q=80',
    name: 'Business Conferences',
    desc: 'Fully-equipped conference rooms with the latest AV technology, high-speed internet, catering, and dedicated event coordinators for seamless corporate meetings.',
    details: ['5 Venues', 'Up to 500 guests', 'Full AV Support'],
  },
  {
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=80',
    categoryImg: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=80&q=80',
    name: 'Corporate Events',
    desc: 'Product launches, gala dinners, team-building retreats — our events team transforms your vision into an extraordinary experience tailored to your brand.',
    details: ['Flexible Venues', 'Up to 1,000 guests', 'Brand Customised'],
  },
];

const testimonials = [
  {
    text: 'An utterly magical stay. From the moment we arrived, every detail was attended to with grace. The Presidential Suite was beyond anything we had imagined. We will return, without question.',
    author: 'Priya Nair',
  },
  {
    text: "Skypeak Kitchen alone is worth the visit. Chef Sofia's tasting menu is a journey through flavours I had never encountered. The wine pairing was flawless. Truly a culinary pilgrimage.",
    author: 'Marcus Weber',
  },
  {
    text: 'We held our corporate summit here and were absolutely blown away. The conference team anticipated every need before we even asked. The venue setup was flawless and the catering impeccable.',
    author: 'Sarah Chen',
  },
];

export default function Events() {
  return (
    <>
      <section id="events" className="events-section">
        <div className="section-header">
          <div className="section-tag">Celebrations & Meetings</div>
          <h2 className="section-title">Events &amp; <em>Conferences</em></h2>
          <div className="section-divider" />
          <p className="section-desc">From intimate ceremonies to grand corporate gatherings — our versatile venues and expert planning team ensure every event exceeds expectations.</p>
        </div>
        <div className="events-grid">
          {events.map(event => (
            <div className="event-card" key={event.name}>
              <img src={event.img} alt={event.name} />
              <div className="event-body">
                <div className="event-category-img">
                  <img src={event.categoryImg} alt={event.name + ' icon'} />
                </div>
                <h3 className="event-name">{event.name}</h3>
                <p className="event-desc">{event.desc}</p>
                <div className="event-details">
                  {event.details.map(d => <span key={d}>{d}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="testimonials-section">
        <div className="section-header">
          <div className="section-tag">Guest Reviews</div>
          <h2 className="section-title">What Our <em>Guests Say</em></h2>
          <div className="section-divider" />
        </div>
        <div className="testimonials-wrap">
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <div className="testimonial-card" key={t.author}>
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-stars">★★★★★</div>
                <div className="author-name">{t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
