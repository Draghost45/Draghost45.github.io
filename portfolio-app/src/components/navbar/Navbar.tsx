import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/AP_logo_transparent.png";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#resume">Resume</a>
    </p>
    <p>
      <a href="#myProject">My Projects</a>
    </p>
    <p>
      <a href="#contact">Contact Me</a>
    </p>
  </>
);

//BEM -> block element modifier
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="portfolio_navbar">
      <div className="portfolio_navbar-links">
        <div className="portfolio_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="portfolio_navbar-links_containers">
          <Menu />
        </div>
      </div>
      <div className="portfolio_navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="portfolio_navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="portfolio_navbar-menu_container scale-up-center">
            <div className="portfolio_navbar-menu_container-links">
              <Menu />
              <div className="portfolio_navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
