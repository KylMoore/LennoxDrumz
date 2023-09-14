import { useState } from "react";
import { Link } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faHandshake, faHand, faAddressBook, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faHouse, faHandshake, faHand, faAddressBook, faGear);

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`hamburger-menu ${menuOpen ? "open" : ""}`}>
      <input
        type="checkbox"
        className="hamburger-checkbox"
        id="hamburger-checkbox"
        checked={menuOpen}
        onChange={handleMenuToggle}
      />
      <label htmlFor="hamburger-checkbox" className="hamburger-label">
        <span className="hamburger-icon"></span>
      </label>
      <div className="hamburger-content">
        <ul>
          <li>
            <FontAwesomeIcon icon="fa-solid fa-house" />
            <Link
              id="home"
              className="menu-item"
              to="/"
              aria-label="Navigate to home page"
              title="Home"
            >
              Home
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon="fa-solid fa-handshake" />
            <Link
              id="productsAndServices"
              className="menu-item"
              to="/productsAndServices"
              aria-label="Navigate to products and services page"
              title="Products & Services"
            >
              Products & Services
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon="fa-solid fa-hand" />
            <Link
              id="about"
              className="menu-item"
              to="/about"
              aria-label="Navigate to about page"
              title="About"
            >
              About
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon="fa-solid fa-address-book" />
            <Link
              id="contact"
              className="menu-item"
              to="/contact"
              aria-label="Navigate to contact page"
              title="Contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon="fa-solid fa-gear" />
            <Link className="menu-item--small" href="null">
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
