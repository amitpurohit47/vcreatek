import React from "react";
import erwin from "../../Assets/Images/erwin.png";
import snowflake from "../../Assets/Images/snowflake.png";
import rapidminder from "../../Assets/Images/rapidminder.png";
import looker from "../../Assets/Images/looker.png";
import nasscom from "../../Assets/Images/nasscom.jpg";
import "./Techpartners.css";

const Techpartners = () => {
  return (
    <div
      className="techpartners-page"
      onMouseOver={() =>
        (document.querySelector(".header-info").style.display = "none")
      }
    >
      <h1>Our Technological Partners</h1>
      <div className="techpartners-main">
        <img src={snowflake} alt="techpartner" />
        <img src={looker} alt="techpartner" />
        <img src={rapidminder} alt="techpartner" />
        <img src={nasscom} alt="techpartner" />
        <img src={erwin}style={{width:'250px'}} alt="techpartner" />
      </div>
    </div>
  );
};

export default Techpartners;
