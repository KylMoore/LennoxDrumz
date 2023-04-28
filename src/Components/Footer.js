// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import DrumAcceptancePolicy from "./DrumAcceptancePolicy";
// import PreparingContainers from "./PreparingContainers";

// const Footer = () => {
//   const [openPolicy, setOpenPolicy] = useState(false);
//   const [openPreparation, setOpenPreparation] = useState(false);

//   const handlePolicyClick = () => {
//     setOpenPolicy(!openPolicy);
//   };

//   const handlePreparationClick = () => {
//     setOpenPreparation(!openPreparation);
//   };

//   return (
//     <footer>
//       <img src="./assets/Lennox-Drum-Ltd.jpg" alt="Lennox Drum logo" />
//       <div className="footerContent wrapper">
//         <div className="footerAddress">
//           <h3>Address:</h3>
//           <ul>
//             <li>
//               <p>Lennox Drum Ltd</p>
//               <p>233 Fuller Road</p>
//               <p>Ajax, ON L1S 2E1</p>
//               <p>Canada</p>
//             </li>
//             <li>
//               <span>(905) 427-1441</span>
//             </li>
//           </ul>
//         </div>
//         <div className="footerMiddle">
//           <ul>
//             <li>
//               <button
//                 className="policyButton"
//                 onClick={() => {
//                   handlePolicyClick();
//                 }}
//               >
//                 Drum Acceptance Policy
//                 {openPolicy ? <DrumAcceptancePolicy /> : null}
//               </button>
//             </li>
//             <li>
//               <button
//                 className="preparationButton"
//                 onClick={() => {
//                   handlePreparationClick();
//                 }}
//               >
//                 Preparing Containers for Transport
//                 {openPreparation ? <PreparingContainers /> : null}
//               </button>
//             </li>
//           </ul>
//         </div>
//         <div className="footerLinks">
//           <h3>Links</h3>
//           <ul>
//             <li>
//               <Link to="/" aria-label="Navigate to home page" title="Home">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/productsAndServices"
//                 aria-label="Navigate to products and services page"
//                 title="About"
//               >
//                 Products & Services
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about"
//                 aria-label="Navigate to about page"
//                 title="About"
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact"
//                 aria-label="Navigate to contact page"
//                 title="Contact"
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import DrumAcceptancePolicy from "./DrumAcceptancePolicy";
import PreparingContainers from "./PreparingContainers";
import { LanguageContext } from "./LanguageContext";

const Footer = () => {
  const [openPolicy, setOpenPolicy] = useState(false);
  const [openPreparation, setOpenPreparation] = useState(false);
  const { language } = useContext(LanguageContext);

  const handlePolicyClick = () => {
    setOpenPolicy(!openPolicy);
  };

  const handlePreparationClick = () => {
    setOpenPreparation(!openPreparation);
  };

  return (
    <footer>
      <img src="./assets/Lennox-Drum-Ltd-green.jpg" alt="Lennox Drum logo" />
      <div className="footerContent wrapper">
        <div className="footerAddress">
          <h3>Address:</h3>
          <ul>
            <li>
              <p>Lennox Drum Ltd</p>
              <p>233 Fuller Road</p>
              <p>Ajax, ON L1S 2E1</p>
              <p>Canada</p>
            </li>
            <li>
              <span>(905) 427-1441</span>
            </li>
          </ul>
        </div>

        <div className="footerMiddle">
          <ul>
            <li>
              <button
                className="policyButton"
                onClick={() => {
                  handlePolicyClick();
                }}
              >
                {language === "en"
                  ? "Drum Acceptance Policy"
                  : "Politique d'acceptation des fûts"}
                {openPolicy ? <DrumAcceptancePolicy /> : null}
              </button>
            </li>
            <li>
              <button
                className="preparationButton"
                onClick={() => {
                  handlePreparationClick();
                }}
              >
                {language === "en"
                  ? "Preparing Containers for Transport"
                  : "Préparation des conteneurs pour le transport"}
                {openPreparation ? <PreparingContainers /> : null}
              </button>
            </li>
          </ul>
        </div>
        <div className="footerLinks">
          <h3>{language === "en" ? "Links" : "Liens"}</h3>
          <ul>
            <li>
              <Link
                to="/"
                aria-label={
                  language === "en"
                    ? "Navigate to home page"
                    : "Accéder à la page d'accueil"
                }
                title={language === "en" ? "Home" : "Accueil"}
              >
                {language === "en" ? "Home" : "Accueil"}
              </Link>
            </li>
            <li>
              <Link
                to="/productsAndServices"
                aria-label={
                  language === "en"
                    ? "Navigate to products and services page"
                    : "Accéder à la page des produits et services"
                }
                title={
                  language === "en"
                    ? "Products & Services"
                    : "Produits et services"
                }
              >
                {language === "en"
                  ? "Products & Services"
                  : "Produits et services"}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                aria-label={
                  language === "en"
                    ? "Navigate to about page"
                    : "Accéder à la page À propos"
                }
                title={language === "en" ? "About" : "À propos"}
              >
                {language === "en" ? "About" : "À propos"}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                aria-label={
                  language === "en"
                    ? "Navigate to contact page"
                    : "Accéder à la page contact"
                }
                title={language === "en" ? "About" : "contact"}
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
