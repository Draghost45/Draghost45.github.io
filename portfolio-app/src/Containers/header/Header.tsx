import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <div className="portfolio_header section_padding" id="home">
      <div className="portfolio_header-content">
        <h1 className="gradient_text">
          My name is Andrew Vargas Palacios and Welcome to my Website!!!{" "}
        </h1>
        <p>Text will go here about me </p>

        <div className="portfolio_header-content_input">
          <input type="email" placeholder="Your Email Address"></input>
          <button type="button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
