import React, { useState } from 'react';
import './AboutImageGallery.css';

const AboutImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: "/Media/Ensa.jpg",
      alt: "Ensa Agadir",
      caption: "ENSA Agadir"
    },
    {
      id: 2,
      src: "/Media/Exhibit.jpg",
      alt: "Innovation Showcase",
      caption: "Innovative projects display"
    },
    {
      id: 3,
      src: "/Media/Sumo.jpg",
      alt: "Competition",
      caption: "Sumo Robot Competition"
    },
    {
      id: 4,
      src: "/Media/Awards.jpg",
      alt: "Award Ceremony",
      caption: "Award Ceremony"
    }
  ];

  const openImageModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="about-gallery">
      <div className="about-gallery-grid">
        {galleryImages.map((image) => (
          <div 
            key={image.id} 
            className="about-gallery-item"
            onClick={() => openImageModal(image)}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="about-modal-overlay" onClick={closeImageModal}>
          <div className="about-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="about-modal-caption">
              <p>{selectedImage.caption}</p>
            </div>
            <button className="about-modal-close" onClick={closeImageModal}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutImageGallery;