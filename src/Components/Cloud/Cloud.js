import React from "react";
import cloud from "../../Assets/Images/cloud.jpg";
import wave1 from "../../Assets/Images/wave1.svg";
import smart from "../../Assets/Images/smart-data.png";
import "./Cloud.css";

const Cloud = () => {

  

  const serviceInfo = [
    {
      name: "BI Audit",
      info: "Our BI Audit technologies can help you find the problematic aspects of your business. With BI Audit reports, you can analyze data to find actionable insights which will help your business achieve newer dimensions.",
    },
    {
      name: "Data Visualization",
      info: "With the help of our latest data visualization technologies, not only will you get a clearer picture of figures but, it will also simplify the process of analyzing and interpreting complex reports that are an essential part for any business’s growth.",
    },
    {
      name: "Data Governance",
      info: "Our data governance services can help you manage, safeguard, document, and audit your data. The collection of processes, roles, policies, standards, and metrics, Data Governance ensure an effective and efficient use of information in enabling your organization to achieve its goals.",
    },
    {
      name: "Data Lake",
      info: "The Data Lake service at vCreaTek helps you keep the data safe and sorted. Our central repository of data, and data lake systems are capable of including structured data (rows and columns), semi-structured data (CSV, logs, XML, JSON), unstructured data (emails, documents, PDFs) as well as binary data (images, audio, video) for the convenience of our customers.",
    },
    {
      name: "Master Data Management",
      info: "With the help of our Master Data Management technologies, you can maintain uniformity, accuracy, consistency, and accountability for your master data. Businesses work in collaboration with the information technology to manage the master data.",
    },
    {
      name: "Analytics & Insight Competency Centre(CoE)",
      info: "Our Analytics and Data Competency tools can help you with any aspect of data analytics. From creating business intelligence solutions to demonstrate technical capabilities, at vCreaTek, you can find a solution for all your data related requirements",
    },
    {
      name: "Cloud & Mobile BI",
      info: "Cloud services means services that are mobile friendly. Our Cloud & Mobile BI services understand the amplifying need of cloud applications and hence we are committed to provide you the latest technologies that gives you deeper business insights that too, on your mobile screens.",
    },
    {
      name: "Big Data",
      info: "With our latest set of technologies, you can stop worrying about the voluminous data coming in. Our high-end systems are capable of providing simplified ways for data management",
    },
    {
      name: "Text & Semantic Analytics",
      info: " vCreaTek’s smart Text & Semantic Analysis helps your business solve crucial problems. With the help of most modern technologies, we are committed to provide you the best solutions for any kind of unstructured, raw text.",
    },
  ];

  // const items = serviceInfo.map((service) => (
  //   <div className="services-right">
  //     <h1>{service.name}</h1>
  //     <p>{service.info}</p>
  //   </div>
  // ));

  // const [currService, setCurrService] = useState(serviceInfo[0]);

  return (
    <div
      className="data-cloud-page"
      onMouseOver={() =>
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
      <div className="cloud-services">
        {serviceInfo.map((info,i) =>
         <div className="cloud-service" key={`cloud-service${i}`}>
           <div className="cloud-service-info">
             <img src={smart} alt="cloud-service" />
            <h3><p>{info.info}</p></h3>
           </div>
           <h1>{info.name}</h1>
         </div>)}
      </div>
      {/* <div className="services-main">
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
        </div>
      </div>
      <div className="services-carousel">{items}</div> */}
    </div>
  );
};

export default Cloud;
