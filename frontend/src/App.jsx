import './App.css'

import { useEffect, useState } from 'react';

import Login from './components/Login';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Booking from './components/Booking';
import About from './components/About';
import Rooms from './components/Rooms';
import Facilities from './components/Facilities';
import Restaurant from './components/Restaurant';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [page, setPage] = useState('login');
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackTop(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Show Login Page First
  if (page === 'login') {
    return (
      <Login
        onLogin={() => setPage('home')}
      />
    );
  }

  // Show Hotel Website After Login
  return (
    <>
      <Navbar onLogout={() => setPage('login')} />

      <Hero />
      <Booking />
      <About />
      <Rooms />
      <Facilities />
      <Restaurant />
      <Gallery />
      <Events />
      <Contact />
      <Footer />

      <div
        className={`back-top${showBackTop ? ' show' : ''}`}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
      >
        ↑
      </div>
    </>
  );
}