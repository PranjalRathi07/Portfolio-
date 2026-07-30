import React, { useEffect } from "react";
import { m as Motion } from "framer-motion";

const dotVariants = {
  initial: { y: 0 },
  animate: { y: -30 }
};

const transition = {
  duration: 0.6,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut",
};

const Loader = ({ onLoadingComplete }) => {
  useEffect(() => {
    // Keep the loading screen for 2.5 seconds to let the background shaders compile
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <div className="flex justify-center items-center gap-2.5 mt-8">
        <Motion.div 
          variants={dotVariants} 
          initial="initial" 
          animate="animate" 
          transition={{ ...transition, delay: 0 }} 
          className="w-5 h-5 rounded-full bg-[#3b82f6]" 
        />
        <Motion.div 
          variants={dotVariants} 
          initial="initial" 
          animate="animate" 
          transition={{ ...transition, delay: 0.2 }} 
          className="w-5 h-5 rounded-full bg-[#1d4ed8]" 
        />
        <Motion.div 
          variants={dotVariants} 
          initial="initial" 
          animate="animate" 
          transition={{ ...transition, delay: 0.4 }} 
          className="w-5 h-5 rounded-full bg-[#0f172a] border border-white/20" 
        />
      </div>
    </div>
  );
};

export default Loader;
