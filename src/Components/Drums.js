import React, { useContext, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import DrumAcceptancePolicy from "./DrumAcceptancePolicy";
import PreparingContainers from "./PreparingContainers";

const Drums = () => {
  const [openPolicy, setOpenPolicy] = useState(false);
  const [openPreparation, setOpenPreparation] = useState(false);

  const handlePolicyClick = () => {
    setOpenPolicy(!openPolicy);
  };

  const handlePreparationClick = () => {
    setOpenPreparation(!openPreparation);
  };

  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      productsAndServices: "Products & Services",
      drums: "Drums",
      newHeader: "New: ",
      new: "A complete line of new steel, plastic and fibre drums are available.",
      reconditionedHeader: "Reconditioned: ",
      reconditioned:
        "Industrial drums of all types can be reconditioned for both TDG and non-regulated use",
      customerOwned:
        "*Customer-Owned drums can be reconditioned, recertified and returned to the customer. We also have our own reconditioned drums available for sale.*",
      drumAcceptancePolicy: "Drum Acceptance Policy",
      preparingContainersForTransport: "Preparing Containers For Transport",
    },
    fr: {
      productsAndServices: "Produits et Services",
      drums: "Fûts",
      newHeader: "Nouveau: ",
      new: "Une gamme complète de fûts neufs en acier, plastique et fibre est disponible.",
      reconditionedHeader: "Reconditionné: ",
      reconditioned:
        "Les fûts industriels de tous types peuvent être reconditionnés pour une utilisation réglementée et non réglementée.",
      customerOwned:
        "*Les fûts appartenant aux clients peuvent être reconditionnés, recertifiés et retournés au client. Nous avons également nos propres fûts reconditionnés en vente.*",
      drumAcceptancePolicy: "Politique d'acceptation des fûts",
      preparingContainersForTransport:
        "Préparation des conteneurs pour le transport",
    },
  };

  return (
    <section className="drumsSection">
      <div className="wrapper">
        <h1>{content[language].productsAndServices}</h1>
        <div className="drumsSectionHeader">
          <h2>{content[language].drums}</h2>
          <img src="./assets/old-drums.jpg" alt="drums" />
        </div>
        <div className="drumsSectionContent">
          <p>
            <strong>{content[language].newHeader}</strong>
            {content[language].new}
            {content[language].completeLineOfNewDrums}
          </p>
          <p>
            <strong>{content[language].reconditionedHeader}</strong>
            {content[language].reconditioned}
            {content[language].industrialDrumsReconditioned}
          </p>
          <p><i>{content[language].customerOwned}</i></p>
        </div>
        <div className="drumSectionButtons">
          <button
            className="policyButton"
            onClick={() => {
              handlePolicyClick();
            }}
          >
            {content[language].drumAcceptancePolicy}
            {openPolicy ? <DrumAcceptancePolicy /> : null}
          </button>
          <button
            className="preparationButton"
            onClick={() => {
              handlePreparationClick();
            }}
          >
            {content[language].preparingContainersForTransport}
            {openPreparation ? <PreparingContainers /> : null}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Drums;
