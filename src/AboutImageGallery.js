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
      alt: "Vitrine de l'innovation",
      caption: "Présentation des projets des participants"
    },
    {
      id: 3,
      src: "/Media/Sumo.jpg",
      alt: "Compétition",
      caption: "Compétition de robots Sumo"
    },
    {
      id: 4,
      src: "/Media/Awards.jpg",
      alt: "Cérémonie de remise des prix",
      caption: "Cérémonie de remise des prix"
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