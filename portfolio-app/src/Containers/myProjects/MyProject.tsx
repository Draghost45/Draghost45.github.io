import React from "react";
import "./myProject.css";
import { Feature } from "..";
import Features from "../features/Features";

export const MyProject = () => {
  return (
    <div className="portfolio_myproject section_margin" id="myproject">
      <div className="portfolio_myproject-feature">
        <Features
          title="About my Projects"
          text="These are some of the projects that I have completed or collaborated on during my years studying at the University of Houston, Downtown. The types of projects that I will be showing range from web design to collaborating on a research paper. Feel free to explore or email me for details or the methods that were discussed in any of the projects below. "
        />
      </div>
      <div className="portfolio_myproject-heading">
        <h1 className="gradient_text">
          Interactive and responsive projects are featured bellow:
        </h1>
        <p>Explore My Content</p>
      </div>
      <div className="portfolio_myproject-container">
        <Feature title="Online Shopping Web Site " text="" />
        <Feature title="Password Hassing with Salting " text="" />
        <Feature title="" text="" />
      </div>
    </div>
  );
};

export default MyProject;
