import React, { useEffect } from "react";
import aicmit from "../../Assets/Images/aicmit.jpeg";
import ImageGallery from "react-image-gallery";
import gallery1 from "../../Assets/Images/1.jpg";
import gallery2 from "../../Assets/Images/2.jpg";
import gallery3 from "../../Assets/Images/3.jpg";
import gallery4 from "../../Assets/Images/4.jpg";
import gallery5 from "../../Assets/Images/5.jpg";
import gallery7 from "../../Assets/Images/7.jpg";
import gallery8 from "../../Assets/Images/8.jpg";
import gallery9 from "../../Assets/Images/9.jpg";
import gallery10 from "../../Assets/Images/10.jpg";
import gallery12 from "../../Assets/Images/12.jpg";
import $ from "jquery";
import "./About.css";

const About = () => {
  const images = [
    {
      original: gallery1,
      thumbnail: gallery1,
    },
    {
      original: gallery2,
      thumbnail: gallery2,
    },
    {
      original: gallery3,
      thumbnail: gallery3,
    },
    {
      original: gallery4,
      thumbnail: gallery4,
    },
    {
      original: gallery5,
      thumbnail: gallery5,
    },
    {
      original: gallery7,
      thumbnail: gallery7,
    },
    {
      original: gallery8,
      thumbnail: gallery8,
    },
    {
      original: gallery9,
      thumbnail: gallery9,
    },
    {
      original: gallery10,
      thumbnail: gallery10,
    },
    {
      original: gallery12,
      thumbnail: gallery12,
    },
  ];

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
      className="aboutus-page"
      onMouseOver={() =>
        (document.querySelector(".header-info").style.display = "none")
      }
    >
      <h1 data-aos="flip-up">About vCreaTek</h1>
      <h2 data-aos="flip-up">Our Story</h2>
      <p className="our-story" data-aos="flip-up">
        It all started with an idea of providing Data consulting services with a
        team of five people, which today is a 150+ employees organization. After
        quitting L&T Infotech, and leaving behind his family business in
        Calcutta, Abhishek founded vCreaTek Consulting Services in 2014
      </p>
      <p className="our-story" data-aos="flip-up">
        There was nothing but an idea that was nurtured in a way that today
        vCreaTek Consulting Services provides Healthcare Analytics Services,
        Consulting Services, Tech & IT Services, and even Academic Mentorship
        Programs to its clientele that hold a huge share in their respective
        markets.
      </p>
      <h2 data-aos="flip-up">Leadership</h2>
      <div className="leadership">
        <div className="leadership1">
          <div className="leadership1-card">
            <div className="leadership1-img" data-aos="flip-up"></div>
            <div>
              <h3 data-aos="flip-up">Abhishek Rathi</h3>
              <p data-aos="flip-up">Founder & CEO</p>
            </div>
          </div>
          <div className="leadership1-card">
            <div className="leadership1-img" data-aos="flip-up"></div>
            <div>
              <h3 data-aos="flip-up">Abhishek Tawde</h3>
              <p data-aos="flip-up">Director, Operations & Admin</p>
            </div>
          </div>
          <div className="leadership1-card">
            <div className="leadership1-img" data-aos="flip-up"></div>
            <div>
              <h3 data-aos="flip-up">Irwing D’Souza</h3>
              <p data-aos="flip-up"> Director, Innovation & Emerging Technology</p>
            </div>
          </div>
          <div className="leadership1-card">
            <div className="leadership1-img" data-aos="flip-up"></div>
            <div>
              <h3 data-aos="flip-up">Rakesh Tibude</h3>
              <p data-aos="flip-up"> Director, Service Engineering & Delivery</p>
            </div>
          </div>
        </div>
        <div className="leadership2">
          <div className="leadership2-card">
            <div className="leadership2-card-left">
              <div data-aos="flip-up"></div>
              <h3 data-aos="flip-up">Harish Gowtham</h3>
              <p data-aos="flip-up">Director, Technical Operations & Training</p>
            </div>
            <div className="leadership2-card-right">
              <p data-aos="flip-up">
                Harish Gowtham M is Director of Technical Operations, vCreaTek.
                Harish, who is the first recruit of the company in 2014, has
                provided data analytics services around domains like
                Pharmaceutical, Home warranty, Metal Trading Industry and
                Retail. He became director of the company in the year 2017.
              </p>
              <p data-aos="flip-up">
                He played a key role in digital transformation of Belchina LLC,
                Dubai during 2014 – 2015, which helped him gain knowledge of
                various aspects to run a company. From 2016-2021, he has been
                indulged in various domains BI project deliverables. He is well
                known for his problem-solving abilities, understanding of
                business-to-data relationship and for his BI technical skills
              </p>
              <p data-aos="flip-up">
                Prior to joining vCreaTek he worked for LTI and Accion labs.
                Harish received a bachelor’s degree in mechanical engineering
                from the Anna University of Tirunelveli. He is from Tamil Nadu
                and can speak Tamil, English and Hindi.
              </p>
            </div>
          </div>
          <div className="leadership2-card">
            <div className="leadership2-card-left">
              <div data-aos="flip-up"></div>
              <h3 data-aos="flip-up">Namita Chimulkar</h3>
              <p data-aos="flip-up">Associate Director, Customer Success Partner</p>
            </div>
            <div className="leadership2-card-right">
              <p data-aos="flip-up">
                Namita Chimulkar is the Associate Director, Customer Success
                Partner at vCreaTek. An effective communicator with strong
                analytical, problem-solving & organizational abilities, Namita
                likes to contribute to the exciting technological advances
                within the organization.
              </p>
              <p data-aos="flip-up">
                With a decade of experience in Business Analysis, Project
                management, Namita acquired skillset like SQL, Agile frameworks,
                UML, requirement elicitation, interpreting & analyzing data,
                Data warehousing, Data modelling & Data Visualization. She is
                currently looking after the technological stack including Looker
                & Snowflake.
              </p>
              <p data-aos="flip-up">
                Namita did her Engineering from RIT -Goa university with a
                Bachelor of Engineering in Electronics & Telecommunication. You
                can find the curious soul wandering places, travelling, reading,
                listening to her favorite playlists, cooking as well as watching
                sports
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 data-aos="flip-up">Life @vCreaTek</h2>
      <div className="life-vcreatek">
        <p data-aos="flip-up">
          Yes, we develop technology. But you can also find us doing yoga,
          meditation, mandala art, working on new ideas, learning new skills and
          a lot more at our workplace, during our work hours. vCreaTek strongly
          believes in empowering its employees through helping them acquire
          knowledge and upskill themselves in order to stay relevant in the
          highly competitive and rapidly evolving market
        </p>
        <p style={{ fontWeight: "700" }} data-aos="flip-up">
          “Our Employees are our Brand Ambassadors”
        </p>
        <p data-aos="flip-up">
          “We Create Technology” for our customers and “We Create Memories” for
          our brand ambassadors.
        </p>
        <p data-aos="flip-up">
          <span style={{ fontWeight: "700" }}>- Leadership Meet –</span> A one
          day event at Lonavala on 3rd September 2021. An interactive meet where
          Directors and TLs from all the teams had insightful discussions on
          teams, projects, and the overall picture of the organisation.
        </p>
        <p data-aos="flip-up">
          <span style={{ fontWeight: "700" }}>- Family Day Event –</span> A one
          day event at Lonavala on 3rd September 2021. An interactive meet where
          Directors and TLs from all the teams had insightful discussions on
          teams, projects, and the overall picture of the organisation.
        </p>
        <p data-aos="flip-up">
          <span style={{ fontWeight: "700" }}>- Superfit @4 –</span> The casual
          connect between all the employees over Zoom on 23rd July 2021
          celebrated success of different teams along with fun games.
        </p>
        <p data-aos="flip-up">
          <span style={{ fontWeight: "700" }}>- Back to Work Campaign –</span>
          An attempt to celebrate women workforce at vCreaTek, the campaign is
          all about the value that our army of super-efficient female employees
          being in along with managing end number of things at home.
        </p>
        <p data-aos="flip-up">
          <span style={{ fontWeight: "700" }}>- Newsletters –</span> Keep
          yourself updated with our monthly newsletter.
        </p>
        <p data-aos="flip-up">
          <span style={{ fontWeight: "700" }}>
            - CSR - Oxygen Concentrators Donation (2021) –
          </span>{" "}
          During the unprecedented times of COVID, as part of our Corporate
          Social Responsibility, vCreaTek donated Oxygen Concentrators in Pune.
        </p>
      </div>
      <h2 data-aos="flip-up">AIC MIT Incubation</h2>
      <div className="aic-mit">
        <div className="aic-mit-left">
          <p data-aos="flip-up">
            VCREATEK CONSULTING SERVICES PRIVATE LIMITED is an Incubatee at
            AIC-MIT ADT Incubator Forum since 27 July 2019. The Incubatee having
            been engaged in Data Analytics & Information Management Services for
            last 4 years and are currently developing an integrated physical
            commodity trading’s platform for the SME traders to use trusted
            marketplace, documentation and financial services features to
            connect globally and bring in better margin to their business, has
            approached incubator for an admission at incubator.
          </p>
          <p data-aos="flip-up">
            Mr. Abhishek Rathi, Founder & CEO vCreaTek Consulting Services Pvt
            Ltd. has been engaged with other AIC-MIT ADT Incubator Forum
            activities apart from his own incubation journey as a start-up. He
            has been an integral part as a mentor for business advisory to other
            incubated start-ups based on his domain expertise. He also has been
            actively participating and mentoring sessions related to ATL (Atal
            Tinkering Lab) activities as a super mentor conducted since his
            incubation.
          </p>
        </div>
        <div className="aic-mit-right">
          <img src={aicmit} alt="aicmit" data-aos="zoom-in" />
        </div>
      </div>
      <h2 data-aos="flip-up">Gallery</h2>

      <div className="gallery">
        <ImageGallery items={images} />
      </div>
    </div>
  );
};

export default About;
