import React, { useEffect } from "react";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FiMoon, FiSun } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";

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
        <div className="logo">
          <h1>Festus Damilare</h1>
        </div>
        <div className="nav">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="download-darkMode">
          <div className="desktop-download">
            <a href="/Festus Damilare Michael Re.pdf" download>
              <FiDownload /> Download Resume
            </a>
          </div>
          <div className="right-icons">
            <div className="dark-mode">
              <button onClick={() => setIsDarkMode((d) => !d)}>
                {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
              </button>
            </div>
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
        <a href="#" onClick={() => setIsOpen(false)}>
          Projects
        </a>
        <a href="#" onClick={() => setIsOpen(false)}>
          Experience
        </a>
        <a href="#" onClick={() => setIsOpen(false)}>
          Education
        </a>
        <a href="#" onClick={() => setIsOpen(false)}>
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
