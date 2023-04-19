import React from "react";
import { Link } from "react-router-dom";

const ProductsAndServices = () => {
  return (
    <section className="productsAndServices">
      <div className="wrapper">
        <h2>Products & Services</h2>
        <div className="product">
          <h3>Drums</h3>
          <img src="" alt="" />
          <div>
            <h4>Lennox Drum Limited</h4>
            <ul>
              <li>New & reconditioned drums</li>
              <li>Steel & Plastic</li>
              <li>Bung type and Open Head</li>
              <li>Recertification of UN rated Drums</li>
            </ul>
            <Link to="/drums" aria-label="Navigate to Drums page" title="Drums">
              Learn more...
            </Link>
          </div>
        </div>
        <div className="product">
          <h3>IBC's</h3>
          <img src="" alt="" />
          <div>
            <h4>Container Services A.R.M.</h4>
            <ul>
              <li>New and reconditioned tote tanks</li>
              <li>Steel & Plastic</li>
              <li>275 gallon and 330 gallon</li>
              <li>Recertification of UN rated tote tanks</li>
            </ul>
            <Link to="/ibcs" aria-label="Navigate to IBC's page" title="IBC's">
              Learn more...
            </Link>
          </div>
        </div>
        <div className="product">
          <h3>Regrind</h3>
          <img src="" alt="" />
          <div>
            <h4>Recycled Grindings Inc.</h4>
            <ul>
              <li>
                Recycling of plastic drums into pellets for re-manufacturing
              </li>
              <li>
                Shredding of disposable steel containers for re-manufacturing
              </li>
            </ul>
            <Link
              to="/regrind"
              aria-label="Navigate to regrind page"
              title="Regrind"
            >
              Learn more...
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsAndServices;
