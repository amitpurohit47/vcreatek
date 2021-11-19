import React, { useEffect } from "react";
import $ from "jquery";
import "./Careers.css";

const Careers = () => {
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
      className="careers-page"
      onMouseOver={() =>
        (document.querySelector(".header-info").style.display = "none")
      }
    >
      <h1>Careers</h1>
      <div className="careers-main">
        <div className="career">
          <h2>Position</h2>
          <p>Pune</p>
          <h5>Know More</h5>
        </div>
        <div className="career">
          <h2>Position</h2>
          <p>Pune</p>
          <h5>Know More</h5>
        </div>
        <div className="career">
          <h2>Position</h2>
          <p>Pune</p>
          <h5>Know More</h5>
        </div>
        <div className="career">
          <h2>Position</h2>
          <p>Pune</p>
          <h5>Know More</h5>
        </div>
        <div className="career">
          <h2>Position</h2>
          <p>Pune</p>
          <h5>Know More</h5>
        </div>
        <div className="career">
          <h2>Position</h2>
          <p>Pune</p>
          <h5>Know More</h5>
        </div>
        <div className="career">
          <h2>Position</h2>
          <p>Pune</p>
          <h5>Know More</h5>
        </div>
        <div className="career">
          <h2>Position</h2>
          <p>Pune</p>
          <h5>Know More</h5>
        </div>
      </div>
    </div>
  );
};

export default Careers;
