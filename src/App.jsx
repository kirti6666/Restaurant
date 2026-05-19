import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import './App.css';

function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

  const openReservation = () => setIsReservationOpen(true);
  const closeReservation = () => setIsReservationOpen(false);

  const toggleMobileMenu = () => setIsMenuMobileOpen(!isMenuMobileOpen);
  const closeMobileMenu = () => setIsMenuMobileOpen(false);

  useEffect(() => {
    const initObserver = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach(el => observer.observe(el));
    };
    
    setTimeout(initObserver, 100);
  }, []);

  return (
    <div className="app-container">
      <Header 
        openReservation={openReservation} 
        isMenuMobileOpen={isMenuMobileOpen} 
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
      />
      <main>
        <Hero openReservation={openReservation} />
        <Menu />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      
      {isReservationOpen && <ReservationModal closeReservation={closeReservation} />}
    </div>
  );
}

export default App;
