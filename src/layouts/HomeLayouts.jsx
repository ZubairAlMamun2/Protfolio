import React from "react";
import NavBar from "../components/NavBaar";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skils";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";



const HomeLayouts = () => {
  
  return (
    <div className=" font-inter">
      <nav className="mx-auto ">
        <NavBar />
      </nav>
      <main>
        <HeroSection />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayouts;
