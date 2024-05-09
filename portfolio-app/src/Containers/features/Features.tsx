import React from "react";
import "./features.css";

export const Features = ({ title, text }) => {
  return (
    <div className="portfolio_features-container_features">
      <div className="portfolio_features-container_features-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="portfolio_features-container_features-text">{text}</div>
    </div>
  );
};
export default Features;
