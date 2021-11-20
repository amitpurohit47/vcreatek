import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-us" id="contact-us">
      <h2>Contact Us</h2>
      <h3>
        We are a team of experienced IT specialists, ready to solve your issues.
        Let`s talk
      </h3>
      <form>
        <div className="form-row">
          <div className="form-field">
            <label>Full Name *</label>
            <input
              type="text"
              name="name"
              aria-required="true"
              required
              aria-invalid="true"
              placeholder="e.g. John Doe"
              id="name"
            />
          </div>
          <div className="form-field">
            <label>Organization *</label>
            <input
              type="text"
              name="organization"
              aria-required="true"
              required
              aria-invalid="true"
              placeholder="Company name"
              id="organization"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-field">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              aria-required="true"
              required
              aria-invalid="true"
              placeholder="name@company.com"
              id="email"
            />
          </div>
          <div className="form-field">
            <label>Phone Number</label>
            <input
              type="text"
              name="name"
              aria-invalid="true"
              placeholder="Full Number(incl. prefix)"
              id="phone"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-field">
            <label>Company Size *</label>
            <select
              aria-invalid="false"
              aria-required="true"
              required
              id="company"
            >
              <option value="Please Select">Please Select</option>
              <option value="1 (Freelancer)">1 (Freelancer)</option>
              <option value="2-19">2-19</option>
              <option value="20-49">20-49</option>
              <option value="50+">50+</option>
            </select>
          </div>
          <div className="form-field">
            <label>What is your inquiry about? *</label>
            <select
              aria-required="true"
              required
              aria-invalid="false"
              id="inquiry"
            >
              <option value="Please Select">Please Select</option>
              <option value="General Information Request">
                General Information Request
              </option>
              <option value="Partner Relations">Partner Relations</option>
              <option value="Careers">Careers</option>
              <option value="Software Licencing">Software Licencing</option>
            </select>
          </div>
        </div>
        <div className="form-message">
          <label>Message *</label>
          <textarea
            name="message"
            placeholder="Let us know what you need"
            id="message"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
