import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const hamburgerMenu = ({ hamburgerOpen, setHamburgerOpen }) => {
  const closeMenu = (event) => {
    event.preventDefault();
    setHamburgerOpen(false);
  };

  return (
    <Menu isOpen={hamburgerOpen}>
      <Link
        id="home"
        className="menu-item"
        to="/"
        aria-label="Navigate to home page"
        title="Home"
      >
        Home
      </Link>
      <Link
        id="productsAndServices"
        className="menu-item"
        to="/productsAndServices"
        aria-label="Navigate to products and services page"
        title="Products & Services"
      >
        Products & Services
      </Link>
      <Link
        id="about"
        className="menu-item"
        to="/about"
        aria-label="Navigate to about page"
        title="About"
      >
        About
      </Link>
      <Link
        id="contact"
        className="menu-item"
        to="/contact"
        aria-label="Navigate to contact page"
        title="Contact"
      >
        Contact
      </Link>
      <Link onClick={closeMenu} className="menu-item--small" href="null">
        Settings
      </Link>
    </Menu>
  );
};

export default hamburgerMenu;
