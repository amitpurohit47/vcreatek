import React from "react";
import sales from "../../Assets/Images/sales.jpg";
import "./Sales.css";

const Sales = () => {
  return (
    <div
      className="sales"
      onMouseOver={() =>
        (document.querySelector(".header-info").style.display = "none")
      }
    >
      <h1>Sales Analytics</h1>
      <div className="sales-main">
        <div className="sales-left">
          <p>
            <strong>vCreaTek’s Sales Analytics</strong> offers the capability of
            presenting real-time transactional information side-by-side with
            historical information in a single analytical environment.Data from
            different pipelines and sources such as application transactions,
            surveys and internal applications are taken and analyzed in order to
            find relationships and opportunities that may be used by the
            organization. Relevant data is mined and then analyzed in order to
            forecast future sales.
          </p>
          <h3>Key Functionality</h3>
          <p>
            Sales Analytics solution is delivered with out-of the-box conformed
            dimensions and features the following analytical capability:
          </p>
          <ul>
            <li>Increase Forecasting Accuracy and Sales Results.</li>
            <li>Increase Sales Force Effectiveness.</li>
            <li>Improve Responsiveness.</li>
            <li>Maximize Resource Utilization and Profitability.</li>
            <li>
              Faster Implementation, Lower Risk, and Better Business Results.
            </li>
            <li>Better user Adoption and Alignment.</li>
            <li>
              Manipulation of parameters, Measures, Dimensions or Figures as
              part of an Analytic or Planning Exercise.
            </li>
          </ul>
        </div>
        <div className="sales-right">
          <img src={sales} alt="sales" />
        </div>
      </div>
    </div>
  );
};

export default Sales;
