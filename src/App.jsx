/** @format */

import Header from "./components/header";
import "./App.css";
import Hero from "./components/hero";
import Aboutme from "./components/aboutme";
import Skills from "./components/skills";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Aboutme></Aboutme>
      <Skills></Skills>
    </div>
  );
}

export default App;
