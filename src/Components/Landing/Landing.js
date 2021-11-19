import React, { useEffect } from "react";
import $ from "jquery";
import landing from "../../Assets/Images/undraw_data_points_re_vkpq.svg";
import homeicon1 from "../../Assets/Images/home2_icon1.png";
import homeicon2 from "../../Assets/Images/home2_icon2.png";
import homeicon3 from "../../Assets/Images/home2_icon3.png";
import homeicon4 from "../../Assets/Images/home2_icon4.png";
import zigzag from "../../Assets/Images/zigzag.jpeg";
import landing1 from "../../Assets/Images/landing1.jpeg";
import quote from "../../Assets/Images/quote.png";
import testimonial from "../../Assets/Images/testimonial.svg";
import whychooseus from "../../Assets/Images/whychooseus.jpeg";
import contactus1 from "../../Assets/Images/contactus1.jpg";
import contactus2 from "../../Assets/Images/contactus2.jpg";
import contactus3 from "../../Assets/Images/contactus3.jpg";
import contactus4 from "../../Assets/Images/contactus4.jpg";
import contactus5 from "../../Assets/Images/contactus5.jpg";
import contactus6 from "../../Assets/Images/contactus6.jpg";
import { Swiper } from "swiper/react/swiper";
import { SwiperSlide } from "swiper/react/swiper-slide";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "./Landing.css";

SwiperCore.use([EffectCoverflow, Pagination]);

