import React from "react";
import marketing from "../../Assets/Images/marketing.jpg";
import "./Marketing.css";

const Marketing = () => {
  return (
    <div
      className="marketing"
      onMouseOver={() =>
        (document.querySelector(".header-info").style.display = "none")
      }
    >
      <h1>Marketing Analytics</h1>
      <p>
        <strong>vCreaTek’s Marketing Analytics</strong> offers a smart blend of
        Technology and Market Research, which are aligned towards meeting the
        unique needs of the industry.Marketing has always been about data, but
        the data available today has skyrocketed. It continues to arrive at warp
        speed with ever increasing granularity. From first party to third party
        data, the data available today is a treasure trove of golden info on
        markets, segments and even individual consumers.
      </p>
      <p>
        Thanks to technology, customers interact with brands in ways that were
        not even imagined just a few short years ago. One-directional
        advertising though static media channels guided customer relationships.
        Interactions today are complex and multi-directional. The customer has a
        voice in establishing the relationship- and will also use that voice to
        communicate to others through mobile and social media channels.
      </p>
      <p>
        The bottom line is all about engaging the customer. The customer
        relationship has become the greatest company asset. Stronger customer
        relationships are forged through thoughtful use of marketing analytics.
        In this age of the customer, empowered buyers erase traditional
        competitive advantages. You want to take action on deep customer
        knowledge before your competitor does while avoiding the shiny
        temptation of marketing only to things, such as channels, devices and
        technology.
      </p>
      <div className="marketing-main">
        <div className="marketing-left">
          <h3>Key Functionality</h3>
          <p>
            Marketing Analytics solution is delivered with out-of the-box
            conformed dimensions and features the following analytical
            capability:
          </p>
          <ul>
            <li>
              Develops strategic vision for and leads a best-in-class marketing
              analytics and business intelligence function that successfully
              drives strategic growth.
            </li>
            <li>
              Make use of innovative, integrated technology to engage customers
              in a more personalized way.
            </li>
            <li>
              Use marketing analytics to create the foundation for more
              successful campaigns and timely decisions.
            </li>
            <li>Highly effective infrastructure.</li>
            <li>Extensive library of content.</li>
            <li>Comprehensive measurement system.</li>
          </ul>
        </div>
        <div className="marketing-right">
          <img src={marketing} alt="marketing" />
        </div>
      </div>
    </div>
  );
};

export default Marketing;
