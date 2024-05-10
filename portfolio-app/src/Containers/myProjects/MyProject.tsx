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
        <Feature
          title="Online Shopping Web Site"
          text="In this project, we developed and designed an interactive website utilizing HTML, CSS, and Javascript in collaboration with a team of four. This website allowed online users to shop for a small range of products and edit their shopping carts with ease. One of the main tasks I worked on was designing the login and signing-up pages for the online shopping website. One of the features we implemented was input validation to test for a valid username and password. "
        />
        <Feature
          title="Password Hassing with Salting"
          text="In the next project, I worked on a password hashing system for logging into a small database filled with employees. Furthermore, this program implemented a static salting method to strengthen security. I used a hashing function called the SHA-1 method to replicate the use of cryptography today. This includes the input validation of the user name and password, as well as checking if the user signs in with the correct username and password. "
        />
        <Feature
          title="Predicting SUMOylation using Pre-trained Protein Language Models "
          text=""
        />
      </div>
    </div>
  );
};

export default MyProject;
