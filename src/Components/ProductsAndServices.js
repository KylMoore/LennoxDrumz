import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { Link } from "react-router-dom";

const ProductsAndServices = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    en: {
      title: "Products & Services",
      drums: {
        title: "Drums",
        company: "Lennox Drum Limited",
        items: [
          "New & reconditioned drums",
          "Steel & Plastic",
          "Bung type and Open Head",
          "Recertification of UN rated Drums",
        ],
        link: "Learn more...",
      },
      ibcs: {
        title: "IBC's",
        company: "Container Services A.R.M.",
        items: [
          "New and reconditioned tote tanks",
          "Steel & Plastic",
          "275 gallon and 330 gallon",
          "Recertification of UN rated tote tanks",
        ],
        link: "Learn more...",
      },
      regrind: {
        title: "Regrind",
        company: "Recycled Grindings Inc.",
        items: [
          "Recycling of plastic drums into pellets for re-manufacturing",
          "Shredding of disposable steel containers for re-manufacturing",
        ],
        link: "Learn more...",
      },
    },
    fr: {
      title: "Produits et services",
      drums: {
        title: "Fûts",
        company: "Lennox Drum Limitée",
        items: [
          "Fûts neufs et reconditionnés",
          "Acier et plastique",
          "Type de bouchon et à tête ouverte",
          "Recertification des fûts notés UN",
        ],
        link: "En savoir plus...",
      },
      ibcs: {
        title: "GRV",
        company: "Services de conteneurs A.R.M.",
        items: [
          "GRV neufs et reconditionnés",
          "Acier et plastique",
          "275 gallons et 330 gallons",
          "Recertification des GRV notés UN",
        ],
        link: "En savoir plus...",
      },
      regrind: {
        title: "Recyclage",
        company: "Recycled Grindings Inc.",
        items: [
          "Recyclage de fûts en plastique en granulés pour la remanufacturation",
          "Déchiquetage de conteneurs en acier jetables pour la remanufacturation",
        ],
        link: "En savoir plus...",
      },
    },
  };

  const currentTranslations = translations[language];

  return (
    <section className="productsAndServices">
      <div className="wrapper">
        <h2>{currentTranslations.title}</h2>
        <div className="product">
          <h3>{currentTranslations.drums.title}</h3>
          <h4>{currentTranslations.drums.company}</h4>
          <div className="productsAndServicesContent">
            <div className="productsAndServicesLeftAndRight">
              <div className="productsAndServicesLeft">
                <ul>
                  {currentTranslations.drums.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="productsAndServicesRight">
                <img src="./assets/old-drums.jpg" alt="" />
              </div>
            </div>
            <Link to="/drums" aria-label="Navigate to Drums page" title="Drums">
              {currentTranslations.drums.link}
            </Link>
          </div>
        </div>
        <div className="product">
          <h3>{currentTranslations.ibcs.title}</h3>
          <h4>{currentTranslations.ibcs.company}</h4>
          <div className="productsAndServicesContent">
            <div className="productsAndServicesLeftAndRight">
              <div className="productsAndServicesLeft">
                <ul>
                  {currentTranslations.ibcs.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="productsAndServicesRight">
                <img src="./assets/old-drums.jpg" alt="" />
              </div>
            </div>
            <Link to="/ibcs" aria-label="Navigate to IBC's page" title="IBC's">
              {currentTranslations.ibcs.link}
            </Link>
          </div>
        </div>
        <div className="product">
          <h3>{currentTranslations.regrind.title}</h3>
          <h4>{currentTranslations.regrind.company}</h4>
          <div className="productsAndServicesContent">
            <div className="productsAndServicesLeftAndRight">
              <div className="productsAndServicesLeft">
                <ul>
                  {currentTranslations.regrind.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="productsAndServicesRight">
                <img src="./assets/old-drums.jpg" alt="" />
              </div>
            </div>
            <Link
              to="/regrind"
              aria-label="Navigate to regrind page"
              title="Regrind"
            >
              {currentTranslations.regrind.link}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsAndServices;
