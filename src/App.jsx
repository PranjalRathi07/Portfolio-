/** @format */

import Header from "./components/header";
import "./App.css";
import Hero from "./components/hero";
import Aboutme from "./components/aboutme";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Experience from "./components/experience";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Aboutme></Aboutme>
      <Skills></Skills>
      <Projects></Projects>
      <Experience></Experience>
    </div>
  );
}

export default App;
