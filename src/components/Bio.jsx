import React from "react";
import image from "../assets/dammie.jpeg";

const Bio = () => {
  return (
    <>
      <div id="about" className="my-name">
        <div className="wrap-content">
          <h2>
            Hi, I'm <span>Damilare Festus</span>
            <br /> <span className="typing">A Frontend Developer</span>
          </h2>

          <p>
            I build modern, clean, scalable, and user-friendly responsive web
            applications with a strong focus on performance and usability.
            Passionate about delivering seamless user experiences and
            high-quality designs. I continuously learn and adapt to new
            technologies to stay ahead in the field.
          </p>
          <div className="bio-buttons">
            <a href="#projects">
              <button className="view-button">View My Projects</button>
            </a>
            <a href="#contact">
              <button className="contact-button">Contact Me</button>
            </a>
          </div>
        </div>
        <div className="profile-image">
          <img src={image} alt="Profile-image" />
        </div>
      </div>
    </>
  );
};

export default Bio;
