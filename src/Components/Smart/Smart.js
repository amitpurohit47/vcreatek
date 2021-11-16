import React from "react";
import smart from "../../Assets/Images/smart.jpg";
import "./Smart.css";

const Smart = () => {
  return (
    <div
      className="smart-analytics-page"
      onClick={() =>
        (document.querySelector(".header-info").style.display = "none")
      }
    >
      <div className="smart-analytics1">
        <div className="smart-analytics1-left">
          <h1>Smart Analytics</h1>
          <p>
            Our Smart Analytics Service aims to empower decision making by
            helping our clients
          </p>
          <p>Ideate, Design, and Translate Insights into Action.</p>
        </div>
        <div className="smart-analytics1-right">
          <img src={smart} alt="smart-analytics" />
        </div>
      </div>
      <div className="smart-analytics2">
        <div className="smart-analytics2-left">
          <h3>Commercial Analytics</h3>
          <p>1. Sales & Market Forecasting</p>
          <p>2. Business Intelligence</p>
          <p>3. Market Sizing & Opportunity Analysis</p>
          <p>4. Insights & Data Analytics</p>
          <p>5. Augmented Consulting Service</p>
          <p>6. Sales Force Effectiveness Analytics</p>
        </div>
        <div className="smart-analytics2-right">
          <h3>Commercial Analytics</h3>
          <p>1. Vendor</p>
          <p>2. Planning</p>
          <p>3. Buying</p>
          <p>4. Warehouse & Logistics</p>
          <p>5. Merchandizing</p>
          <p>6. 4ustomer</p>
        </div>
      </div>
      <div className="smart-analytics2">
        <div className="smart-analytics2-left">
          <h3>Sales & Distribution Analytics</h3>
          <p>1. Unified Data Collection</p>
          <p>2. KPI Standardization</p>
          <p>3. Reusable Modules</p>
          <p>4. Better Enterprise App Governance</p>
          <p>5. Enable Advanced Reporting & Analytics</p>
          <p>6. Business Outcomes</p>
        </div>
        <div className="smart-analytics2-right">
          <h3>Commercial Analytics</h3>
          <p>1. Hindsight</p>
          <p>2. Investigation</p>
          <p>3. Foresight</p>
          <p>4. Action</p>
        </div>
      </div>
    </div>
  );
};

export default Smart;
