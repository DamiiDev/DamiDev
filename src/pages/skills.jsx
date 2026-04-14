import React from "react";

const skills = () => {
  return (
    <div>
      <div className="skills">
        <div className="skills-content">
          <h2>My Skills</h2>
          <p>
            A structured overview of my technical skills, highlighting my
            journey as a developer and my commitment to continuously learning
            and evolving with modern web technologies.
          </p>
        </div>
        <div className="skills-grid">
          <div className="skills-grid-stack">
            <h3>Frontend Core</h3>
            <p>Fundamental web technologies</p>
            <button>HTML</button>
            <button>CSS</button>
            <button>JavaScript</button>
          </div>
          <div className="skills-grid-stack">
            <h3>Library</h3>
            <p>Modern development tools</p>
            <button>React</button>
          </div>
          <div className="skills-grid-stack">
            <h3>Version Control</h3>
            <p>Code Management</p>
            <button>Git</button>
            <button>GitHub</button>
          </div>
          <div className="skills-grid-stack">
            <h3>Frontend Core</h3>
            <p>Fundamental web technologies</p>
            <button>HTML</button>
            <button>CSS</button>
            <button>JavaScript</button>
          </div>
        </div>
        <div className="pro-tip">
          <p>
            Pro Tip: I'm always open to learning new technologies and
            frameworks. If you have a project that requires skill's beyond
            what's listed here, feel free to reach out!
          </p>
        </div>
      </div>
    </div>
  );
};

export default skills;
