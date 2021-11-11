import React, { useState } from "react";
import logo from "../../Assets/Images/vcreateklogo.png";
import { Link } from "react-router-dom";
import "./MobileNav.css";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    const spans = document
      .querySelector(".mobile-nav-ham")
      .querySelectorAll("span");
    if (isOpen) {
      spans[0].classList.remove("ham1-open");
      spans[1].classList.remove("ham2-open");
      spans[2].classList.remove("ham3-open");
      document
        .querySelectorAll(".mobile-container")
        .forEach((item) => item.classList.remove("mobile-nav-open"));
    } else {
      spans[0].classList.add("ham1-open");
      spans[1].classList.add("ham2-open");
      spans[2].classList.add("ham3-open");
      document
        .getElementById("mobile-nav-main")
        .classList.add("mobile-nav-open");
    }
    setIsOpen((prev) => !prev);
  };

  const openMenu = (name) => {
    document.getElementById(name).classList.add("mobile-nav-open");
  };

  const closeMenu = (name) => {
    document.getElementById(name).classList.remove("mobile-nav-open");
  };

  return (
    <div className="mobile-nav">
      <div className="mobile-nav-top">
        <div className="mobile-nav-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="mobile-nav-ham" onClick={toggleOpen}>
          <span className="mobile-nav-ham1"></span>
          <span className="mobile-nav-ham2"></span>
          <span className="mobile-nav-ham3"></span>
        </div>
      </div>
      <div id="mobile-nav-main" className="mobile-container">
        <p>Home</p>
        <p onClick={() => openMenu("mobile-services-list")}>
          Services
          <svg
            width="11"
            height="6"
            fill="none"
            viewBox="0 0 11 6"
            aria-hidden="true"
            focusable="false"
            className="header-svg-container"
          >
            <path
              stroke="#1A1628"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.006.75l-4.41 4.41a.308.308 0 0 1-.436 0L.75.75"
            ></path>
          </svg>
        </p>
        <p onClick={() => openMenu("mobile-design-list")}>
          Design Studio
          <svg
            width="11"
            height="6"
            fill="none"
            viewBox="0 0 11 6"
            aria-hidden="true"
            focusable="false"
            className="header-svg-container"
          >
            <path
              stroke="#1A1628"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.006.75l-4.41 4.41a.308.308 0 0 1-.436 0L.75.75"
            ></path>
          </svg>
        </p>
        <p onClick={() => openMenu("mobile-techpartner-list")}>
          Technology Partners
          <svg
            width="11"
            height="6"
            fill="none"
            viewBox="0 0 11 6"
            aria-hidden="true"
            focusable="false"
            className="header-svg-container"
          >
            <path
              stroke="#1A1628"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.006.75l-4.41 4.41a.308.308 0 0 1-.436 0L.75.75"
            ></path>
          </svg>
        </p>
        <p onClick={() => openMenu("mobile-aboutus-list")}>
          About Us
          <svg
            width="11"
            height="6"
            fill="none"
            viewBox="0 0 11 6"
            aria-hidden="true"
            focusable="false"
            className="header-svg-container"
          >
            <path
              stroke="#1A1628"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.006.75l-4.41 4.41a.308.308 0 0 1-.436 0L.75.75"
            ></path>
          </svg>
        </p>
        <p>Careers</p>
        <p>Contact Us</p>
      </div>
      <div id="mobile-services-list" className="mobile-container">
        <h1 onClick={() => closeMenu("mobile-services-list")}>
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              stroke="#76737e"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.625 9.875l-5.36 5.36a.374.374 0 01-.53 0l-5.36-5.36"
            ></path>
          </svg>
          Services
        </h1>
        <p onClick={() => openMenu("mobile-datacloud-list")}>
          Data & Cloud Services
          <svg
            width="11"
            height="6"
            fill="none"
            viewBox="0 0 11 6"
            aria-hidden="true"
            focusable="false"
            className="header-svg-container"
          >
            <path
              stroke="#1A1628"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.006.75l-4.41 4.41a.308.308 0 0 1-.436 0L.75.75"
            ></path>
          </svg>
        </p>
        <p onClick={() => openMenu("mobile-web-list")}>
          Web Application Services
          <svg
            width="11"
            height="6"
            fill="none"
            viewBox="0 0 11 6"
            aria-hidden="true"
            focusable="false"
            className="header-svg-container"
          >
            <path
              stroke="#1A1628"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.006.75l-4.41 4.41a.308.308 0 0 1-.436 0L.75.75"
            ></path>
          </svg>
        </p>
        <p onClick={() => openMenu("mobile-research-list")}>
          Research & Lab
          <svg
            width="11"
            height="6"
            fill="none"
            viewBox="0 0 11 6"
            aria-hidden="true"
            focusable="false"
            className="header-svg-container"
          >
            <path
              stroke="#1A1628"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.006.75l-4.41 4.41a.308.308 0 0 1-.436 0L.75.75"
            ></path>
          </svg>
        </p>
        <p onClick={() => openMenu("mobile-smart-list")}>
          Smart Analytics
          <svg
            width="11"
            height="6"
            fill="none"
            viewBox="0 0 11 6"
            aria-hidden="true"
            focusable="false"
            className="header-svg-container"
          >
            <path
              stroke="#1A1628"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.006.75l-4.41 4.41a.308.308 0 0 1-.436 0L.75.75"
            ></path>
          </svg>
        </p>
      </div>
      <div id="mobile-datacloud-list" className="mobile-container">
        <h1 onClick={() => closeMenu("mobile-datacloud-list")}>
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              stroke="#76737e"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.625 9.875l-5.36 5.36a.374.374 0 01-.53 0l-5.36-5.36"
            ></path>
          </svg>
          Data & Cloud Services
        </h1>
        <p>BI Audit</p>
        <p>Data Visualization</p>
        <p>Data Governance</p>
        <p>Data Lake</p>
        <p>Master Data Management</p>
        <p>Analytics & Insight Competency Centre(CoE)</p>
        <p>Cloud & Mobile BI</p>
        <p>Big Data</p>
        <p>Text & Semantic Analytics</p>
      </div>
      <div id="mobile-web-list" className="mobile-container">
        <h1 onClick={() => closeMenu("mobile-web-list")}>
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              stroke="#76737e"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.625 9.875l-5.36 5.36a.374.374 0 01-.53 0l-5.36-5.36"
            ></path>
          </svg>
          Web Application Services
        </h1>
        <p>Full Stack Development</p>
        <p>Application & Support Maintainance</p>
        <p>Testing & Automation</p>
        <p>Integration & API Development</p>
      </div>
      <div id="mobile-research-list" className="mobile-container">
        <h1 onClick={() => closeMenu("mobile-research-list")}>
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              stroke="#76737e"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.625 9.875l-5.36 5.36a.374.374 0 01-.53 0l-5.36-5.36"
            ></path>
          </svg>
          Research & Lab
        </h1>
        <p>Blockchain</p>
        <p>Quantum Computing</p>
        <p>Products- ROGERS,FOSHAN</p>
      </div>
      <div id="mobile-smart-list" className="mobile-container">
        <h1 onClick={() => closeMenu("mobile-smart-list")}>
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              stroke="#76737e"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.625 9.875l-5.36 5.36a.374.374 0 01-.53 0l-5.36-5.36"
            ></path>
          </svg>
          Smart Analytics
        </h1>
        <p onClick={() => openMenu("mobile-commercial-list")}>
          Commercial Analytics
          <svg
            width="11"
            height="6"
            fill="none"
            viewBox="0 0 11 6"
            aria-hidden="true"
            focusable="false"
            className="header-svg-container"
          >
            <path
              stroke="#1A1628"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.006.75l-4.41 4.41a.308.308 0 0 1-.436 0L.75.75"
            ></path>
          </svg>
        </p>
        <p>Sales & Distribution Analytics</p>
        <p onClick={() => openMenu("mobile-health-list")}>
          Healthcare Analytics Service
          <svg
            width="11"
            height="6"
            fill="none"
            viewBox="0 0 11 6"
            aria-hidden="true"
            focusable="false"
            className="header-svg-container"
          >
            <path
              stroke="#1A1628"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.006.75l-4.41 4.41a.308.308 0 0 1-.436 0L.75.75"
            ></path>
          </svg>
        </p>
        <p onClick={() => openMenu("mobile-supply-list")}>
          Supply Chain Management
          <svg
            width="11"
            height="6"
            fill="none"
            viewBox="0 0 11 6"
            aria-hidden="true"
            focusable="false"
            className="header-svg-container"
          >
            <path
              stroke="#1A1628"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.006.75l-4.41 4.41a.308.308 0 0 1-.436 0L.75.75"
            ></path>
          </svg>
        </p>
      </div>
      <div id="mobile-commercial-list" className="mobile-container">
        <h1 onClick={() => closeMenu("mobile-commercial-list")}>
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              stroke="#76737e"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.625 9.875l-5.36 5.36a.374.374 0 01-.53 0l-5.36-5.36"
            ></path>
          </svg>
          Commercial Analytics
        </h1>
        <p>Sales & Market Forecasting</p>
        <p>Business Intelligence</p>
        <p>Market Sizing & Opportunity Analysis</p>
        <p>Insights & Data Analytics</p>
        <p>Augmented Consulting Services</p>
        <p>Sales Force Effectiveness Analytics</p>
      </div>
      <div id="mobile-health-list" className="mobile-container">
        <h1 onClick={() => closeMenu("mobile-health-list")}>
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              stroke="#76737e"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.625 9.875l-5.36 5.36a.374.374 0 01-.53 0l-5.36-5.36"
            ></path>
          </svg>
          Healthcare Analytics Service
        </h1>
        <p>Lifecycle Management Forecasting</p>
        <p>Business Development & Licensing Forecast</p>
        <p>Market Sizing & Opportunity Forecast</p>
        <p>Insight & Data Analytics</p>
        <p>SFE & Omnichannel Analytics</p>
      </div>
      <div id="mobile-supply-list" className="mobile-container">
        <h1 onClick={() => closeMenu("mobile-supply-list")}>
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              stroke="#76737e"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.625 9.875l-5.36 5.36a.374.374 0 01-.53 0l-5.36-5.36"
            ></path>
          </svg>
          Supply Chain Management
        </h1>
        <p>Vendor</p>
        <p>Planning</p>
        <p>Buying</p>
        <p>Warehouse & Logistics</p>
        <p>Multichannel Operations</p>
        <p>Merchandizing</p>
        <p>Customers</p>
      </div>
      <div id="mobile-design-list" className="mobile-container">
        <h1 onClick={() => closeMenu("mobile-design-list")}>
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              stroke="#76737e"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.625 9.875l-5.36 5.36a.374.374 0 01-.53 0l-5.36-5.36"
            ></path>
          </svg>
          Design Studio
        </h1>
        <p>Application UI,UX</p>
        <p>Industrial Product Design</p>
      </div>
      <div id="mobile-techpartner-list" className="mobile-container">
        <h1 onClick={() => closeMenu("mobile-techpartner-list")}>
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              stroke="#76737e"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.625 9.875l-5.36 5.36a.374.374 0 01-.53 0l-5.36-5.36"
            ></path>
          </svg>
          Technology Partners
        </h1>
        <p>Erwin</p>
        <p>Snowflake</p>
        <p>Looker</p>
        <p>UiPath</p>
        <p>Rapidminer</p>
      </div>
      <div id="mobile-aboutus-list" className="mobile-container">
        <h1 onClick={() => closeMenu("mobile-aboutus-list")}>
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              stroke="#76737e"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.625 9.875l-5.36 5.36a.374.374 0 01-.53 0l-5.36-5.36"
            ></path>
          </svg>
          About Us
        </h1>
        <p>Core Values</p>
        <p>Our Story</p>
        <p>Leadership</p>
        <p>Life @vCreaTek</p>
        <p>AIC Incubator</p>
        <p>Gallery</p>
      </div>
    </div>
  );
};

export default MobileNav;
