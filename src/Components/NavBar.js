import { useState, useContext } from "react";

import { Link } from "react-router-dom";

import HamburgerMenu from "./HamburgerMenu";
import LanguageMenu from "./LanguageMenu";

import { LanguageContext } from "./LanguageContext";

import lennoxLogo from "../assets/Lennox-Logo.jpg";

const NavBar = () => {
  const { language } = useContext(LanguageContext);

  const [showProductsMenu, setShowProductsMenu] = useState(false);

  const handleMouseLeave = () => {
    setShowProductsMenu(false);
  };

  const translations = {
    en: {
      home: "Home",
      productsAndServices: "Products & Services",
      drums: "Drums",
      ibcs: "IBC's",
      regrind: "Regrind",
      about: "About",
      contact: "Contact",
    },
    fr: {
      home: "Accueil",
      productsAndServices: "Produits et Services",
      drums: "Fûts",
      ibcs: "IBC's",
      regrind: "Recyclage",
      about: "À propos",
      contact: "Contact",
    },
  };

  return (
    <>
      <nav>
        <div className="navBar">
          <HamburgerMenu />
          <img
            src={lennoxLogo}
            alt="Lennox Drum logo"
            className="logo"
          />
          <div className="navBarList">
            <ul>
              <li>
                <Link
                  to="/"
                  aria-label="Navigate to home page"
                  title={translations[language].home}
                >
                  {translations[language].home}
                </Link>
              </li>
              <li>
                <div
                  className="dropdownTrigger"
                  onClick={() => setShowProductsMenu(!showProductsMenu)}
                >
                  {translations[language].productsAndServices}

                  <ul
                    onMouseLeave={handleMouseLeave}
                    className={`productsAndServicesDropdown ${
                      showProductsMenu ? "active" : "inactive"
                    }`}
                  >
                    <li>
                      <Link
                        to="/drums"
                        aria-label={`Navigate to ${translations[language].drums} page`}
                        title={translations[language].drums}
                      >
                        {translations[language].drums}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ibcs"
                        aria-label={`Navigate to ${translations[language].ibcs} page`}
                        title={translations[language].ibcs}
                      >
                        {translations[language].ibcs}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/regrind"
                        aria-label={`Navigate to ${translations[language].regrind} page`}
                        title={translations[language].regrind}
                      >
                        {translations[language].regrind}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  to="/about"
                  aria-label={`Navigate to ${translations[language].about} page`}
                  title={translations[language].about}
                >
                  {translations[language].about}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  aria-label={`Navigate to ${translations[language].contact} page`}
                  title={translations[language].contact}
                >
                  {translations[language].contact}
                </Link>
              </li>
            </ul>
          </div>

          <LanguageMenu />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
