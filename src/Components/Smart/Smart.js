import React from "react";
import smart from "../../Assets/Images/smart.jpg";
import "./Smart.css";

const Smart = () => {
  

  return (
    <div
      className="smart-analytics-page"
      onMouseOver={() =>
        (document.querySelector(".header-info").style.display = "none")
      }
    >
      <div className="smart-analytics1">
        <div className="smart-analytics1-left">
          <h1 data-aos="flip-up">Smart Analytics</h1>
          <p data-aos="flip-up">
            Our Smart Analytics Service aims to empower decision making by
            helping our clients
          </p>
          <p data-aos="flip-up">Ideate, Design, and Translate Insights into Action.</p>
        </div>
        <div className="smart-analytics1-right">
          <img src={smart} alt="smart-analytics" />
        </div>
      </div>
      <div className="smart-analytics2">
        <div className="smart-analytics2-left">
          <h3 data-aos="flip-up">Commercial Analytics</h3>
          <p data-aos="flip-up">1. Sales & Market Forecasting</p>
          <p data-aos="flip-up">2. Business Intelligence</p>
          <p data-aos="flip-up">3. Market Sizing & Opportunity Analysis</p>
          <p data-aos="flip-up">4. Insights & Data Analytics</p>
          <p data-aos="flip-up">5. Augmented Consulting Service</p>
          <p data-aos="flip-up">6. Sales Force Effectiveness Analytics</p>
        </div>
        <div className="smart-analytics2-right">
          <h3 data-aos="flip-up">Commercial Analytics</h3>
          <p data-aos="flip-up">1. Vendor</p>
          <p data-aos="flip-up">2. Planning</p>
          <p data-aos="flip-up">3. Buying</p>
          <p data-aos="flip-up">4. Warehouse & Logistics</p>
          <p data-aos="flip-up">5. Merchandizing</p>
          <p data-aos="flip-up">6. 4ustomer</p>
        </div>
      </div>
      <div className="smart-analytics2">
        <div className="smart-analytics2-left">
          <h3 data-aos="flip-up">Sales & Distribution Analytics</h3>
          <p data-aos="flip-up">1. Unified Data Collection</p>
          <p data-aos="flip-up">2. KPI Standardization</p>
          <p data-aos="flip-up">3. Reusable Modules</p>
          <p data-aos="flip-up">4. Better Enterprise App Governance</p>
          <p data-aos="flip-up">5. Enable Advanced Reporting & Analytics</p>
          <p data-aos="flip-up">6. Business Outcomes</p>
        </div>
        <div className="smart-analytics2-right">
          <h3 data-aos="flip-up">Commercial Analytics</h3>
          <p data-aos="flip-up">1. Hindsight</p>
          <p data-aos="flip-up">2. Investigation</p>
          <p data-aos="flip-up">3. Foresight</p>
          <p data-aos="flip-up">4. Action</p>
        </div>
      </div>
    </div>
  );
};

export default Smart;
