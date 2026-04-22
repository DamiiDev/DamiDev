import React, { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const element = document.querySelector(".comment-form");

    const observer = new IntersectionObserver((enteries) => {
      enteries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsloading(true);

    emailjs
      .sendForm(
        "service_j2q3nxi",
        "template_0vherca",
        form.current,
        "k8BL38mFhkajQwma3",
      )
      .then(() => {
        setSuccess(true);
        form.current.reset();
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsloading(false);
      });
  };
  return (
    <div>
      <div id="contact" className="contact">
        <div className="ready-to-start">
          <h2>Ready To Start Your Project?</h2>
          <p>
            Have a project in mind, an idea to explore, or simply want to
            connect? Feel free to reach out through any of the contact details
            provided — I'd be happy to hear from you.
          </p>
          <button>Let's Work Together</button>
        </div>
        <div className="comment-form-center">
          <div className="comment-form">
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                name="user_name"
                id="name"
                placeholder="Your Name"
                required
              />

              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                id="email"
                required
              />

              <label htmlFor="message">MESSAGE</label>
              <textarea
                name="message"
                id="message"
                placeholder="Tell me about your project..."
                rows="6"
                required
              />
              <button type="submit" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
