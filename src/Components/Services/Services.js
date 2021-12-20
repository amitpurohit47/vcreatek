import React from "react";
import cloud from "../../Assets/Images/cloudservices.jpg";
import research from "../../Assets/Images/research-and-scholarship.jpg";
import webapp from "../../Assets/Images/webdev.svg";
import smart from "../../Assets/Images/smart-data.png";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  return (
    <div
      className="services-page"
      onMouseOver={() =>
        (document.querySelector(".header-info").style.display = "none")
      }
    >
      <h1>Our Services</h1>
      <div className="services-page-main">
        <Link to="/data-cloud" data-aos="fade-up">
          <div className="service-card">
            <img src={cloud} alt="cloud" />
            <h3>Data & Cloud Services</h3>
          </div>
        </Link>
        <Link to="/smart-analytics" data-aos="fade-up">
          <div className="service-card">
            <img src={smart} alt="smart analytics" />
            <h3>Smart Analytics</h3>
          </div>
        </Link>
        <Link to="/webapp" data-aos="fade-up">
          <div className="service-card">
            <img src={webapp} alt="webapp" />
            <h3>Web Application Services</h3>
          </div>
        </Link>
        <Link to="/research-lab" data-aos="fade-up">
          <div className="service-card">
            <img src={research} alt="research" />
            <h3>Research & Lab</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
