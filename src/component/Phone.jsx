/** @format */

import React from "react";

export default function PhoneMockup() {
  return (
    <div className="relative w-full py-10 flex items-center justify-center z-10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#3b82f6]/10 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* Phone wrapper */}
      <div className="relative">
        {/* Floating Animation Wrapper */}
        <div className="relative animate-[floatPhone_5s_ease-in-out_infinite]">
          {/* Outer shadow */}
          <div className="absolute inset-0 rounded-[3.2rem] bg-black/40 blur-2xl scale-105 translate-y-6" />

          {/* Phone body */}
          <div className="relative w-[320px] h-162.5 shadow-[0_30px_80px_rgba(0,0,0,0.7)] rounded-[3.2rem] bg-[linear-gradient(145deg,#1f232b,#0b0d12_35%,#2e3440)] border border-[#2e3440]/30">
            {/* Metallic edge highlight (Front Rim) */}
            <div className="absolute inset-px rounded-[3.1rem] pointer-events-none bg-[linear-gradient(135deg,rgba(255,255,255,0.16),transparent_18%,transparent_82%,rgba(255,255,255,0.08))]" />

            {/* Buttons */}
            <div className="absolute -left-0.75 top-35 h-16 w-1 rounded-lg bg-zinc-600/90 shadow-[inset_1px_0_2px_rgba(255,255,255,0.2)]" />
            <div className="absolute -right-0.75 top-42.5 h-22.5 w-1 rounded-lg bg-zinc-600/90 shadow-[inset_-1px_0_2px_rgba(255,255,255,0.2)]" />

            {/* FRONT FACE (Screen) */}
            <div className="absolute inset-2 rounded-[2.7rem] overflow-hidden bg-[radial-gradient(circle_at_70%_20%,rgba(40,80,255,0.12),transparent_25%),linear-gradient(180deg,#05070c,#020305)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
              {/* Top notch / dynamic island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-27.5 h-7 rounded-full bg-black/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] z-20" />

              {/* Status */}
              <div className="absolute top-5 left-6 right-6 flex items-center justify-between text-[13px] text-white/90 font-medium z-10">
                <span>10:00</span>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                  <span className="h-2.5 w-3.5 rounded-[3px] border border-white/80" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 px-6 pt-20 pb-6 text-white">
                <h3 className="text-[22px] font-semibold tracking-tight">
                  System Health
                </h3>

                <div className="mt-6 rounded-[2rem] border border-white/5 bg-[linear-gradient(180deg,rgba(20,24,34,0.92),rgba(8,10,16,0.95))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_10px_40px_rgba(0,0,0,0.35)]">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-white/45">Backend Uptime</p>
                      <h4 className="mt-2 text-[56px] leading-none font-bold tracking-tight">
                        99.9<span className="text-[40px]">%</span>
                      </h4>
                    </div>

                    <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      LIVE
                    </div>
                  </div>

                  {/* Graph */}
                  <div className="relative mt-6 h-42.5 overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_75%_20%,rgba(59,130,246,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]">
                    <svg
                      viewBox="0 0 300 160"
                      className="absolute inset-0 h-full w-full"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="lineGlow"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="0"
                        >
                          <stop offset="0%" stopColor="#2563eb" />
                          <stop offset="100%" stopColor="#60a5fa" />
                        </linearGradient>
                        <linearGradient
                          id="fillGlow"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="rgba(96,165,250,0.35)" />
                          <stop offset="100%" stopColor="rgba(96,165,250,0)" />
                        </linearGradient>
                      </defs>

                      <path
                        d="M0,128 C40,132 70,122 105,100 C145,76 175,48 215,34 C245,24 272,22 300,18 L300,160 L0,160 Z"
                        fill="url(#fillGlow)"
                      />
                      <path
                        d="M0,128 C40,132 70,122 105,100 C145,76 175,48 215,34 C245,24 272,22 300,18"
                        fill="none"
                        stroke="url(#lineGlow)"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                    </svg>

                    <div className="absolute right-4 top-4.5 h-4 w-4 rounded-full bg-white shadow-[0_0_22px_rgba(255,255,255,0.95)]" />
                  </div>
                </div>

                {/* Bottom cards */}
                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-[1.6rem] border border-white/5 bg-[linear-gradient(180deg,rgba(20,24,34,0.9),rgba(8,10,16,0.95))] px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <div className="text-[20px] font-bold">12ms</div>
                    <div className="mt-2 text-[10px] sm:text-xs tracking-widest text-white/40">
                      AVG LATENCY
                    </div>
                  </div>

                  <div className="rounded-[1.6rem] border border-white/5 bg-[linear-gradient(180deg,rgba(20,24,34,0.9),rgba(8,10,16,0.95))] px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <div className="text-[20px] font-bold">0%</div>
                    <div className="mt-2 text-[10px] sm:text-xs tracking-[0.08em] uppercase text-white/40">
                      DATA LOSS
                    </div>
                  </div>
                </div>
              </div>

              {/* Screen reflection */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.11)_0%,rgba(255,255,255,0.03)_18%,transparent_36%,transparent_100%)]" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatPhone {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
