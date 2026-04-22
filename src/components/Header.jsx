import React, { useEffect } from "react";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FiMoon, FiSun } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="header" id="home">
      <div className="hamburg">
        <div className="navbar-logo">
          <div className="navbar-logo-glow"></div>
          <span className="navbar-logo-text">DF</span>
        </div>
        <div className="nav">
          <a href="#">Home</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <Link className="nav-link" to="/skills">
            Skills
          </Link>
          <a href="#contact">Contact</a>
        </div>
        <div className="download-darkMode">
          <div className="desktop-download">
            <a href="/Festus Damilare CV.pdf" download>
              <FiDownload /> Download Resume
            </a>
          </div>

          <div className="menu-icon" onClick={() => setIsOpen(true)}>
            <FiMenu size={24} />
          </div>
        </div>
      </div>

      <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
        <span className="close-btn" onClick={() => setIsOpen(false)}>
          <FiX size={24} />
        </span>
        <a href="#" onClick={() => setIsOpen(false)}>
          Home
        </a>
        <a href="#projects" onClick={() => setIsOpen(false)}>
          Projects
        </a>
        <a href="#" onClick={() => setIsOpen(false)}>
          Experience
        </a>
        {/* <a href="#education" onClick={() => setIsOpen(false)}>
          Education
        </a> */}
        <Link
          className="nav-link"
          to="/skills"
          onClick={() => setIsOpen(false)}
        >
          Skills
        </Link>
        <a href="#contact" onClick={() => setIsOpen(false)}>
          Contact
        </a>
        <div className="mobile-download">
          <a href="/Festus Damilare Michael Re.pdf" download>
            <FiDownload /> Download Resume
          </a>
        </div>
      </div>
      {isOpen && (
        <div className="overlay" onClick={() => setIsOpen(false)}></div>
      )}
    </div>
  );
};

export default Header;
