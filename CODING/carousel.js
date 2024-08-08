import React, { useState } from 'react';
import './Carousel.css'; 

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button" onClick={handlePrevious}>
        Previous
      </button>
      <div className="carousel-image-container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="carousel-image"
        />
      </div>
      <button className="carousel-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
