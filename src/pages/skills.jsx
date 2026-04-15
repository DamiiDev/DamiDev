import React from "react";

const Skills = () => {
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
            <p>
              Strong foundation in essential web technologies, enabling the
              development of responsive, accessible, and high-performance user
              interfaces.
            </p>
            <div className="stack-btn">
              <button>HTML</button>
              <button>CSS</button>
              <button>JavaScript</button>
            </div>
          </div>
          <div className="skills-grid-stack">
            <h3>Library</h3>
            <p>
              Experience leveraging modern tools and frameworks to build
              scalable and maintainable frontend applications.
            </p>
            <div className="stack-btn">
              <button>React</button>
            </div>
          </div>
          <div className="skills-grid-stack">
            <h3>Styling Systems</h3>
            <p>
              Proficient in creating visually appealing and consistent UI
              designs using modern styling approaches.
            </p>
            <div className="stack-btn">
              <button>CSS</button>
              <button>Tailwind CSS</button>
            </div>
          </div>
          <div className="skills-grid-stack">
            <h3>Version Control</h3>
            <p>
              Efficient in managing codebases, collaboration, and version
              tracking using industry-standard tools.
            </p>
            <div className="stack-btn">
              <button>Git</button>
              <button>GitHub</button>
              <button>Vs Code</button>
            </div>
          </div>
          <div className="skills-grid-stack">
            <h3>Currently Expanding My Skillset</h3>
            <p>
              Actively learning and integrating new technologies to broaden
              development capabilities.
            </p>
            <div className="stack-btn">
              <button>API Integration</button>
              <button>Node.js</button>
              <button>Express.js</button>
              <button>MongoDB</button>
            </div>
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

export default Skills;
