import React, { useState } from "react";
import "./slideshow.css";

export const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="portfolio_slideshow">
      <div className="portfolio_slideshow-image">
        <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
      />
      </div>
      <div>
      <button type="button" onClick={goToPrevImage}>
        Previous
      </button>
      
      <button type="button" onClick={goToNextImage}>
        Next
      </button>
      </div>
    </div>
  );
};

export default Slideshow;
