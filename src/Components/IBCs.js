import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const IBCs = () => {
  const { language } = useContext(LanguageContext);

  const englishText = {
    title: "Products & Services",
    subtitle: "IBC's",
    firstParagraph:
      "Securing quality containers for your industry's requirements is important, but how do you handle these containers when they are no longer of use?",
    new: "New:",
    newContent:
      "A complete line of composite carbon, carbon steel, stainless steel and limited use IBC’s are available.",
    reconditioned: "Reconditioned:",
    reconditionedContent:
      "We recondition and re-certify customer-owned IBC’s of all types for both TDG/UN and non-regulated used. In addition, we have our own stock of various reconditioned tote types available for purchase.",
    disposal: "Disposal:",
    disposalContent:
      "Lennox Container Group offers the assurance of complete de-identification and disposal.",
  };

  const frenchText = {
    title: "Produits et Services",
    subtitle: "IBC",
    firstParagraph:
      "Il est important de sécuriser des contenants de qualité pour répondre aux besoins de votre industrie, mais que faire de ces contenants lorsqu'ils ne sont plus utilisables?",
    new: "Nouveau:",
    newContent:
      "Une gamme complète d'IBC en carbone composite, en acier au carbone, en acier inoxydable et à usage limité est disponible.",
    reconditioned: "Reconditionné:",
    reconditionedContent:
      "Nous réparons et recertifions les IBC appartenant aux clients de tous types pour une utilisation réglementée ou non réglementée. De plus, nous avons notre propre stock de différents types de cuves reconditionnées disponibles à l'achat.",
    disposal: "Élimination:",
    disposalContent:
      "Le groupe Lennox Container offre l'assurance de la déidentification et de l'élimination complète.",
  };

  const text = language === "fr" ? frenchText : englishText;

  return (
    <section className="ibcsSection">
      <div className="wrapper">
        <h1>{text.title}</h1>
        <div className="ibcsSectionHeader">
          <h2>{text.subtitle}</h2>
          <img src="./assets/old-drums.jpg" alt="ibcs" />
        </div>
        <div className="ibcsSectionContent">
          <p>{text.firstParagraph}</p>
          <p>
            <span>{text.new}</span> {text.newContent}
          </p>
          <p>
            <span>{text.reconditioned}</span> {text.reconditionedContent}
          </p>
          <p>
            <span>{text.disposal}</span> {text.disposalContent}
          </p>
        </div>
      </div>
    </section>
  );
};

export default IBCs;
