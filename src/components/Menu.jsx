import React, { useState, useEffect } from 'react';
import './Menu.css';

const menuItems = [
  {
    id: 'brunch',
    title: 'Brunch',
    desc: 'A delightful start to your day with global flavors.',
    images: ['/images/brunch.jpg', '/images/brunch-2.jpg', '/images/brunch-3.jpg', '/images/brunch-4.jpg']
  },
  {
    id: 'dinner',
    title: 'Dinner',
    desc: 'Exquisite evening courses crafted to perfection.',
    images: ['/images/dinner.jpg', '/images/dinner-2.jpg', '/images/dinner-3.jpg', '/images/dinner-4.jpg']
  },
  {
    id: 'cocktails',
    title: 'Cocktails',
    desc: 'Signature drinks to elevate your spirits.',
    images: ['/images/mocktails.jpg', '/images/mocktails-2.jpg', '/images/mocktails-3.jpg', '/images/mocktails-4.jpg']
  },
  {
    id: 'desserts',
    title: 'Desserts',
    desc: 'Sweet indulgences to conclude your experience.',
    images: ['/images/desserts.jpg', '/images/desserts-2.jpg', '/images/desserts-3.jpg', '/images/desserts-4.jpg']
  },
];

const AutoCarousel = ({ images, altText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="carousel-container">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`${altText} ${index + 1}`}
          className={`menu-img-placeholder carousel-img ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

const MenuCard = ({ item, openMenuModal }) => {
  return (
    <div className="menu-card reveal-on-scroll">
      <AutoCarousel images={item.images} altText={item.title} />

      <div className="menu-card-content">
        <h3 className="menu-card-title">{item.title}</h3>
        <p className="menu-card-desc">{item.desc}</p>
        <button className="btn-outline view-menu-btn" onClick={() => openMenuModal(item.id)}>
          View Menu
        </button>
      </div>
    </div>
  );
};

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const openMenuModal = (id) => setActiveMenu(id);
  const closeMenuModal = () => setActiveMenu(null);

  return (
    <section id="menu" className="menu-section">
      <h2 className="section-title reveal-on-scroll">Discover the Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} openMenuModal={openMenuModal} />
        ))}
      </div>

      {activeMenu && (
        <div className="menu-modal-overlay">
          <button className="close-btn" onClick={closeMenuModal}>&times;</button>
          {/* MENU CARD IMAGE [BRUNCH/DINNER/COCKTAILS/DESSERTS] — replace with your menu image */}
          <img
            src={`/images/${activeMenu}-menu.jpg`}
            alt={`${activeMenu.charAt(0).toUpperCase() + activeMenu.slice(1)} Menu`}
            className="menu-overlay-img"
          />
        </div>
      )}
    </section>
  );
};

export default Menu;
