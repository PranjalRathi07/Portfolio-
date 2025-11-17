/** @format */

import Header from "./components/header";
import "./App.css";
import Hero from "./components/hero";
import Aboutme from "./components/aboutme";
import Skills from "./components/skills";
import Projects from "./components/projects";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Aboutme></Aboutme>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
