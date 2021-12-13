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
      <h1><span data-aos="flip-up">Careers</span></h1>
      <div className="careers-main">
        <div className="career" data-aos="zoom-in">
          <h2>Position</h2>
          <p>Pune</p>
          <h5>Know More</h5>
        </div>
        <div className="career" data-aos="zoom-in">
          <h2>Position</h2>
          <p>Pune</p>
          <h5>Know More</h5>
        </div>
        <div className="career" data-aos="zoom-in">
          <h2>Position</h2>
          <p>Pune</p>
          <h5>Know More</h5>
        </div>
        <div className="career" data-aos="zoom-in">
          <h2>Position</h2>
          <p>Pune</p>
          <h5>Know More</h5>
        </div>
        <div className="career" data-aos="zoom-in">
          <h2>Position</h2>
          <p>Pune</p>
          <h5>Know More</h5>
        </div>
        <div className="career" data-aos="zoom-in">
          <h2>Position</h2>
          <p>Pune</p>
          <h5>Know More</h5>
        </div>
        <div className="career" data-aos="zoom-in">
          <h2>Position</h2>
          <p>Pune</p>
          <h5>Know More</h5>
        </div>
        <div className="career" data-aos="zoom-in">
          <h2>Position</h2>
          <p>Pune</p>
          <h5>Know More</h5>
        </div>
      </div>
    </div>
  );
};

export default Careers;
