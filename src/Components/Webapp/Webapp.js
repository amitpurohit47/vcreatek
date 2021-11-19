import React, { useEffect } from "react";
import webapp from "../../Assets/Images/webapp.png";
import wave2 from "../../Assets/Images/wave2.svg";
import stack from "../../Assets/Images/stack.png";
import maintenance from "../../Assets/Images/maintenance.png";
import agile from "../../Assets/Images/agile.png";
import api from "../../Assets/Images/api.png";
import $ from "jquery";
import "./Webapp.css";

const Webapp = () => {
  useEffect(() => {
    let viewed = false;
    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height() + 400;

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return elemBottom <= docViewBottom && elemTop >= docViewTop;
    }

    const handleScroll = () => {
      if (isScrolledIntoView($(".counters-inner")) && !viewed) {
        viewed = true;
        $(".counter-number").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text(),
              },
              {
                duration: 2000,
                easing: "swing",
                step: function (now) {
                  $(this).text(Math.ceil(now));
                },
              }
            );
        });
      }
    };
    window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      className="web-app-page"
      onMouseOver={() =>
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
          <div className="card-inner">
            <div className="front">
              <h1>Full Stack Development</h1>
              <img src={stack} alt="card" />
            </div>
            <div className="back">
              <p>
                We provide Full Stack Development Services on various
                technologies including Angular, React, Dot Net, Python, and Java
              </p>
            </div>
          </div>
        </div>
        <div className="web-app2-card">
          <div className="card-inner">
            <div className="front">
              <h1>Application Support & Maintenance</h1>
              <img src={maintenance} alt="card" />
            </div>
            <div className="back">
              <p>
                We provide Application Support & Maintenance Services on various
                technologies including Angular, React, Dot Net, Python, and Java
              </p>
            </div>
          </div>
        </div>
        <div className="web-app2-card">
          <div className="card-inner">
            <div className="front">
              <h1>Testing & Automation</h1>
              <img src={agile} alt="card" />
            </div>
            <div className="back">
              <p>
                Simplify your business with our Testing and Automation Services.
                We provide Testing & Automation Services using Selenium.
              </p>
            </div>
          </div>
        </div>
        <div className="web-app2-card">
          <div className="card-inner">
            <div className="front">
              <h1>Integration & API Development</h1>
              <img src={api} alt="card" />
            </div>
            <div className="back">
              <p>
                Our team of expert API Developers uses latest technologies
                including Angular, React, Dot Net, Python, Note JS, Dot Net API,
                and Java.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webapp;
