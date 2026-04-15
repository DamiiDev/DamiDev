import React, { useState } from "react";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <div id="education" className="about">
      <div className="about-me">
        <h2>About Me</h2>
        <div className="about-me-tab">
          <button onClick={() => setActiveTab("about")}>MYSELF</button>
          <button onClick={() => setActiveTab("education")}>EDUCATION</button>
          <Link className="nav-link" to="/skills">
            SKILLS
          </Link>
        </div>

        <div className="tab-content active">
          {activeTab === "about" && (
            <p>
              Hi, I'm Damilare Festus, a frontend developer focused on building
              clean, responsive, and user-friendly web experiences. I specialize
              in creating modern interfaces that are both visually appealing and
              highly functional. I work primarily with React.js and Tailwind CSS
              to develop scalable components and seamless layouts across
              devices. My approach emphasizes performance, maintainability, and
              thoughtful design. I'm also expanding into full-stack development,
              strengthening my ability to build complete, scalable solutions
              from the ground up. I'm passionate about helping brands and
              individuals establish a strong online presence through effective,
              well-crafted digital products. Let's build something impactful
              together.
            </p>
          )}
          {activeTab === "education" && (
            <p>
              I hold a Bachelor of Engineering in Computer Engineering from
              Ekiti State University, Ado-Ekiti, where I graduated with a Second
              Class Upper Division (2:1). My academic experience provided a
              strong foundation in core areas such as programming, data
              structures, algorithms, and software engineering. This background
              continues to shape my approach to development, enabling me to
              build solutions with clarity, structure, and efficiency. After
              graduation, I completed the National Youth Service Corps (NYSC),
              where I further developed my adaptability, teamwork, and
              problem-solving skills in real-world environments.
            </p>
          )}
        </div>
        <div className="get-in-touch-button">
          <button>Get In Touch</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
