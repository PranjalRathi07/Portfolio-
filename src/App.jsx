/** @format */

import Header from "./components/header";
import "./App.css";
import Hero from "./components/hero";
import Aboutme from "./components/aboutme";
import PageWrapper from "./components/PageWrapper";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Hero />
            </PageWrapper>
          }
        />
        <Route
          path="aboutme"
          element={
            <PageWrapper>
              <Aboutme />
            </PageWrapper>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
