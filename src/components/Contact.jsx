import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="ready-to-start">
          <h2>Ready To Start Your Project?</h2>
          <p>
            Have a project in mind, an idea to explore, or simply want to
            connect? Feel free to reach out through any of the contact details
            provided — I'd be happy to hear from you.
          </p>
          <button>Let's Work Together</button>
        </div>
        <div className="contact-details">
          <p>
            <FaEnvelope className="contact-icon" />{" "}
            <a href="mailto:damilarefestus12@gmail.com">
              damilarefestus12@gmail.com
            </a>
          </p>
          <p>
            <FaPhone className="contact-icon" />{" "}
            <a href="tel:+2349069394606">+234 906 939 4606</a>
          </p>
          <p>
            <FaMapMarkerAlt className="contact-icon" /> Lagos State, Nigeria
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
