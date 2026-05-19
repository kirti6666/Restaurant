import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = ({ openReservation }) => {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      {/* HERO BACKGROUND IMAGE — replace this div with your full-viewport hero image */}
      <img
        src="/images/hero.jpg"
        alt="Sins of God"
        className="hero-img-placeholder"
        style={{
          transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})`,
        }}
      />
      
      <div 
        className="hero-content"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`,
          opacity: Math.max(0, 1 - scrollY * 0.002)
        }}
      >
        <h1 className={`hero-title ${loaded ? 'reveal' : ''}`}>
          A Symphony of Flavour<br />& Atmosphere
        </h1>
        <p className={`hero-subtitle ${loaded ? 'reveal' : ''}`}>
          Designed for conversations, celebrations, and unforgettable nights.
        </p>
        <button className={`btn-outline hero-btn ${loaded ? 'reveal' : ''}`} onClick={openReservation}>
          Make Reservation
        </button>
      </div>
    </section>
  );
};

export default Hero;
