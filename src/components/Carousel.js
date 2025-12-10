import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    "https://img.freepik.com/foto-gratis/paciente-dentista-recibiendo-tratamiento_23-2149374092.jpg",
    "https://img.freepik.com/foto-gratis/dentista-trabajando-paciente_23-2149374078.jpg",
    "https://img.freepik.com/foto-gratis/mujer-sonriendo-dentista_23-2149374068.jpg"
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Cambio automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <button className="carousel-btn prev" onClick={goToPrevious}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        
        <div className="carousel-slides">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        
        <button className="carousel-btn next" onClick={goToNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;