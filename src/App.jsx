import React, { useEffect } from "react"; 
import "./App.css";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1300, 
      once: false,   
      offset: 120,    
    });
    AOS.refresh(); 
  }, []);


  return (
    <>
      <div id="Home">
        <Home />
      </div>
      
      <div id="Skills">
        <Skills />
      </div>

      <div id="Projects">
        <Projects />
      </div>

      <div id="Resume">
        <Resume />
      </div>

      <div id="Contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
