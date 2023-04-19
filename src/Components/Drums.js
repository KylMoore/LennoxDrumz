import React from "react";

const Drums = () => {
  return (
    <section className="drumsSection">
      <div className="wrapper">
        <h1>Products & Services</h1>
        <h2>Drums</h2>
        <p>
          <span>New:</span> A complete line of new steel, plastic and fibre
          drums are available.
        </p>
        <p>
          <span>Reconditioned:</span> Industrial drums of all types can be
          reconditioned for both TDG and non-regulated use
        </p>
        <p>
          *Customer-Owned drums can be reconditioned, recertified and returned
          to the customer. We also have our own reconditioned drums available
          for sale.*
        </p>
        <div className="drumSectionButtons">
          <button>Drum Acceptance Policy</button>
          <button>Preparing Containers For Transport</button>
        </div>
      </div>
    </section>
  );
};

export default Drums;
