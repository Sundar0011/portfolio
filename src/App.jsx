import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

function App() {
  const [count, setCount] = useState(0);

  return (
  <>
    <Home/>
    <Skills/>
    <Projects/>
    <Resume/>
  </>
  );
}

export default App;
