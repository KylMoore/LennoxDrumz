// import React from "react";

// const About = () => {
//   return (
//     <section className="aboutSection">
//       <div className="homePageHeader wrapper">
//         <h1>Lennox Container Group</h1>
//         <p>
//           We are located in Ajax, Ontario, Canada, and specialize in providing
//           steel drum reconditioning, recycling, and waste management services to
//           various industries. The company was founded in 1953 by Jim Lennox, and
//           it has been serving the Ontario region for more than 60 years.{" "}
//         </p>
//         <p>
//           We offer a range of products and services, including the collection of
//           used drums, the reconditioning of drums to meet industry standards,
//           and the supply of new and reconditioned drums. The company has an
//           extensive fleet of trucks that transport the drums, and it operates a
//           fully-automated reconditioning plant that is capable of processing up
//           to 500 drums per hour.{" "}
//         </p>
//         <p>
//           In addition to drum reconditioning and recycling, we also provides a
//           range of waste management services, including the removal and disposal
//           of hazardous waste materials. The company is committed to
//           environmental sustainability and is licensed by the Ministry of
//           Environment, Conservation and Parks to operate a hazardous waste
//           storage and transfer facility.
//         </p>
//         <p>
//           We have built a reputation as a reliable and environmentally
//           responsible provider of drum reconditioning and waste management
//           services, and have earned numerous awards and certifications,
//           including ISO 9001:2015 certification for quality management systems
//           and OHSAS 18001:2007 certification for occupational health and safety
//           management systems.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default About;

import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const About = () => {
  const { language } = useContext(LanguageContext);

  const englishContent = (
    <>
      <p>
        We are located in Ajax, Ontario, Canada, and specialize in providing
        steel drum reconditioning, recycling, and waste management services to
        various industries. The company was founded in 1953 by Jim Lennox, and
        it has been serving the Ontario region for more than 60 years.
      </p>
      <p>
        We offer a range of products and services, including the collection of
        used drums, the reconditioning of drums to meet industry standards, and
        the supply of new and reconditioned drums. The company has an extensive
        fleet of trucks that transport the drums, and it operates a
        fully-automated reconditioning plant that is capable of processing up to
        500 drums per hour.
      </p>
      <p>
        In addition to drum reconditioning and recycling, we also provides a
        range of waste management services, including the removal and disposal
        of hazardous waste materials. The company is committed to environmental
        sustainability and is licensed by the Ministry of Environment,
        Conservation and Parks to operate a hazardous waste storage and transfer
        facility.
      </p>
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
      <p>
        Nous sommes situés à Ajax, en Ontario, au Canada, et nous sommes
        spécialisés dans la fourniture de services de reconditionnement, de
        recyclage et de gestion des déchets de tambours en acier à diverses
        industries. La société a été fondée en 1953 par Jim Lennox et sert la
        région de l'Ontario depuis plus de 60 ans.
      </p>
      <p>
        Nous offrons une gamme de produits et de services, notamment la collecte
        de tambours usagés, la reconditionnement de tambours pour répondre aux
        normes de l'industrie, et la fourniture de tambours neufs et
        reconditionnés. La société dispose d'un vaste parc de camions qui
        transportent les tambours, et elle exploite une usine de
        reconditionnement entièrement automatisée capable de traiter jusqu'à 500
        tambours par heure.
      </p>
      <p>
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
      <div className="homePageHeader wrapper">
        <h1>Lennox Drum Ltd.</h1>
        {language === "en" ? englishContent : frenchContent}
      </div>
    </section>
  );
};

export default About;
