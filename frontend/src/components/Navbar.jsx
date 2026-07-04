import { useState, useEffect } from 'react';
import "../styles/Navbar.css";

export default function Navbar({ onLogout }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id], div[id="booking"]');
      let current = '';
      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home',       label: 'Home' },
    { href: '#about',      label: 'About' },
    { href: '#rooms',      label: 'Rooms' },
    { href: '#facilities', label: 'Facilities' },
    { href: '#restaurant', label: 'Dining' },
    { href: '#gallery',    label: 'Gallery' },
    { href: '#events',     label: 'Events' },
    { href: '#contact',    label: 'Contact' },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <span className="logo-main">Skypeak Resort</span>
          <span className="logo-sub">Luxury Hotel & Resort</span>
        </div>

        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{ color: activeSection === link.href.slice(1) ? 'var(--gold)' : '' }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li><a href="#rooms" className="nav-book-btn">Book Now</a></li>
          {onLogout && (
            <li>
              <button className="nav-signout" onClick={onLogout}>Sign Out</button>
            </li>
          )}
        </ul>

        <div className="hamburger" onClick={() => setMobileOpen(true)}>
          <span /><span /><span />
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu open">
          <span className="mobile-close" onClick={() => setMobileOpen(false)}>✕</span>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#rooms" onClick={() => setMobileOpen(false)}>Book Now</a>
        </div>
      )}
    </>
  );
}
