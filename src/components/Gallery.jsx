import React from 'react';
import './Gallery.css';

const galleryImages = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
  "/images/gallery-7.jpg",
  "/images/gallery-8.jpg"
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <h2 className="section-title reveal-on-scroll">Gallery</h2>
      <div className="gallery-marquee reveal-on-scroll reveal-delay-1">
        <div className="gallery-track">
          {galleryImages.map((src, index) => (
            <img key={`a-${index}`} src={src} alt={`Gallery ${index + 1}`} className="gallery-img" />
          ))}
        </div>
        <div className="gallery-track" aria-hidden="true">
          {galleryImages.map((src, index) => (
            <img key={`b-${index}`} src={src} alt={`Gallery ${index + 1}`} className="gallery-img" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
