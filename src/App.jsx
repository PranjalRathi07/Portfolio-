/** @format */
import React, { Suspense, lazy } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Lightfall from "./component/Lightfall";

const About = lazy(() => import("./components/About"));
const WhyMe = lazy(() => import("./components/Why_me"));
const MarqueeStrip = lazy(() => import("./components/MarqueeStrip"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="w-full min-h-screen bg-black relative scroll-smooth sm:overflow-x-visible overflow-x-hidden">
        {/* Lightfall Background */}
        <div className="fixed inset-0 z-0 pointer-events-auto">
          <Lightfall
            backgroundColor="#000000"
            colors={["#3b82f6", "#1d4ed8", "#0f172a"]}
            speed={0.8}
          />
        </div>

        <Navbar />

        <Hero />
        <Suspense fallback={<div className="h-screen bg-transparent"></div>}>
          <About />
          <WhyMe />
          <MarqueeStrip />
          <Services />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </LazyMotion>
  );
}

export default App;
