import React from "react";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/AP_logo_transparent.png";

//BEM -> block element modifier
const Navbar = () => {
  return (
    <div className="portfolio_navbar">
      <div className="portfolio_navbar-links">
        <div className="portfolio_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="portfolio_navba-links_containers">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#home">Resume</a>
          </p>
          <p>
            <a href="#home">My Projects</a>
          </p>
          <p>
            <a href="#home">Contact Me</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
