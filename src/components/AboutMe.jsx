import React from "react";

const AboutMe = () => {

  return (
    <div id="education" className="about">
      <div className="about-me">
        <h2>About Me</h2>

        <div className="tab-content">
          <div className="tab-content-one fade-up delay-1">
            <h3>MYSELF</h3>
            <p>
              I'm Damilare Festus, a Frontend Developer passionate about
              building clean, fast, and user-friendly web experiences. I
              specialize in React.js, and Tailwind CSS, crafting scalable
              components and responsive layouts that look great on any device.
              Currently expanding into full-stack development to deliver
              complete, end-to-end solutions. Let's build something great
              together.
            </p>
          </div>
          <div className="tab-content-one fade-up delay-2">
            <h3>EDUCATION</h3>
            <p>
              I hold a B.Eng in Computer Engineering from Ekiti State
              University, graduating with a Second Class Upper (2:1). My
              academic foundation in programming, data structures, algorithms,
              and software engineering shapes how I approach every project with
              clarity, structure, and efficiency. I also completed the NYSC
              program, where I sharpened my adaptability and problem-solving
              skills in real-world environments.
            </p>
          </div>
        </div>
        <div className="get-in-touch-button fade-up delay-3">
          <a href="#contact">
            <button>Get In Touch</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
