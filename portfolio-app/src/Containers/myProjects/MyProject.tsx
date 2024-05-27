import React from "react";
import Feature from "../../components/feature/Feature";
import "./myProject.css";
import Slideshow from "../../components/slideshow/Slideshow";
import shopping1 from "../../assets/Shopping_Website_p1.png";
import shopping2 from "../../assets/Shopping_Website_p2.png";
import secure1 from "../../assets/Secure_Login_p1.png";
import secure2 from "../../assets/Secure_Login_p2.png";

const images = [
  shopping1,
  shopping2,
  secure1,
  secure2,
  // Add more image URLs as needed
];

export const MyProject = () => {
  return (
    <div className="portfolio_myproject section_margin" id="myproject">
      <div className="portfolio_myproject-feature">
        <Feature
          title="About my Projects"
          text="These are some of the projects that I have completed or collaborated on during my years studying at the University of Houston, Downtown. The types of projects that I will be showing range from web design to collaborating on a research paper. Feel free to explore or email me for details or the methods that were discussed in any of the projects below. "
          url="https://github.com/Draghost45"
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
          url="https://github.com/MAKAHAL/OnlineStore"
        />
        <Feature
          title="Password Hassing with Salting"
          text="In the next project, I worked on a password hashing system for logging into a small database filled with employees. Furthermore, this program implemented a static salting method to strengthen security. I used a hashing function called the SHA-1 method to replicate the use of cryptography today. This includes the input validation of the user name and password, as well as checking if the user signs in with the correct username and password. "
          url="https://drive.google.com/drive/folders/1EBCK3yDXIlg7YUr6r8k-UP6z6tL9mKpX?usp=drive_link"
        />
        <Feature
          title="Predicting SUMOylation using Pre-trained Protein Language Models "
          text="dafsdsf"
          url="https://academic.oup.com/nargab/article/6/1/lqae011/7602820?login=false"
        />
      </div>
      <div className="portfolio_myproject-containers-slideshow">
        <Slideshow images={images} />
      </div>
    </div>
  );
};

export default MyProject;