const Landing = () => {
  

  const handleClick = () => {
    document.querySelector(".header-info").style.display = "none";
  };

  

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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="landing-page" onMouseOver={handleClick}>
      <div className="landing-main">
        <h1>We are VCreaTek</h1>
        <img src={landing} alt="landing" />
      </div>
      <div className="why-choose-us">
        <h4>WHY CHOOSE US</h4>
        <h1>A Business Consulting Company That Can Produce Anything.</h1>
        <div className="landing-cards">
          <div className="landing-card">
            <div className="card-img-container">
              <img src={homeicon1} alt="homeicon" />
            </div>
            <h3>Finance Analytics</h3>
            <img src={zigzag} alt="zigzag" />
            <p>Up-to-the-minute reporting of key financial transactions</p>
          </div>
          <div className="landing-card">
            <div className="card-img-container">
              <img src={homeicon2} alt="homeicon" />
            </div>
            <h3>Marketing Analytics</h3>
            <img src={zigzag} alt="zigzag" />
            <p>Smart blend of Technology and Market Research</p>
          </div>
          <div className="landing-card">
            <div className="card-img-container">
              <img src={homeicon3} alt="homeicon" />
            </div>
            <h3>Sales Analytics</h3>
            <img src={zigzag} alt="zigzag" />
            <p>Increase Forecasting Accuracy and Sales Results</p>
          </div>
          <div className="landing-card">
            <div className="card-img-container">
              <img src={homeicon4} alt="homeicon" />
            </div>
            <h3>Supply Chain Analytics</h3>
            <img src={zigzag} alt="zigzag" />
            <p>
              Customized for business and the specific KPI’s driving the
              organization
            </p>
          </div>
        </div>
      </div>
      <div className="core-values">
        <h4>Core Values</h4>
        <h1>Over 6 Years of Experience</h1>
        <p>
          Our organization is based on the five value principles. Infact, the v
          (roman five) in our company s name vCreaTek', represents those 'Five
          Values which forms the core pillars of our thought process. These
          values are guiding star in our journey as we build actionable insight
          for the customers.
        </p>
      </div>
      <div className="values-carousel">
        <input type="radio" name="item" id="section1" defaultChecked />
        <input type="radio" name="item" id="section2" />
        <input type="radio" name="item" id="section3" />
        <input type="radio" name="item" id="section4" />
        <nav className="nav">
          <label className="value-item" htmlFor="section1"></label>
          <label className="value-item" htmlFor="section2"></label>
          <label className="value-item" htmlFor="section3"></label>
          <label className="value-item" htmlFor="section4"></label>
        </nav>
        <section>
          <h1>One Page</h1>
        </section>
        <section>
          <h1>Pure CSS</h1>
        </section>
        <section>
          <h1>Full Screen</h1>
        </section>
        <section>
          <h1>@Ver_Qn</h1>
        </section>
        <div className="cover"></div>
      </div>
      <div className="landing-counters">
        <h4>
          ‘We’ work as one single team hand in hand with our customers by having
          high degree of accountability, collaboration and agility
        </h4>
        <div className="counters-inner">
          <img src={landing1} alt="landing1" />
          <div className="counters-main">
            <div className="counter">
              <p className="counter-number">100</p>
              <h5>TEAM SIZE</h5>
            </div>
            <div className="counter">
              <p className="counter-number">7</p>
              <h5>COUNTRIES SERVED</h5>
            </div>
            <div className="counter">
              <p className="counter-number">10</p>
              <h5>DELIGHTED CUSTOMERS</h5>
            </div>
            <div className="counter">
              <p className="counter-number">20</p>
              <h5>PROJECTS DELIVERED</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="clients">
        <h1>Our Clients</h1>
        <div className="clients-main">
          <div className="client"></div>
          <div className="client"></div>
          <div className="client"></div>
          <div className="client"></div>
          <div className="client"></div>
          <div className="client"></div>
        </div>
      </div>
      <div className="testimonials">
        <h3>TESTIMONIALS</h3>
        <h1>This Is Why We Do What We Do</h1>
        <img src={testimonial} alt="testimonial" />
        <div className="testimonial-swiper">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={quote} alt="quote" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci rerum dolor totam nobis accusantium omnis iste
                molestias! Vel obcaecati animi nihil laboriosam similique
                voluptatem, laudantium id a ipsam cupiditate ad?
              </p>
              <div className="swiperslide-footer">
                <img src={homeicon1} alt="testimonial" />
                <div className="testimonial-info">
                  <h3>Name</h3>
                  <h4>Designation</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={quote} alt="quote" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci rerum dolor totam nobis accusantium omnis iste
                molestias! Vel obcaecati animi nihil laboriosam similique
                voluptatem, laudantium id a ipsam cupiditate ad?
              </p>
              <div className="swiperslide-footer">
                <img src={homeicon1} alt="testimonial" />
                <div className="testimonial-info">
                  <h3>Name</h3>
                  <h4>Designation</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={quote} alt="quote" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci rerum dolor totam nobis accusantium omnis iste
                molestias! Vel obcaecati animi nihil laboriosam similique
                voluptatem, laudantium id a ipsam cupiditate ad?
              </p>
              <div className="swiperslide-footer">
                <img src={homeicon1} alt="testimonial" />
                <div className="testimonial-info">
                  <h3>Name</h3>
                  <h4>Designation</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={quote} alt="quote" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci rerum dolor totam nobis accusantium omnis iste
                molestias! Vel obcaecati animi nihil laboriosam similique
                voluptatem, laudantium id a ipsam cupiditate ad?
              </p>
              <div className="swiperslide-footer">
                <img src={homeicon1} alt="testimonial" />
                <div className="testimonial-info">
                  <h3>Name</h3>
                  <h4>Designation</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={quote} alt="quote" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci rerum dolor totam nobis accusantium omnis iste
                molestias! Vel obcaecati animi nihil laboriosam similique
                voluptatem, laudantium id a ipsam cupiditate ad?
              </p>
              <div className="swiperslide-footer">
                <img src={homeicon1} alt="testimonial" />
                <div className="testimonial-info">
                  <h3>Name</h3>
                  <h4>Designation</h4>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="why-choose-us2">
        <img src={whychooseus} alt="whychooseus" />
        <div className="why-choose-us2-inner">
          <h4>WHY CHOOSE US</h4>
          <h1>Drive More Customers Through Data Analytics</h1>
          <p>
            We combine the best of human and artificial intelligence to power
            possibilities for individuals, organisations and society
          </p>
          <button>Read More</button>
        </div>
      </div>
      <div className="more-info">
        <div className="more-info-left">
          <h1>Looking for Best Analytics & Automation Services ?</h1>
          <p>
            We have 40+ experts in Advance Technology which will change the way
            you work. Request for a call today.
          </p>
          <button>Get In Touch</button>
        </div>
        <div className="more-info-right">
          <img src={contactus1} alt="contactus" />
          <img src={contactus3} alt="contactus" />
          <img src={contactus2} alt="contactus" />
          <img src={contactus6} alt="contactus" />
          <img src={contactus4} alt="contactus" />
          <img src={contactus5} alt="contactus" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
