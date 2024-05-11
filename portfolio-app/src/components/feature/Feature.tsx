import React from "react";
import "./feature.css";

import shopping2 from "../../assets/Shopping_Website_p2.png";
import shopping3 from "../../assets/Shopping_Website_p3.png";
//

export const Feature = ({ title, text }) => {
  return (
    <div className="portfolio_features-container_feature">
      <div className="portfolio_features-container_feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="portfolio_features-container_feature-text">
        <p>{text}</p>
        
      </div>
      
    </div>
    
  );
};
export default Feature;
