import React, { useContext, useState } from "react";
import { LanguageContext } from "./LanguageContext";

const About = () => {
  const { language } = useContext(LanguageContext);
  const [accordion1Active, setAccordion1Active] = useState(false);
  const [accordion2Active, setAccordion2Active] = useState(false);
  const [accordion3Active, setAccordion3Active] = useState(false);

  const toggle1Accordion = (event) => {
    event.stopPropagation();
    setAccordion1Active(!accordion1Active);
  };

  const toggle2Accordion = (event) => {
    event.stopPropagation();
    setAccordion2Active(!accordion2Active);
  };

  const toggle3Accordion = (event) => {
    event.stopPropagation();
    setAccordion3Active(!accordion3Active);
  };

  const englishContent = (
    <>
      <h2>A little bit about us.</h2>
      <div className="aboutContainer">
        <div className="aboutImageContainer">
          <img src="./assets/old-drum.jpg" alt="an industrial barrel" />
        </div>
        <div className="aboutContent">
          <div
            onClick={toggle1Accordion}
            className={`accordion ${accordion1Active ? "active" : ""}`}
          >
            <h3>Who are we?</h3>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
              </svg>
            </button>
          </div>

          <p className={`accordionContent ${accordion1Active ? "active" : ""}`}>
            We are located in Ajax, Ontario, Canada, and specialize in providing
            steel drum reconditioning, recycling, and waste management services
            to various industries. The company was founded in 1953 by Jim
            Lennox, and it has been serving the Ontario region for more than 60
            years.
          </p>

          <div
            onClick={toggle2Accordion}
            className={`accordion ${accordion2Active ? "active" : ""}`}
          >
            <h3 className="borderTop">What we do</h3>
            <button onClick={toggle2Accordion}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
              </svg>
            </button>
          </div>

          <p className={`accordionContent ${accordion2Active ? "active" : ""}`}>
            We offer a range of products and services, including the collection
            of used drums, the reconditioning of drums to meet industry
            standards, and the supply of new and reconditioned drums. The
            company has an extensive fleet of trucks that transport the drums,
            and it operates a fully-automated reconditioning plant that is
            capable of processing up to 500 drums per hour.
          </p>

          <div
            onClick={toggle3Accordion}
            className={`accordion ${accordion3Active ? "active" : ""}`}
          >
            <h3 className="borderTop">Our goal</h3>
            <button onClick={toggle3Accordion}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
              </svg>
            </button>
          </div>

          <p className={`accordionContent ${accordion3Active ? "active" : ""}`}>
            In addition to drum reconditioning and recycling, we also provide a
            range of waste management services, including the removal and
            disposal of hazardous waste materials. The company is committed to
            environmental sustainability and is licensed by the Ministry of
            Environment, Conservation and Parks to operate a hazardous waste
            storage and transfer facility.
          </p>
        </div>
      </div>
      <p>
        We have built a reputation as a reliable and environmentally responsible
        provider of drum reconditioning and waste management services, and have
        earned numerous awards and certifications, including ISO 9001:2015
        certification for quality management systems and OHSAS 18001:2007
        certification for occupational health and safety management systems.
      </p>
    </>
  );

  const frenchContent = (
    <>
      <h2>Un peu à propos de nous.</h2>
      <div className={`accordion ${accordion1Active ? "active" : ""}`}>
        <h3>Qui sommes-nous?</h3>
        <button onClick={toggle1Accordion}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
        </button>
      </div>

      <p className={`accordionContent ${accordion1Active ? "active" : ""}`}>
        Nous sommes situés à Ajax, en Ontario, au Canada, et nous sommes
        spécialisés dans la fourniture de services de reconditionnement, de
        recyclage et de gestion des déchets de tambours en acier à diverses
        industries. La société a été fondée en 1953 par Jim Lennox et sert la
        région de l'Ontario depuis plus de 60 ans.
      </p>
      <div className={`accordion ${accordion2Active ? "active" : ""}`}>
        <h3 className="borderTop">Ce que nous faisons</h3>
        <button onClick={toggle2Accordion}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
        </button>
      </div>
      <p className={`accordionContent ${accordion2Active ? "active" : ""}`}>
        Nous offrons une gamme de produits et de services, notamment la collecte
        de tambours usagés, la reconditionnement de tambours pour répondre aux
        normes de l'industrie, et la fourniture de tambours neufs et
        reconditionnés. La société dispose d'un vaste parc de camions qui
        transportent les tambours, et elle exploite une usine de
        reconditionnement entièrement automatisée capable de traiter jusqu'à 500
        tambours par heure.
      </p>
      <div className={`accordion ${accordion3Active ? "active" : ""}`}>
        <h3 className="borderTop">Notre objectif</h3>
        <button onClick={toggle3Accordion}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
        </button>
      </div>
      <p className={`accordionContent ${accordion3Active ? "active" : ""}`}>
        En plus du reconditionnement et du recyclage de tambours, nous offrons
        également une gamme de services de gestion des déchets, y compris
        l'enlèvement et l'élimination de matériaux dangereux. La société
        s'engage en faveur de la durabilité environnementale et est agréée par
        le ministère de l'Environnement, de la Conservation et des Parcs pour
        exploiter une installation de stockage et de transfert de déchets
        dangereux.
      </p>
      <p>
        Nous avons acquis une réputation de fournisseur fiable et écologiquement
        responsable de services de reconditionnement de tambours et de gestion
        des déchets, et avons obtenu de nombreux prix et certifications,
        notamment la certification ISO 9001:2015 pour les systèmes de gestion de
        la qualité et la certification OHSAS 18001:2007 pour les systèmes de
        gestion de la santé et de la sécurité au travail.
      </p>
    </>
  );

  return (
    <section className="aboutSection">
      <div className="aboutPageHeader wrapper">
        <h1>Lennox Drum Ltd.</h1>
        {language === "en" ? englishContent : frenchContent}
      </div>
    </section>
  );
};

export default About;
