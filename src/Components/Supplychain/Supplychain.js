import React from "react";
import supplychain from "../../Assets/Images/supplychain.jpg";
import "./Supplychain.css";

const Supplychain = () => {
  return (
    <div
      className="supplychain"
      onMouseOver={() =>
        (document.querySelector(".header-info").style.display = "none")
      }
    >
      <h1>Supply Chain Analytics</h1>
      <div className="supplychain-main">
        <div className="supplychain-left">
          <p>
            <strong>vCreaTek Supply chain Analytics</strong> provides
            organizations with powerful insight that enables them to link
            together all the different wikipages exploring statistical,
            mathematical and optimization methods that would be beneficial to
            any supply chain professional. Recommendation for creating
            sub-categories is by business problem and not by solution technique.
          </p>
          <h3>Key Functionality</h3>
          <ul>
            <li>Drawn from real-time data, delivering real-time.</li>
            <li>
              Customized for business and the specific KPI’s driving the
              organization.
            </li>
            <li>Self-service capability for “deep-dive” views.</li>
            <li>
              Secure views based on user knowledge level and “need to know.”
            </li>
            <li>Help drive decisions.</li>
            <li>Shared views with outside vendors and suppliers.</li>
          </ul>
        </div>
        <div className="supplychain-right">
          <img src={supplychain} alt="supplychain" />
        </div>
      </div>
    </div>
  );
};

export default Supplychain;
