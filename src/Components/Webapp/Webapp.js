import React from "react";
import webapp from "../../Assets/Images/webapp.png";
import wave2 from "../../Assets/Images/wave2.svg";
import stack from "../../Assets/Images/stack.png";
import maintenance from "../../Assets/Images/maintenance.png";
import agile from "../../Assets/Images/agile.png";
import api from "../../Assets/Images/api.png";
import "./Webapp.css";

const Webapp = () => {
  return (
    <div
      className="web-app-page"
      onClick={() =>
        (document.querySelector(".header-info").style.display = "none")
      }
    >
      <div className="web-app1">
        <div className="web-app1-left">
          <h1>Web Application Services</h1>
        </div>
        <div className="web-app1-right">
          <img src={wave2} className="wave2" alt="wave1" />
          <img src={webapp} alt="webapp" />
        </div>
      </div>
      <div className="web-app2">
        <div className="web-app2-card">
          <h1>Full Stack Development</h1>
          <img src={stack} alt="" />
        </div>
        <div className="web-app2-card">
          <h1>Application Support & Maintenance</h1>
          <img src={maintenance} alt="" />
        </div>
        <div className="web-app2-card">
          <h1>Testing & Automation</h1>
          <img src={agile} alt="" />
        </div>
        <div className="web-app2-card">
          <h1>Integration & API Development</h1>
          <img src={api} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Webapp;
