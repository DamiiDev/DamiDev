import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
          <div className="navbar-logo-text">
            <a href="https://damilarefestusmichael.vercel.app">DF</a>
          </div>
        </div>
        <div className="nav">
          <a href="#">Home</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
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
        <a href="#skills" onClick={() => setIsOpen(false)}>
          Skills
        </a>
        <a href="#contact" onClick={() => setIsOpen(false)}>
          Contact
        </a>
        <div className="mobile-download">
          <a href="/Festus Damilare CV.pdf" download>
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
