import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ openReservation, isMenuMobileOpen, toggleMobileMenu, closeMobileMenu }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-left">
        <a href="#" className="logo">Sins of God</a>
      </div>
      <div className="header-right">
        <button className="btn-outline" onClick={openReservation}>Reserve a Table</button>
        <button className={`hamburger ${isMenuMobileOpen ? 'is-open' : ''}`} onClick={toggleMobileMenu} aria-label="Menu">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {isMenuMobileOpen && (
        <div className="dropdown-menu">
          <nav className="dropdown-links">
            <a href="#" onClick={closeMobileMenu}>Home</a>
            <a href="#about" onClick={closeMobileMenu}>About</a>
            <a href="#menu" onClick={closeMobileMenu}>Menu</a>
            <a href="#reservations" onClick={(e) => { e.preventDefault(); closeMobileMenu(); openReservation(); }}>Reservations</a>
            <a href="#contact" onClick={closeMobileMenu}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
