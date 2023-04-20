import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LanguageMenu from "./LanguageMenu";

const NavBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [showProductsMenu, setShowProductsMenu] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const toggleProductsMenu = () => {
    setShowProductsMenu(!showProductsMenu);
  };

  return (
    <nav>
      <div className="navBar">
        <div className="navBarList">
          <ul>
            <li>
              <Link to="/" aria-label="Navigate to home page" title="Home">
                Home
              </Link>
            </li>
            <li>
              <div onClick={toggleProductsMenu}>
                Products & Services
                {showProductsMenu && (
                  <ul className="productsAndServicesDropdown">
                    <li>
                      <Link
                        to="/drums"
                        aria-label="Navigate to Drums page"
                        title="Drums"
                      >
                        Drums
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ibcs"
                        aria-label="Navigate to IBC's page"
                        title="IBC's"
                      >
                        IBC's
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/regrind"
                        aria-label="Navigate to regrind page"
                        title="Regrind"
                      >
                        Regrind
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <Link
                to="/about"
                aria-label="Navigate to about page"
                title="About"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                aria-label="Navigate to contact page"
                title="Contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleHamburger}>
          <FontAwesomeIcon icon={faBars} className="hamburger-icon" />
          {hamburgerOpen && (
            <HamburgerMenu
              hamburgerOpen={hamburgerOpen}
              setHamburgerOpen={setHamburgerOpen}
            />
          )}
        </div>
      </div>
      <LanguageMenu />
    </nav>
  );
};

export default NavBar;
