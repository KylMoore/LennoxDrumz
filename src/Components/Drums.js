import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Drums = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      productsAndServices: "Products & Services",
      drums: "Drums",
      new: "New: A complete line of new steel, plastic and fibre drums are available.",
      reconditioned:
        "Reconditioned: Industrial drums of all types can be reconditioned for both TDG and non-regulated use",
      customerOwned:
        "*Customer-Owned drums can be reconditioned, recertified and returned to the customer. We also have our own reconditioned drums available for sale.*",
      drumAcceptancePolicy: "Drum Acceptance Policy",
      preparingContainersForTransport: "Preparing Containers For Transport",
    },
    fr: {
      productsAndServices: "Produits et Services",
      drums: "Fûts",
      new: "Nouveau: Une gamme complète de fûts neufs en acier, plastique et fibre est disponible.",
      reconditioned:
        "Reconditionné: Les fûts industriels de tous types peuvent être reconditionnés pour une utilisation réglementée et non réglementée.",
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
        <h2>{content[language].drums}</h2>
        <p>
          <span>{content[language].new}</span>{" "}
          {content[language].completeLineOfNewDrums}
        </p>
        <p>
          <span>{content[language].reconditioned}</span>{" "}
          {content[language].industrialDrumsReconditioned}
        </p>
        <p>{content[language].customerOwned}</p>
        <div className="drumSectionButtons">
          <button>{content[language].drumAcceptancePolicy}</button>
          <button>{content[language].preparingContainersForTransport}</button>
        </div>
      </div>
    </section>
  );
};

export default Drums;
