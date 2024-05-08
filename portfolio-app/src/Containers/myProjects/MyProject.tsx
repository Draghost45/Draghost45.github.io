import React from "react";
import "./myProject.css";
import { Feature } from "..";
import Features from "../features/Features";

export const MyProject = () => {
  return (
    <div className="porfolio_myproject section_margin" id="myproject">
      <div className="portfolio_myproject-feature">
        <Features />
      </div>
      <div className="portfolio_myproject-heading">
        <h1 className="gradient-text" ></h1>
        <p>Explore My Content</p>
      </div>
      <div className="portfolio-container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  );
};

export default MyProject;
