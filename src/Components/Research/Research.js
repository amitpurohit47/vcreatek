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
      onClick={() =>
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
          <h1>Blockchain</h1>
          <p>
            Blockchain - Blockchain is a distributed ledger technology that
            enables a set of peers to work together to create a unified,
            decentralized network. The peers can communicate and share
            information or data with the help of the consensus algorithm. Also,
            there is no need for a centralized authority, which makes the whole
            network trustworthy when compared to other networks.
          </p>
          <p>With our Blockchain technology, you can –</p>
          <p>
            Trust that your data is safe, and no invaders have access to it.
          </p>
          <p>Have a decentralized structure</p>
          <p>Get a cost-effective solution.</p>
          <p>Make transactions faster</p>
          <p>Get improved usability that lets you track and access data. </p>
          <img src={wave3} className="wave3" alt="wave3" />
        </div>
      </div>
      <h1>Quantum Computing</h1>
      <div className="researchlab3">
        <div className="researchlab3-left">
          <p>
            1. This decade has been deemed, “The Quantum Decade- the decade when
            enterprises begin to see business value from quantum computing” by
            IBM.
          </p>
          <p>
            2. Quantum Computing is expected to be exponentially faster by
            design due to the Quantum Mechanical principles of Entanglement and
            Interference.
          </p>
          <p>
            3. Quantum Annealing based Quantum Computing has already been
            utilized by firms, like Toyota, to solve optimization problems at
            ultra-high speeds.
          </p>
          <p>
            4. There has been a paradigm shift in academia where research papers
            in Quantum Information Sciences now actually consider commercial
            applications of Quantum Computing, rather than theoretical toy
            models.
          </p>
          <p>
            5. There are plenty of open-source resources to learn how one can
            write programs that will run on Quantum Computers- some notable SDKs
            are Qiskit, Q#, Cirq.
          </p>
          <p>
            6. The entry requirements for Quantum Computing using any of these
            SDKs are fairly moderate and only require a solid grounding in High
            School Mathematics and Physics, Linear Algebra, Basic Complex
            Analysis, and intermediate level programming skills.
          </p>
          <p>
            7. As an interdisciplinary area, Quantum Computing has tremendous
            potential to bridge the gap across disciplines like Mathematics,
            Physics and Computer Sciences. The commercialization of a quantum
            use case will lie on the intersection of optimization, simulation
            and machine learning.
          </p>
          <p>
            8. The workforce of tomorrow needs to be prepared for the advent of
            Quantum Computing. Quantum-Computing-as-a-service (QCaaS) is
            expected to be a $ 30 Billion enterprise by 2030.
          </p>
          <p>
            9. vCreaTek has a continuously expanding workforce of graduates from
            top Science Institutions of India (IIT-M, IISER-K, NISER) to upskill
            and align itself with the Quantum Decade at an enterprise level, and
            lead the commercialization of Quantum Computing in India
          </p>
        </div>
        <div className="researchlab3-right">
          <img src={lab2} alt="lab2" />
        </div>
      </div>
      <div className="researchlab4">
        <h1>Products – ROGERS, FOSHAN</h1>
        <h4>ROGERS</h4>
        <p>Looking One Step Further</p>
        <br />
        <br />
        <p>
          ROGERS is CloudKbases retail analytics insight solution, which
          provides prebuilt APIs, 100+ reports for a plug and play data input to
          a Proprietary Enterprise Datawarehouse, compliant to ARTS standards of
          USA with the capability to be delivered Onpremises, Private/Public
          cloud as SAAS.
        </p>
        <br />
        <h3>
          With ROGERS, you can get the Right Product at the Right Place at the
          Right Time
        </h3>
        <br />
        <h4>Key Features-</h4>
        <ul>
          <li>Know Your Shopper</li>
          <li>Understand Your Share of the Wallet </li>
          <li>Capitalize on Value Customers </li>
          <li>Inventory Optimization </li>
          <li>Markdown & Promotion Optimization </li>
          <li>Batter Forecast & Planning </li>
          <li>Connected Supply Chain Management </li>
          <li>Integrated Marketing </li>
          <li>360-degree Analysis & Insights </li>
        </ul>
        <h4>Key Benefits-</h4>
        <ul>
          <li>Profit Optimization </li>
          <li>Mitigate Risk</li>
          <li>Reveal Valuable Growth Opportunities </li>
          <li>Plug & Play </li>
          <li>Leveraging Latest Data </li>
          <li>Information Consolidation Across Geographies </li>
          <li>Integrated Platform </li>
          <li>Real Time Deployment </li>
          <li>Reduce Decision Time </li>
        </ul>
      </div>
    </div>
  );
};

export default Research;
