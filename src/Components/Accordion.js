import React from "react";

const Accordion = () => {
  return (
    <div>
      <div className="accordion">
        <div className="accordionHeading">
          <div className="container">
            <p>Title</p>
            <span>X</span>
          </div>
        </div>
        <div className="accordionContent">
          <div className="container">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit,
              dolorem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
