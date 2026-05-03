import React, { useEffect } from "react";
import devtrybe from "../assets/devdev.jpg";
import jobtracker from "../assets/Jobtrackerr.jpg";
import quiz from "../assets/quizz.jpg";
import portfolio from "../assets/portport.jpg";
import authen from "../assets/auth.jpg";

const MyProjects = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".project");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="my-project-content">
      <div id="projects" className="my-projects">
        <h2>My Projects</h2>
        <p>
          A curated collection of projects built with clean design, performance,
          and responsiveness at the core. Each one represents a real milestone —
          from landing pages and UI components to full React applications. Built
          primarily with React and Tailwind CSS, these projects reflect my
          growth as a developer and my ongoing push into full-stack development.
        </p>
      </div>
      <div className="projects-grid">
        <div className="project">
          <img src={devtrybe} alt="DevTrybe" />
          <h4>DevTrybe</h4>
          <p>
            DevTrybe is a full-stack platform built to connect developers and
            showcase their profiles in one place. Users can create profiles,
            follow other developers, and link their GitHub, LinkedIn, and
            Twitter. Features include secure authentication, dynamic profile
            management, and a clean interface designed to foster a collaborative
            developer community.
          </p>
          <div className="stack-used">
            <button>React</button>
            <button>JavaScript</button>
            <button>CSS</button>
          </div>
          <div className="view">
            <a href="#devtrybe">
              <button>View Live</button>
            </a>
            <a href="https://github.com/DamiiDev/Dynamic-User-Profile-Dashboard-React-.git">
              <button>View Github</button>
            </a>
          </div>
        </div>
        <div className="project">
          <img src={jobtracker} alt="JobTracker" />
          <h4>JobTracker</h4>
          <p>
            JobTracker is a productivity app that helps users manage and monitor
            their job search in one place. Track applications across stages
            applied, interview, and offer with detailed records for each
            opportunity. Built with a clean, intuitive interface for real-time
            updates and easy navigation.
          </p>
          <div className="stack-used">
            <button>HTML</button>
            <button>JavaScript</button>
            <button>CSS</button>
          </div>
          <div className="view">
            <a href="#devtrybe">
              <button>View Live</button>
            </a>
            <a href="https://github.com/DamiiDev/Job-Tracker-App.git">
              <button>View Github</button>
            </a>
          </div>
        </div>
        <div className="project">
          <img src={quiz} alt="QuizApp" />
          <h4>Quiz App</h4>
          <p>
            An interactive quiz app built for engagement and performance. Users
            answer dynamic questions, receive instant feedback, and track their
            scores in real time. Built with efficient state management and a
            clean interface designed for a smooth, distraction-free experience.
          </p>
          <div className="stack-used">
            <button>HTML</button>
            <button>JavaScript</button>
            <button>CSS</button>
          </div>
          <div className="view">
            <a href="https://quiz-game-sable-theta.vercel.app/">
              <button>View Live</button>
            </a>
            <a href="https://github.com/DamiiDev/Quiz-Game.git">
              <button>View Github</button>
            </a>
          </div>
        </div>
        <div className="project">
          <img src={portfolio} alt="Portfolio" />
          <h4>Portfolio</h4>
          <p>
            A responsive personal portfolio built to showcase projects, skills,
            and experience in one clean space. Designed with a strong focus on
            user experience, intuitive navigation, and performance across all
            devices. The site you're looking at right now.
          </p>
          <div className="stack-used">
            <button>React</button>
            <button>JavaScript</button>
            <button>CSS</button>
          </div>
          <div className="view">
            <a href="https://devtrybe.vercel.app/">
              <button>View Live</button>
            </a>
            <a href="https://github.com/DamiiDev/DamiDev.git">
              <button>View Github</button>
            </a>
          </div>
        </div>
        <div className="project">
          <img src={authen} alt="LoginUI" />
          <h4>Authentication UI</h4>
          <p>
            A clean, responsive authentication interface covering login and
            registration flows. Built with form validation, user-friendly input
            handling, and modern UI principles. Fully responsive and structured
            for easy integration into any application requiring secure user
            authentication.
          </p>
          <div className="stack-used">
            <button>HTML</button>
            <button>JavaScript</button>
            <button>CSS</button>
          </div>
          <div className="view">
            <a href="https://loginpage-nine-eosin.vercel.app/">
              <button>View Live</button>
            </a>
            <a href="https://github.com/DamiiDev/Loginpage.git">
              <button>View Github</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
