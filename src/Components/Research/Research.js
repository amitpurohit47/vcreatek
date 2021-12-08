import React from "react";
import wave3 from "../../Assets/Images/wave3.svg";
import lab from "../../Assets/Images/lab.jpg";
import lab1 from "../../Assets/Images/lab1.jpg";
import lab2 from "../../Assets/Images/lab2.jpg";
import "./Research.css";

const Research = () => {
  

  return (
    <div
      className="researchlab-page"
      onMouseOver={() =>
        (document.querySelector(".header-info").style.display = "none")
      }
    >
      <div className="researchlab1">
        <div className="researchlab1-left">
          <h1>Research & Lab</h1>
        </div>
        <div className="researchlab1-right">
          <img src={wave3} className="wave3" alt="wave3" />
          <img src={lab} alt="lab" />
        </div>
      </div>
      <div className="researchlab2">
        <div className="researchlab2-left">
          <img src={lab1} alt="lab" />
        </div>
        <div className="researchlab2-right">
          <h1 data-aos="flip-up">Blockchain</h1>
          <p data-aos="flip-up">
            Blockchain - Blockchain is a distributed ledger technology that
            enables a set of peers to work together to create a unified,
            decentralized network. The peers can communicate and share
            information or data with the help of the consensus algorithm. Also,
            there is no need for a centralized authority, which makes the whole
            network trustworthy when compared to other networks.
          </p>
          <p data-aos="flip-up">With our Blockchain technology, you can –</p>
          <p data-aos="flip-up">
            Trust that your data is safe, and no invaders have access to it.
          </p>
          <p data-aos="flip-up">Have a decentralized structure</p>
          <p data-aos="flip-up">Get a cost-effective solution.</p>
          <p data-aos="flip-up">Make transactions faster</p>
          <p data-aos="flip-up">Get improved usability that lets you track and access data. </p>
          <img src={wave3} className="wave3" alt="wave3" />
        </div>
      </div>
      <h1 data-aos="flip-up">Quantum Computing</h1>
      <div className="researchlab3">
        <div className="researchlab3-left">
          <p data-aos="flip-up">
            1. This decade has been deemed, “The Quantum Decade- the decade when
            enterprises begin to see business value from quantum computing” by
            IBM.
          </p>
          <p data-aos="flip-up">
            2. Quantum Computing is expected to be exponentially faster by
            design due to the Quantum Mechanical principles of Entanglement and
            Interference.
          </p>
          <p data-aos="flip-up">
            3. Quantum Annealing based Quantum Computing has already been
            utilized by firms, like Toyota, to solve optimization problems at
            ultra-high speeds.
          </p>
          <p data-aos="flip-up">
            4. There has been a paradigm shift in academia where research papers
            in Quantum Information Sciences now actually consider commercial
            applications of Quantum Computing, rather than theoretical toy
            models.
          </p>
          <p data-aos="flip-up">
            5. There are plenty of open-source resources to learn how one can
            write programs that will run on Quantum Computers- some notable SDKs
            are Qiskit, Q#, Cirq.
          </p>
          <p data-aos="flip-up">
            6. The entry requirements for Quantum Computing using any of these
            SDKs are fairly moderate and only require a solid grounding in High
            School Mathematics and Physics, Linear Algebra, Basic Complex
            Analysis, and intermediate level programming skills.
          </p>
          <p data-aos="flip-up">
            7. As an interdisciplinary area, Quantum Computing has tremendous
            potential to bridge the gap across disciplines like Mathematics,
            Physics and Computer Sciences. The commercialization of a quantum
            use case will lie on the intersection of optimization, simulation
            and machine learning.
          </p>
          <p data-aos="flip-up">
            8. The workforce of tomorrow needs to be prepared for the advent of
            Quantum Computing. Quantum-Computing-as-a-service (QCaaS) is
            expected to be a $ 30 Billion enterprise by 2030.
          </p>
          <p data-aos="flip-up">
            9. vCreaTek has a continuously expanding workforce of graduates from
            top Science Institutions of India (IIT-M, IISER-K, NISER) to upskill
            and align itself with the Quantum Decade at an enterprise level, and
            lead the commercialization of Quantum Computing in India
          </p>
        </div>
        <div className="researchlab3-right" data-aos="zoom-in">
          <img src={lab2} alt="lab2" />
        </div>
      </div>
      <div className="researchlab4">
        <h1 data-aos="flip-up">Products – ROGERS, FOSHAN</h1>
        <h4 data-aos="flip-up">ROGERS</h4>
        <p data-aos="flip-up">Looking One Step Further</p>
        <br />
        <br />
        <p data-aos="flip-up">
          ROGERS is CloudKbases retail analytics insight solution, which
          provides prebuilt APIs, 100+ reports for a plug and play data input to
          a Proprietary Enterprise Datawarehouse, compliant to ARTS standards of
          USA with the capability to be delivered Onpremises, Private/Public
          cloud as SAAS.
        </p>
        <br />
        <h3 data-aos="flip-up">
          With ROGERS, you can get the Right Product at the Right Place at the
          Right Time
        </h3>
        <br />
        <h4 data-aos="flip-up">Key Features-</h4>
        <ul>
          <li data-aos="flip-up">Know Your Shopper</li>
          <li data-aos="flip-up">Understand Your Share of the Wallet </li>
          <li data-aos="flip-up">Capitalize on Value Customers </li>
          <li data-aos="flip-up">Inventory Optimization </li>
          <li data-aos="flip-up">Markdown & Promotion Optimization </li>
          <li data-aos="flip-up">Batter Forecast & Planning </li>
          <li data-aos="flip-up">Connected Supply Chain Management </li>
          <li data-aos="flip-up">Integrated Marketing </li>
          <li data-aos="flip-up">360-degree Analysis & Insights </li>
        </ul>
        <h4>Key Benefits-</h4>
        <ul>
          <li data-aos="flip-up">Profit Optimization </li>
          <li data-aos="flip-up">Mitigate Risk</li>
          <li data-aos="flip-up">Reveal Valuable Growth Opportunities </li>
          <li data-aos="flip-up">Plug & Play </li>
          <li data-aos="flip-up">Leveraging Latest Data </li>
          <li data-aos="flip-up">Information Consolidation Across Geographies </li>
          <li data-aos="flip-up">Integrated Platform </li>
          <li data-aos="flip-up">Real Time Deployment </li>
          <li data-aos="flip-up">Reduce Decision Time </li>
        </ul>
      </div>
    </div>
  );
};

export default Research;
