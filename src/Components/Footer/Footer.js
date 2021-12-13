import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/vcreateklogo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      className="footer"
      onMouseOver={() =>
        (document.querySelector(".header-info").style.display = "none")
      }
    >
      <div className="footer1">
        <div className="footer1-inner">
          <h3>India</h3>
          <h4>VCREATEK CONSULTING SERVICES PVT LTD</h4>
          <p>C-9 Hermes Drome. Viman Nagar,</p>
          <p>Pune 411014,</p>
          <p>Maharashtra</p>
          <p>(+91) 848-40 4-4824</p>
        </div>
        <div className="footer1-inner">
          <h3>USA</h3>
          <h4>VCREATEK CONSULTING LLC</h4>
          <p>27718 Rocky Creek Ct,</p>
          <p>Fulshear TX 77441</p>
          <p>+1 (904) 310-4824</p>
        </div>
        <div className="footer1-inner">
          <h3>Belgium</h3>
          <h4>SALES OFFICE</h4>
          <p>Schrieksebaan 280,</p>
          <p>3140 Keerbergen.</p>
          <p>(+32) 486 728 885</p>
        </div>
        <div className="footer1-inner">
          <h3>UK</h3>
          <h4>SALES OFFICE</h4>
          <p>234, Century Warf, Chantlery, Cardiff</p>
          <p>CF10 5NQ.</p>
          <p>(+44) 7383 161767</p>
        </div>
      </div>
      <div className="footer2">
        <div className="footer2-sec1">
          <img src={logo} alt="logo" />
          <button>Book Appointment</button>
        </div>
        <div className="footer2-sec2">
          <h4>Business inquiries</h4>
          <p>
            Sales : <a href="mailto:sales@vcreatek.com">sales@vcreatek.com</a>
          </p>
          <p>
            General info :{" "}
            <a href="mailto:info@vcreatek.com">info@vcreatek.com</a>
          </p>
          <p>
            Careers :{" "}
            <a href="mailto:careers@vcreatek.com">careers@vcreatek.com</a>
          </p>
        </div>
        <div className="footer2-sec3">
          <h4>Services</h4>
          <Link onClick={() => window.scrollTo(0,0)} to="/webapp">Web Development</Link>
          <Link onClick={() => window.scrollTo(0,0)} to="/data-cloud">Cloud Services</Link>
          <Link onClick={() => window.scrollTo(0,0)} to="/smart-analytics">Smart Analytics</Link>
          <Link onClick={() => window.scrollTo(0,0)} to="/research-lab">Research & Lab</Link>
          <Link onClick={() => window.scrollTo(0,0)} to="/design-studio">Design Studio</Link>
        </div>
        <div className="footer2-sec4">
          <h4>About Us</h4>
          <Link onClick={() => window.scrollTo(0,0)} to="/about">Our Story</Link>
          <Link onClick={() => window.scrollTo(0,0)} to="/about">Leadership</Link>
          <Link onClick={() => window.scrollTo(0,0)} to="/about">Life@vCreakTek</Link>
          <Link onClick={() => window.scrollTo(0,0)} to="/about">AIC Incubator</Link>
          <Link onClick={() => window.scrollTo(0,0)} to="/about">Gallery</Link>
        </div>
        <div className="footer2-sec5">
          <h4>Contact Us</h4>
          <Link onClick={() => window.scrollTo(0,0)} to="/careers">Careers</Link>
          <Link onClick={() => window.scrollTo(0,0)} to="/contact">Business Opportunities</Link>
        </div>
      </div>
      <p className="copyright">
        Copyright 2022 by vCreaTek LLC All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
