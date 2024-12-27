import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Skills from "./pages/Skills";

function App() {
  const [count, setCount] = useState(0);

  return (
  <>
    <Home/>
    <Skills/>
  </>
  );
}

export default App;
