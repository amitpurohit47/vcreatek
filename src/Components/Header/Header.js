import React from "react";
import logo from "../../Assets/Images/vcreateklogo.png";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {

  const openInfo = (i) => {
    const links = document.querySelectorAll(".header-link");
    const info = links[i].querySelector('.header-info');
    info.classList.add('header-info-open');
  }


  return (
    <nav className="header">
      <div className="header-container">
        <div className="header-main-container">
          <div className="header-logo-container">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul className="header-links">
            <li className="header-link">
              <button>Home</button>
            </li>
            <li className="header-link" onClick={() => openInfo(1)}>
              <button>
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
                Services
              </button>
              <div className="header-info">
                <div className="header-info-container">
                  <div className="header-service-section1">
                    <div className="header-level1">
                      Data & Cloud Services
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                        className="header-svg-container"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.625 9.875l-5.36 5.36a.374.374 0 01-.53 0l-5.36-5.36"
                        ></path>
                      </svg>
                      <div className="header-service-section2">
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
                    </div>
                    <div className="header-level1">
                      Web Application Services
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                        className="header-svg-container"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.625 9.875l-5.36 5.36a.374.374 0 01-.53 0l-5.36-5.36"
                        ></path>
                      </svg>
                      <div className="header-service-section2">
                        <p>Full Stack Development</p>
                        <p>Application Support & Maintainance</p>
                        <p>Testing & Automation</p>
                        <p>Integration & API Development</p>
                      </div>
                    </div>
                    <div className="header-level1">
                      Research & Lab
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                        className="header-svg-container"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.625 9.875l-5.36 5.36a.374.374 0 01-.53 0l-5.36-5.36"
                        ></path>
                      </svg>
                      <div className="header-service-section2">
                        <p>Blockchain</p>
                        <p>Quantum Computing</p>
                        <p>Products - ROGERS,FOSHAN</p>
                      </div>
                    </div>
                    <div className="header-level1">
                      Smart Analytics
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                        className="header-svg-container"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.625 9.875l-5.36 5.36a.374.374 0 01-.53 0l-5.36-5.36"
                        ></path>
                      </svg>
                      <div className="header-service-section2">
                        <div className="header-level2">
                          Commercial Analytics
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                            className="header-svg-container"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.625 9.875l-5.36 5.36a.374.374 0 01-.53 0l-5.36-5.36"
                            ></path>
                          </svg>
                          <div className="header-service-section3">
                            <p>Sales & Market Forecasting</p>
                            <p>Business Intelligence</p>
                            <p>Market Sizing & Opportunity Analysis</p>
                            <p>Insights & Data Analytics</p>
                            <p>Augmented Consulting Serives</p>
                            <p>Sales Force Effectiveness Analytics</p>
                          </div>
                        </div>
                        <p>Sales & Distribution Analytics</p>
                        <div className="header-level2">
                          Healthcare Analytics Service
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                            className="header-svg-container"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.625 9.875l-5.36 5.36a.374.374 0 01-.53 0l-5.36-5.36"
                            ></path>
                          </svg>
                          <div className="header-service-section3">
                            <p>Lifecycle Management Forecasting</p>
                            <p>Business Development & Licensing Forecast</p>
                            <p>Market Sizing & Opportunity Forecast</p>
                            <p>Insight & data Analytics</p>
                            <p>SFE & Omnichannel Analytics</p>
                          </div>
                        </div>
                        <div className="header-level2">
                          Supply Chain Management
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                            className="header-svg-container"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.625 9.875l-5.36 5.36a.374.374 0 01-.53 0l-5.36-5.36"
                            ></path>
                          </svg>
                          <div className="header-service-section3">
                            <p>Vendor</p>
                            <p>Planning</p>
                            <p>Buying</p>
                            <p>Warehouse & Logistics</p>
                            <p>Multichannel Operations</p>
                            <p>Merchandizing</p>
                            <p>Customers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="header-link">
              <button>
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
                Design Studio
              </button>
              <div className="header-info">
                <div className="header-info-container">
                  <div className="header-service-section1">
                    <p>Application UI/UX</p>
                    <p>Industrial Product Design</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="header-link">
              <button>
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
                Technological Partners
              </button>
              <div className="header-info">
                <div className="header-info-container">
                  <div className="header-service-section1">
                    <p>Erwin</p>
                    <p>Snowflake</p>
                    <p>Looker</p>
                    <p>UiPath</p>
                    <p>Rapidminer</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="header-link">
              <button>
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
                About Us
              </button>
              <div className="header-info">
                <div className="header-info-container">
                  <div className="header-service-section1">
                    <p>Core Values</p>
                    <p>Our Story</p>
                    <p>Leadership</p>
                    <p>Life @vCreaTek</p>
                    <p>AIC MIT Incubator</p>
                    <p>Gallery</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="header-link">
              <button>Careers</button>
            </li>
            <li className="header-link">
              <button>Contact Us</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
