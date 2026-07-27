/** @format */

"use client";

import React from "react";
import { m as Motion } from "framer-motion";
import { cn } from "../lib/utils";

const STAGGER = 0.035;

// --- Helper Component (Renamed from Component to TextRoll) ---
const Component = ({ children, className, center = false }) => {
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <Motion.span
      initial="initial"
      animate={isClicked ? "hovered" : "initial"}
      onClick={() => setIsClicked(!isClicked)}
      className={cn("relative block overflow-hidden", className)}
      style={{
        lineHeight: 0.85,
      }}
    >
      {/* Top Text (Slides up) */}
      <div>
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <Motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                ease: "easeInOut",
                delay,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </Motion.span>
          );
        })}
      </div>
      {/* Bottom Text (Slides in from bottom) */}
      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <Motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                ease: "easeInOut",
                delay,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </Motion.span>
          );
        })}
      </div>
    </Motion.span>
  );
};

export { Component };
