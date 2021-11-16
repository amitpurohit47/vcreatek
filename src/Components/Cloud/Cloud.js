import React, { useState } from "react";
import cloud from "../../Assets/Images/cloud.jpg";
import wave1 from "../../Assets/Images/wave1.svg";
import "./Cloud.css";

const Cloud = () => {
  const serviceInfo = [
    {
      name: "BI Audit",
      info: "We offer full-range QA and testing outsourcing services, can help to develop your QA or enhance the existing one, assist you in TCoE setup and evolution. We perform end-to-end testing of mobile, web and desktop application at each stage of the development lifecycle.",
      bullets: ["aaaaaaa", "bbbbbbbb", "cccccccc", "dddddddddd", "eeeeeeeee"],
    },
    {
      name: "Data Visualization",
      info: "The development of reliable and scalable software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.",
      bullets: ["aaaaaaa", "bbbbbbbb", "cccccccc", "dddddddddd", "eeeeeeeee"],
    },
    {
      name: "Data Governance",
      info: "The full set of services around development and maintenance of complex business-critical applications. Our experts build, test, deploy, protect, manage, migrate and optimize enterprise-scale digital solutions ensuring they’re always up and running and achieve the optimal TCO.",
      bullets: ["aaaaaaa", "bbbbbbbb", "cccccccc", "dddddddddd", "eeeeeeeee"],
    },
    {
      name: "Data Lake",
      info: "User experience and user interface design for all types of websites, SaaS, and web/mobile apps. We combine the latest UI/UX trends with our customers’ individual goals and needs to deliver intuitive, vibrant, and impactful designs that power up businesses.",
      bullets: ["aaaaaaa", "bbbbbbbb", "cccccccc", "dddddddddd", "eeeeeeeee"],
    },
    {
      name: "Master Data Management",
      info: "The full set of services around development and maintenance of complex business-critical applications. Our experts build, test, deploy, protect, manage, migrate and optimize enterprise-scale digital solutions ensuring they’re always up and running and achieve the optimal TCO.",
      bullets: ["aaaaaaa", "bbbbbbbb", "cccccccc", "dddddddddd", "eeeeeeeee"],
    },
    {
      name: "Analytics & Insight Competency Centre(CoE)",
      info: "Our experts can help to develop and implement an effective IT strategy, assist in smooth digital transformation and system integration as well as advise on improvements to your digital customer experience.",
      bullets: ["aaaaaaa", "bbbbbbbb", "cccccccc", "dddddddddd", "eeeeeeeee"],
    },
    {
      name: "Cloud & Mobile BI",
      info: "We support businesses in achieving fact-based decision-making by converting their historical and real-time, traditional and big data into actionable insights. Our services are tailored to make the raw data and the environment ready, as well as strengthen the business with advanced analytics capabilities.",
      bullets: ["aaaaaaa", "bbbbbbbb", "cccccccc", "dddddddddd", "eeeeeeeee"],
    },
    {
      name: "Big Data",
      info: "Help desk services for your IT environment or software products. We take on solving diverse issues from answering application functionality questions to performing fixes and enhancements on the code level for improved adoption of software, its smooth functioning and increased end user satisfaction.",
      bullets: ["aaaaaaa", "bbbbbbbb", "cccccccc", "dddddddddd", "eeeeeeeee"],
    },
    {
      name: "Text & Semantic Analytics",
      info: "We apply our 10-year experience to offer a full set of infrastructure services. Being ISO 2700 certified allows us to guarantee that we access our customers' without creating any security risks or vulnerabilities.",
      bullets: ["aaaaaaa", "bbbbbbbb", "cccccccc", "dddddddddd", "eeeeeeeee"],
    },
  ];

  const items = serviceInfo.map((service) => (
    <div className="services-right">
      <h1>{service.name}</h1>
      <p>{service.info}</p>
      <div className="service-bullets">
        {service.bullets.map((bullet, i) => (
          <p key={`bullet${i}`}>{bullet}</p>
        ))}
      </div>
    </div>
  ));

  const [currService, setCurrService] = useState(serviceInfo[0]);

  return (
    <div
      className="data-cloud-page"
      onClick={() =>
        (document.querySelector(".header-info").style.display =
          "none")
      }
    >
      <div className="data-cloud-page1">
        <div className="data-cloud-left">
          <img src={cloud} alt="data-cloud" />
          <img src={wave1} className="wave1" alt="wave1" />
        </div>
        <div className="data-cloud-right">
            <h1>Data & Cloud Services</h1>
        </div>
      </div>
      <div className="services-main">
        <div className="services-left">
          {serviceInfo.map((service, i) => (
            <p
              onClick={() => setCurrService(serviceInfo[i])}
              className={
                currService.name === service.name ? "service-active" : ""
              }
              key={`servicelist${i}`}
            >
              {service.name}
            </p>
          ))}
        </div>
        <div className="services-right">
          <h1>{currService.name}</h1>
          <p>{currService.info}</p>
          <div className="service-bullets">
            {currService.bullets.map((bullet, i) => (
              <p key={`bullet${i}`}>{bullet}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="services-carousel">{items}</div>
    </div>
  );
};

export default Cloud;
