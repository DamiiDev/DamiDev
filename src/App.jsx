import React from "react";
import Header from "./components/Header";
import Bio from "./components/Bio";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Bio />
      <AboutMe />
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
