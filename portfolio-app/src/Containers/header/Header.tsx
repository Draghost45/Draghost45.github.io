import React from "react";
import "./header.css";
import profile from "../../assets/AP_profile.jpg";
export const Header = () => {
  return (
    <div className="portfolio_header section_padding" id="home">
      <div className="portfolio_header-content">
        <h1 className="gradient_text">
          My name is Andrew Vargas Palacios and Welcome to my Website!!!{" "}
        </h1>
        <p>
          I am a very result-driven and highly adaptable individual who recently
          graduated from the University of Houston—Downtown with a bachelor's
          degree in computer science. I am seeking a software engineering or
          data analysis position and plan to continue my education in the field
          of artificial intelligence.  My most committed and proficient skills
          that I have used throughout my experience are Python, C++, Bash, and
          Bash.  {" "}
        </p>

        <div className="portfolio_header-content_input">
          <input
            type="email"
            placeholder="Would you like to connect or collaborate with me?"
          ></input>
          <button type="button">Lets Connect!!!!!</button>
        </div>
      </div>
      <div className="portfolio_header-image">
        <img src={profile} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
