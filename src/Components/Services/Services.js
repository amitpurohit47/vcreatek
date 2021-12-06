import React from "react";
import cloud from "../../Assets/Images/cloud.jpg";
import research from "../../Assets/Images/lab.jpg";
import webapp from "../../Assets/Images/webapp.png";
import smart from "../../Assets/Images/smart.jpg";
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
                <div className="service-card" style={{height : '350px'}}>
                    <img src={smart} alt="smart analytics" />
                    <h3>Smart Analytics</h3>
                </div>
            </Link>
            <Link to="/webapp" data-aos="fade-up">
                <div className="service-card" style={{height : '300px',marginTop : '40px'}}>
                    <img src={webapp} alt="webapp" />
                    <h3>Web Application Services</h3>
                </div>
            </Link>
            <Link to="/research-lab" data-aos="fade-up">
                <div className="service-card" style={{marginTop : '-80px'}}>
                    <img src={research} alt="research" />
                    <h3>Research & Lab</h3>
                </div>
            </Link>
        </div>
    </div>
  );
};

export default Services;
