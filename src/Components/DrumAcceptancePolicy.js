import React from "react";

const DrumAcceptancePolicy = () => {
  return (
    <div className="policyModal wrapper">
      <h3>Drum Acceptance Policy</h3>
      <h4>Per: Transport Canada CAN/CGSB-43.126-98</h4>
      <ul>
        <li>
          <p>A Thoroughly-Emptied Drum (Fut totalment vide)</p>
        </li>
        <li>
          <p>
            A drum from which all materials have been removed using the most
            aggressive method for the type of lading. Methods can include
            pouring, upending, pumping, aspirating, scraping rinsing etc...
          </p>
        </li>
      </ul>

      <h3>Lennox Policy</h3>
      <ul>
        <li>
          <p>
            Shipper certifies that empty drums may contain dangerous goods
            residue from classes 3, 4.1, 5, 6.1, 8 or 9. Dangerous goods from
            classes 1, 4.3, 6.2, 7 or packing group 1 of any class are not
            accepted for reconditioning.
          </p>
        </li>
        <li>
          <p>
            These drums are "empty" as defined in provincial environmental
            regulations and have been properly prepared for transportation under
            regulations of Transport Canada.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default DrumAcceptancePolicy;
