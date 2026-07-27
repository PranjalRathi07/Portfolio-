/** @format */

import React from "react";
import PhoneMockup from "../component/Phone";

const WhyMe = () => {
  return (
    <section
      id="why-me"
      className="relative w-full bg-[#050507] pt-24 pb-40 px-6 md:px-12 flex justify-center font-sans overflow-visible z-10"
    >
      {/* Faint Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)] pointer-events-none z-0"></div>

      <div className="w-full max-w-300 flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24 relative z-10">
        {/* LEFT COLUMN: Text & Accordions */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Heading (Matched exact colors from screenshot) */}
          <h2 className="text-[11vw] sm:text-6xl lg:text-[5rem] font-black tracking-tight uppercase leading-[0.9] mb-6">
            <span className="text-white">THE</span>{" "}
            <span className="text-[#3b82f6]">System</span> <br />
            <span className="text-white">Architecture</span>
          </h2>

          {/* Subtitle */}
          <p className="text-[#9ca3af] text-[15px] md:text-[17px] leading-relaxed font-light max-w-[90%] mb-12">
            Software isn't just code.{" "}
            <span className="text-white font-bold">It's logic.</span> I
            prioritize Latency, Scalability, and Clean Architecture above all
            else.
          </p>

          {/* Strategy Cards List */}
          <div className="flex flex-col gap-4">
            {/* Card 1 */}
            <div className="bg-white/3 border border-white/5 rounded-2xl p-6 flex items-start gap-4 transition-all hover:bg-white/5 backdrop-blur-sm">
              <div className="mt-0.5 shrink-0">
                <svg
                  className="w-6 h-6 text-[#3b82f6]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="9" strokeWidth="2"></circle>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-[16px] mb-1">
                  High-Performance UI/UX
                </h3>
                <p className="text-[#6b7280] text-[13px] font-light">
                  Minimizing friction and maximizing user flow.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/3 border border-white/5 rounded-2xl p-6 flex items-start gap-4 transition-all hover:bg-white/5 backdrop-blur-sm">
              <div className="mt-0.5 shrink-0">
                <svg
                  className="w-6 h-6 text-[#3b82f6]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="9" strokeWidth="2"></circle>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-[16px] mb-1">
                  Scalable Backend Architecture
                </h3>
                <p className="text-[#6b7280] text-[13px] font-light">
                  Secure, multi-layered API structures.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/3 border border-white/5 rounded-2xl p-6 flex items-start gap-4 transition-all hover:bg-white/5 backdrop-blur-sm">
              <div className="mt-0.5 shrink-0">
                <svg
                  className="w-6 h-6 text-[#3b82f6]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="9" strokeWidth="2"></circle>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-[16px] mb-1">
                  Reliable Data Systems
                </h3>
                <p className="text-[#6b7280] text-[13px] font-light">
                  Efficient database schemas and state management.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D Phone Mockup */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
