import React from "react";
import "./Contact.css";
import Seperator from "../../Common/Seperator/Seperator";
import SocialContact from "../../Common/SocialContact/SocialContact";
function Contact() {
  return (
    <div className="contact">
      <Seperator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Contact me on any of the Platform.</p>
          <SocialContact />
        </div>
        <div className="download">
          <a download href={require("../../../assets/Arun_s_Resume.pdf")}>
            {" "}
            <i class="fi fi-rr-download"></i> Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
