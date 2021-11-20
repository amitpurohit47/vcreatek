import React, { useEffect, useState } from "react";
import logo from "../../Assets/Images/vcreateklogo.png";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const data = [
    {
      linkname: "Home",
    },
    {
      linkname: "Services",
      subdata: [
        {
          subdataName: "Data & Cloud Services",
          subdataList: [
            "BI Audit",
            "Data Visualization",
            "Data Governance",
            "Data Lake",
            "Master Data Management",
            "Analytics & Insight Competency Centre(CoE)",
            "Cloud & Mobile BI",
            "Big Data",
            "Text & Semantic Analytics",
          ],
        },
        {
          subdataName: "Web Application Services",
          subdataList: [
            "Full Stack Development",
            "Application & Support Maintainance",
            "Testing & Automation",
            "Integration & API Development",
          ],
        },
        {
          subdataName: "Research & Lab",
          subdataList: [
            "Blockchain",
            "Quantum Computing",
            "Products- ROGERS,FOSHAN",
          ],
        },
        {
          subdataName: "Smart Analytics",
          subdataList: [
            {
              subdatainnerName: "Commercial Analytics",
              subdatainnerList: [
                "Sales & Market Forecasting",
                "Business Intelligence",
                "Market Sizing & Opportunity Analysis",
                "Insights & Data Analytics",
                "Augmented Consulting Services",
                "Sales Force Effectiveness Analytics",
              ],
            },
            {
              subdatainnerName: "Sales & Distribution Analytics",
            },
            {
              subdatainnerName: "Healthcare Analytics Service",
              subdatainnerList: [
                "Lifecycle Management Forecasting",
                "Business Development & Licensing Forecast",
                "Market Sizing & Opportunity Forecast",
                "Insight & Data Analytics",
                "SFE & Omnichannel Analytics",
              ],
            },
            {
              subdatainnerName: "Supply Chain Management",
              subdatainnerList: [
                "Vendor",
                "Planning",
                "Buying",
                "Warehouse & Logistics",
                "Multichannel Operations",
                "Merchandizing",
                "Customers",
              ],
            },
          ],
        },
      ],
    },
    {
      linkname: "Design Studio",
      subdata: ["Application UI,UX", "Industrial Product Design"],
    },
    {
      linkname: "Technological Partners",
      subdata: ["Erwin", "Snowflake", "Looker", "UiPath", "Rapidminer"],
    },
    {
      linkname: "About Us",
      subdata: [
        "Core Values",
        "Our Story",
        "Leadership",
        "Life @vCreaTek",
        "AIC Incubator",
        "Gallery",
      ],
    },
    {
      linkname: "Careers",
    },
    {
      linkname: "Contact Us",
    },
  ];

  const [activeLink, setActiveLink] = useState(data[0]);

  let sectiondata1 = null;

  if (activeLink.subdata && typeof activeLink.subdata[0] === "object") {
    sectiondata1 = activeLink.subdata.map((item) => item.subdataName);
  }

  if (activeLink.subdata && typeof activeLink.subdata[0] === "string") {
    sectiondata1 = activeLink.subdata;
  }

  const [sectiondata2, setSectiondata2] = useState([]);
  const [sectiondata3, setSectiondata3] = useState([]);
  const [section2link, setSection2link] = useState("");

  const data3 = [
    {
      name: "Commercial Analytics",
      list: [
        "Sales & Market Forecasting",
        "Business Intelligence",
        "Market Sizing & Opportunity Analysis",
        "Insights & Data Analytics",
        "Augmented Consulting Services",
        "Sales Force Effectiveness Analytics",
      ],
    },
    {
      name: "Sales & Distribution Analytics",
      list: [],
    },
    {
      name: "Healthcare Analytics Service",
      list: [
        "Lifecycle Management Forecasting",
        "Business Development & Licensing Forecast",
        "Market Sizing & Opportunity Forecast",
        "Insight & Data Analytics",
        "SFE & Omnichannel Analytics",
      ],
    },
    {
      name: "Supply Chain Management",
      list: [
        "Vendor",
        "Planning",
        "Buying",
        "Warehouse & Logistics",
        "Multichannel Operations",
        "Merchandizing",
        "Customers",
      ],
    },
  ];

  const links = ["/data-cloud", "/webapp", "/research-lab"];
  const seclinks = {
    "About Us": "/about",
    "Technological Partners": "/technological-partners",
    "Design Studio": "/design-studio",
    "Home" : "/",
    "Careers" : "/careers",
    "Contact Us" : "/contact"
  };

  useEffect(() => {}, [activeLink]);

  return (
    <nav className="header">
      <div className="header-container">
        <div className="header-main-container">
          <div className="header-logo-container">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="header-links">
            {data.map((item, i) => {
              return item.subdata===undefined ? (
                <Link
                  to={seclinks[item.linkname]}
                  className="header-link"
                  key={`link${i}`}
                  onClick={(e) => {
                    const ele = document.querySelector(".header-info");
                    setActiveLink(data[i]);
                    ele.style.display = 'none';
                    window.scrollTo(0,0);
                  }}
                >
                  {item.linkname}
                  
                </Link>
              ) : (
                <p
                  className="header-link"
                  key={`link${i}`}
                  onMouseOver={(e) => {
                    e.preventDefault();
                    const ele = document.querySelector(".header-info");
                    setActiveLink(data[i]);
                    if (
                      e.target.textContent === activeLink.linkname &&
                      ele.style.display === "none"
                    )
                      ele.style.display = "flex";
                    
                    else if (
                      e.target.textContent !== activeLink.linkname &&
                      ele.style.display === "none"
                    )
                      ele.style.display = "flex";
                  }}
                >
                  {item.linkname}
                  {item.subdata !== undefined ? (
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
                  ) : null}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={`${
          (activeLink.linkname === "Home" ||
            activeLink.linkname === "Careers" ||
            activeLink.linkname === "Contact") &&
          "header-home"
        } header-info`}
      >
        <div
          className={`${
            activeLink.linkname === "Services" && "header-services-section1"
          } header-info-section1`}
        >
          {sectiondata1 &&
            sectiondata1.map((item, i) =>
              activeLink.linkname === "About Us" ||
              activeLink.linkname === "Technological Partners" ||
              activeLink.linkname === "Design Studio" ? (
                <Link
                  to={seclinks[activeLink.linkname]}
                  key={`section1.${i}`}
                  onClick={() => {
                    document.querySelector(".header-info").style.display =
                      "none";
                    setSectiondata2([]);
                    if (item !== "Smart Analytics") setSection2link(links[i]);
                    if (item !== "Smart Analytics") setSectiondata3([]);
                    window.scrollTo(0,0);
                  }}
                >
                  {item}
                  {activeLink.linkname === "Services" && (
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
                  )}
                </Link>
              ) : (
                <p
                  key={`section1.${i}`}
                  onMouseOver={() => {
                    setSectiondata2(
                      activeLink.subdata.find((str) => str.subdataName === item)
                        ?.subdataList
                    );
                    if (item !== "Smart Analytics") setSection2link(links[i]);
                    if (item !== "Smart Analytics") setSectiondata3([]);
                  }}
                >
                  {item}
                  {activeLink.linkname === "Services" && (
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
                  )}
                </p>
              )
            )}
        </div>
        {activeLink.linkname === "Services" && (
          <div className="header-info-section2">
            {sectiondata2 !== null && typeof sectiondata2[0] === "string"
              ? sectiondata2.map((item, i) => {
                  return (
                    <Link
                      to={`${section2link}`}
                      key={`section2.${i}`}
                      onClick={() => {
                        document.querySelector(".header-info").style.display =
                          "none";
                        setSectiondata2([]);
                        setSectiondata3([]);
                        window.scrollTo(0,0);
                      }}
                    >
                      {item}
                    </Link>
                  );
                })
              : sectiondata2.map((item, i) => (
                  <p
                    key={`section2.${i}`}
                    onMouseOver={() => {
                      setSectiondata3(data3[i].list);
                    }}
                  >
                    {item.subdatainnerName}
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
                ))}
          </div>
        )}
        {activeLink.linkname === "Services" && (
          <div className="header-info-section3">
            {sectiondata3.map((item, i) => (
              <Link
                to="/smart-analytics"
                key={`section3.${i}`}
                onClick={() => {
                  document.querySelector(".header-info").style.display = "none";
                  setSectiondata2([]);
                  setSectiondata3([]);
                  window.scrollTo(0,0);
                }}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
