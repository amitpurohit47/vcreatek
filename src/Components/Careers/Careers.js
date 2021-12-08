import React from "react";
import "./Careers.css";

const Careers = () => {
  

  return (
    <div
      className="careers-page"
      onMouseOver={() =>
        (document.querySelector(".header-info").style.display = "none")
      }
    >
      <h1>Careers</h1>
      <div className="careers-main">
        <div className="career">
          <h2>Position</h2>
          <p>Pune</p>
          <h5>Know More</h5>
        </div>
        <div className="career">
          <h2>Position</h2>
          <p>Pune</p>
          <h5>Know More</h5>
        </div>
        <div className="career">
          <h2>Position</h2>
          <p>Pune</p>
          <h5>Know More</h5>
        </div>
        <div className="career">
          <h2>Position</h2>
          <p>Pune</p>
          <h5>Know More</h5>
        </div>
        <div className="career">
          <h2>Position</h2>
          <p>Pune</p>
          <h5>Know More</h5>
        </div>
        <div className="career">
          <h2>Position</h2>
          <p>Pune</p>
          <h5>Know More</h5>
        </div>
        <div className="career">
          <h2>Position</h2>
          <p>Pune</p>
          <h5>Know More</h5>
        </div>
        <div className="career">
          <h2>Position</h2>
          <p>Pune</p>
          <h5>Know More</h5>
        </div>
      </div>
    </div>
  );
};

export default Careers;
