import React from "react";
import finance from "../../Assets/Images/finance.jpg";
import "./Finance.css";

const Finance = () => {
  return (
    <div
      className="finance"
      onMouseOver={() =>
        (document.querySelector(".header-info").style.display = "none")
      }
    >
      <h1>Finance Analytics</h1>
      <div className="finance-main">
        <div className="finance-left">
          <p>
            <strong>vCreaTek’s Financial Analytics</strong> offers the
            capability of presenting real-time transactional information
            side-by-side with historical information in a single analytical
            environment. The application enables the presentation of
            up-to-the-minute reporting of key transactions while maintaining a
            proper level of performance for operational processing.
          </p>
          <h3>Key Functionality </h3>
          <p>
            Financial Analytics solution is delivered with out-of the-box
            conformed dimensions and features the following analytical
            capability:
          </p>
          <ul>
            <li>Invoice Exceptions</li>
            <li>Adjustments</li>
            <li>Unapplied Receipts</li>
            <li>Available Credit</li>
            <li>Journal Entry Reconciliation</li>
            <li>Un-posted Items Exceptions</li>
            <li>Invoices On Hold</li>
            <li>Prepayment Status</li>
            <li>Unmatched Invoices</li>
            <li>Goods Received Not Invoiced</li>
            <li>Void Payments</li>
            <li>Asset Additions &amp; Retirements</li>
          </ul>
        </div>
        <div className="finance-right">
          <img src={finance} alt="finance" />
        </div>
      </div>
    </div>
  );
};

export default Finance;
