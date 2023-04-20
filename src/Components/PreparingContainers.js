import React from "react";

const PreparingContainers = () => {
  return (
    <div className="preparingContainersModal wrapper">
      <h3>Proper procedure for emptying a drum</h3>
      <h4>For Closed Head Drums</h4>
      <ul>
        <li>
          <p>Pour out contents until drip dry.</p>
        </li>
        <li>
          <p>Replace and tighten all closures.</p>
        </li>
      </ul>
      <h4>For Open Head Drums</h4>
      <ul>
        <li>
          <p>Pour, pump or scrape out contents until empty.</p>
        </li>
        <li>
          <p>Replace all lids and rings securely.</p>
        </li>
      </ul>
    </div>
  );
};

export default PreparingContainers;
