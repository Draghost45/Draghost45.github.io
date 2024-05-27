import React, { useState, useEffect } from "react";
import "./slideshow.css";

export const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 50); // Ensure a brief delay for the fade-in effect

    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  const goToNextImage = () => {
    setVisible(false);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 500); // Match the timeout duration with the transition duration
  };

  const goToPrevImage = () => {
    setVisible(false);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }, 500); // Match the timeout duration with the transition duration
  };

  return (
    <div className="portfolio_slideshow">
      <div className="portfolio_slideshow-image">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className={visible ? "visible" : ""}
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
