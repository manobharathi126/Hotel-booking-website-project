import { useState } from 'react';
import "../styles/Footer.css";

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">Skypeak Resort</div>
          <p>A sanctuary of luxury and elegance nestled at the peaks of the mountains. Where every stay becomes a cherished memory.</p>
          <div className="footer-stars">★★★★★ Five-Star Certified</div>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {['Home:#home', 'About Us:#about', 'Rooms & Suites:#rooms', 'Facilities:#facilities', 'Dining:#restaurant', 'Gallery:#gallery'].map(item => {
              const [label, href] = item.split(':');
              return <li key={label}><a href={href}>{label}</a></li>;
            })}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Guest Services</h4>
          <ul>
            {['Book a Room:#booking', 'Special Offers:#offers', 'Events & Weddings:#events', 'Reviews:#testimonials', 'Contact Us:#contact', 'Cancellation Policy:#'].map(item => {
              const [label, href] = item.split(':');
              return <li key={label}><a href={href}>{label}</a></li>;
            })}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>Subscribe for exclusive offers, seasonal packages, and curated travel experiences.</p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button onClick={() => setEmail('')}>→</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Skypeak Resort. All rights reserved. Crafted with ♥ in India.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
