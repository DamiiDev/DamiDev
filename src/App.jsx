import React from "react";
import Header from "./components/Header";
import Bio from "./components/Bio";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import MyProjects from "./components/MyProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <Header />

      <main>
        <Bio />
        <AboutMe />
        <Skills />
        <MyProjects />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;
