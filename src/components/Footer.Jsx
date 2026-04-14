import React from "react";
import { FaCopyright, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="author">
          <h3>Damilare Festus</h3>
          <p>
            I design and build fast, modern web experiences that turn visitors
            into believers.
          </p>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              {" "}
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="connect-with-me">
          <h3>Connect with me</h3>
          <a
            href="mailto:damilarefestus12@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            damilarefestus12@gmail.com
          </a>
          <br />
          <a
            href="https://github.com/DamiiDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/damilare-festus-915386202/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="copyright">
        <FaCopyright /> {new Date().getFullYear()} Damilare Festus. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
