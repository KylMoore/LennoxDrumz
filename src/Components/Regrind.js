import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Regrind = () => {
  const { language } = useContext(LanguageContext);

  const englishText = {
    title: "Products & Services",
    subtitle: "Regrind",
    firstParagraph:
      "Recycled Grindings Inc. has the capability to shred both plastic and steel. When you need to dispose of plastic drums, steel drums and IBC’s, our disposal and resource recovery system is capable of fully serving your needs. Following shredding, and granulation (if required) the remaining product is sent out for re-use in other applications.",
    secondParagraph:
      "Your company can be confident that our process will render your expired IBC bottles and other disposable containers non-identifiable.",
    thirdParagraph:
      "For more information on this process or to request a quote, contact us today. The Lennox Container Group is always ready to answer any questions you may have.",
  };

  const frenchText = {
    title: "Produits et Services",
    subtitle: "Regranulés",
    firstParagraph:
      "Recycled Grindings Inc. a la capacité de broyer à la fois le plastique et l'acier. Lorsque vous avez besoin de vous débarrasser des fûts en plastique, des fûts en acier et des IBC, notre système de récupération et d'élimination des déchets est capable de répondre pleinement à vos besoins. Après le broyage et la granulation (si nécessaire), le produit restant est envoyé pour être réutilisé dans d'autres applications.",
    secondParagraph:
      "Votre entreprise peut être certaine que notre processus rendra vos bouteilles IBC périmées et autres contenants jetables non identifiables.",
    thirdParagraph:
      "Pour plus d'informations sur ce processus ou pour demander un devis, contactez-nous dès aujourd'hui. Le groupe Lennox Container est toujours prêt à répondre à toutes les questions que vous pourriez avoir.",
  };

  const text = language === "fr" ? frenchText : englishText;

  return (
    <section className="regrindSection">
      <div className="wrapper">
        <h1>{text.title}</h1>
        <div className="regrindSectionHeader">
          <h2>{text.subtitle}</h2>
          {/* <img src="./assets/old-drums.jpg" alt="regrind" /> */}
        </div>
        <div className="regrindSectionContent">
          <div className="regrindSectionContentLeft">
            <p>{text.firstParagraph}</p>
            <p>{text.secondParagraph}</p>
            <p>{text.thirdParagraph}</p>
          </div>
          <div className="regrindSectionContentRight">
            <img src="./assets/old-drums.jpg" alt="regrind" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Regrind;
