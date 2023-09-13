import { useState } from "react";
import { Link } from "react-router-dom";

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
