/** @format */

import React, { useRef } from "react";
import { m as Motion, useScroll, useTransform } from "framer-motion";

const Hero = ({ isLoaded }) => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // The first section is now 200vh, so it stays sticky longer!
  // The text fades completely by 35% scroll (70vh), right as Section 2 covers it.
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.35], [1, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.35], [1, 0.85, 0.55]);

  return (
    <>
      {/* Sticky Heading Section Only */}
      <section
        ref={sectionRef}
        className="relative w-full h-[200vh] bg-transparent font-sans"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 md:w-200 h-100 blur-[100px] rounded-[100%] pointer-events-none"></div>

        <div className="sticky top-0 h-screen flex items-center justify-center z-10 select-none pointer-events-none">
          <Motion.div
            style={{ opacity, scale }}
            className="flex flex-row items-center gap-4 sm:gap-6 md:gap-8"
          >
            <h1 className={`opacity-0 ${isLoaded ? "animate-[slide-left_0.8s_ease-out_forwards]" : ""} text-[10vw] sm:text-[80px] md:text-[140px] lg:text-[160px] font-black leading-[0.8] tracking-tighter uppercase relative z-10`}>
              <span className="bg-linear-to-r from-gray-600 via-white to-gray-600 bg-size-[200%_auto] text-transparent bg-clip-text animate-gradientText">
                DEVNIX.
              </span>
            </h1>

            <div className="relative">
              <h1 className={`opacity-0 ${isLoaded ? "animate-[slide-right_0.8s_ease-out_forwards]" : ""} text-[10vw] sm:text-[80px] md:text-[140px] lg:text-[160px] font-black leading-[0.8] tracking-tighter uppercase relative z-10`}>
                <span className="bg-linear-to-r from-[#5c98ff] via-gray-400 to-[#5c98ff] bg-size-[200%_auto] text-transparent bg-clip-text animate-gradientText">
                  STUDIO
                </span>
              </h1>

              <svg
                className="absolute -top-4 -right-8 md:-top-6 md:-right-14 w-8 h-8 md:w-12 md:h-12 text-[#94bbf9] opacity-80"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" />
                <path
                  d="M19.5 16L20 18.5L22.5 19L20 19.5L19.5 22L19 19.5L16.5 19L19 18.5L19.5 16Z"
                  opacity="0.7"
                />
              </svg>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Normal Hero Content Section */}
      <section className="relative z-20 -mt-[100vh] w-full bg-transparent px-6 pb-44 font-sans">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[#9ca3af] text-base md:text-[19px] max-w-200 text-center font-light leading-relaxed tracking-wide relative">
            Turning complex logic into seamless digital experiences.{" "}
            <span className="text-white font-bold underline decoration-white/40 underline-offset-[6px]">
              into seamless digital experiences.
            </span>{" "}
            Building scalable, high-performance applications with clean,
            <br className="hidden md:block" /> maintainable code.
          </p>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 md:gap-10 text-[13px] md:text-[14px] text-[#9ca3af] relative">
            <div className="flex items-center gap-2.5">
              <svg
                className="w-4 h-4 text-[#3b82f6]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2m4-2v4m0 0l-2-2m2 2l2-2"
                />
              </svg>
              <span className="font-bold text-white">100+</span> Projects
            </div>

            <div className="hidden md:block w-px h-4 bg-white/10"></div>

            <div className="flex items-center gap-2.5">
              <svg
                className="w-4 h-4 text-[#3b82f6]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span className="font-bold text-white">99.9%</span> Uptime
              Deployment
            </div>

            <div className="hidden md:block w-px h-4 bg-white/10"></div>

            <div className="flex items-center gap-2.5">
              <svg
                className="w-4 h-4 text-[#3b82f6]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
              <span className="font-bold text-white">100%</span> Client
              Satisfaction
            </div>
          </div>

          <div className="mt-14 flex flex-col sm:flex-row items-center gap-6 relative">
            <a
              href="#contact"
              className="group flex items-center justify-center gap-3 bg-[#2563eb] text-white text-[12px] font-extrabold uppercase tracking-widest px-8 py-4 rounded-full shadow-[0_0_32px_rgba(37,99,235,0.4)] hover:shadow-[0_0_48px_rgba(37,99,235,0.6)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              CONSULT NOW
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 19L20 5m0 0v10m0-10H10"
                />
              </svg>
            </a>

            <a href="#services">
              <button className="group flex items-center justify-center gap-3 bg-transparent text-white border border-white/15 text-[12px] font-extrabold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white/5 transition-all duration-300 w-full sm:w-auto">
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
                WATCH SHOWCASE
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
