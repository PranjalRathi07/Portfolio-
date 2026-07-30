/** @format */
import React, { Suspense, lazy, useState, useEffect } from "react";
import {
  LazyMotion,
  domAnimation,
  AnimatePresence,
  m as Motion,
} from "framer-motion";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Lightfall from "./component/Lightfall";
import About from "./components/About";
import Loader from "./component/Loader";
const WhyMe = lazy(() => import("./components/Why_me"));
const MarqueeStrip = lazy(() => import("./components/MarqueeStrip"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    return !sessionStorage.getItem("hasVisited");
  });
  const [showBg, setShowBg] = useState(!isLoading);

  useEffect(() => {
    if (isLoading) {
      sessionStorage.setItem("hasVisited", "true");
      const timer = setTimeout(() => setShowBg(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    return () => lenis.destroy();
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <div className="w-full min-h-screen bg-black relative sm:overflow-x-visible overflow-x-hidden">
        <AnimatePresence>
          {isLoading && (
            <Motion.div
              key="loader"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="fixed inset-0 z-100 bg-black flex flex-col justify-center items-center"
            >
              <Loader onLoadingComplete={() => setIsLoading(false)} />
            </Motion.div>
          )}
        </AnimatePresence>

        {/* Lightfall Background */}
        {showBg && (
          <div className="fixed inset-0 z-0 pointer-events-auto animate-[fade-in_1s_ease-out_forwards]">
            <Lightfall
              backgroundColor="#000000"
              colors={["#3b82f6", "#1d4ed8", "#0f172a"]}
              speed={0.8}
            />
          </div>
        )}

        <Navbar isLoaded={!isLoading} />

        <Hero isLoaded={!isLoading} />
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
