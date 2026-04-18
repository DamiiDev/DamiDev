import React from "react";
import devtrybe from "../assets/devdev.jpg";
import jobtracker from "../assets/Jobtrackerr.jpg";
import quiz from "../assets/quizz.jpg";
import portfolio from "../assets/portport.jpg";
import authen from "../assets/auth.jpg";

const MyProjects = () => {
  return (
    <div className="my-project-content">
      <div id="projects" className="my-projects">
        <h2>My Projects</h2>
        <p>
          Every project in this collection is crafted with deliberate attention
          to clean design, responsiveness, and performance. From initial concept
          through to deployment, I transform ideas into visually compelling,
          fully functional web experiences powered by React and Tailwind CSS.
          This portfolio spans a range of work: landing pages, reusable UI
          component libraries, and responsive layouts built to scale. Each
          project represents a milestone in my growth as a frontend developer
          and reflects my ongoing transition into fullstack development building
          not just great interfaces, but complete, end-to-end solutions.
        </p>
      </div>
      <div className="projects-grid">
        <div className="project">
          <img src={devtrybe} alt="DevTrybe" />
          <h4>DevTrybe</h4>
          <p>
            A full-stack web application built to connect developers and
            showcase their professional profiles in a centralized platform.
            Devtrybe enables users to create personalized profiles, follow other
            developers, and seamlessly access their social platforms such as
            LinkedIn, GitHub, and Twitter. The application incorporates secure
            user authentication, dynamic profile management, and scalable data
            handling. It is designed with a clean, intuitive interface to
            enhance user interaction and foster a collaborative developer
            community.
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
            A web-based productivity application developed to help users
            efficiently manage and monitor their job application process. It
            allows users to track applications across different stages—such as
            applied, interview, and offer—while keeping detailed records for
            each opportunity. The system is built with an intuitive and
            user-friendly interface, enabling real-time updates and easy
            navigation, ultimately helping users stay organized and focused
            during their job search.
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
            An interactive and responsive quiz application designed to enhance
            user engagement through dynamic question rendering and real-time
            feedback. Users can participate in quizzes, receive instant results,
            and track their performance through an integrated scoring system.
            The application focuses on delivering a smooth and engaging user
            experience with a clean interface and efficient state management.
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
            A modern, responsive personal portfolio website developed to
            effectively showcase projects, technical skills, and professional
            experience. The portfolio is designed with a strong emphasis on user
            experience, featuring clean layouts, intuitive navigation, and
            optimized performance across various devices and screen sizes. It
            serves as a central hub to highlight personal branding and technical
            expertise.
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
            <a href="https://github.com/DamiiDev/DamiDev.git">
              <button>View Github</button>
            </a>
          </div>
        </div>
        <div className="project">
          <img src={authen} alt="LoginUI" />
          <h4>Authentication UI</h4>
          <p>
            A well-structured and responsive authentication interface designed
            to provide a seamless user experience for login and registration
            processes. It includes form validation, user-friendly input
            handling, and modern UI design principles to ensure accessibility
            and usability. The interface is optimized for responsiveness and can
            be easily integrated into larger applications requiring secure user
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
