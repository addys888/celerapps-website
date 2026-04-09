"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Total duration of the splash (drawing + hold + fade)
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Trigger parent complete after fade animation
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050810]"
        >
          <div className="relative flex flex-col items-center gap-8">
            {/* SVG Logo Container */}
            <div className="relative h-24 w-24 sm:h-32 sm:w-32">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full"
              >
                {/* Background Glow */}
                <motion.circle
                  cx="12"
                  cy="12"
                  r="10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: [0, 0.2, 0.1], 
                    scale: [0.8, 1.2, 1],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="fill-sky-500/20 blur-xl"
                />

                {/* The Zap Path */}
                <motion.path
                  d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-sky-400"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: 1,
                  }}
                  transition={{ 
                    duration: 1.5, 
                    ease: "easeInOut",
                  }}
                />

                {/* Fill Animation after drawing */}
                <motion.path
                  d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                  initial={{ fill: "transparent", opacity: 0 }}
                  animate={{ 
                    fill: "rgba(56, 189, 248, 1)", // sky-400
                    opacity: 1 
                  }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </svg>
            </div>

            {/* Text Animation */}
            <div className="overflow-hidden flex items-center">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 1.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-1.5"
              >
                <span className="text-2xl sm:text-4xl font-bold tracking-tighter text-white">
                  Celer
                </span>
                <span className="text-2xl sm:text-4xl font-bold tracking-tighter bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
                  Apps
                </span>
              </motion.div>
            </div>

            {/* Loading Bar */}
            <div className="absolute -bottom-16 w-32 h-[2px] bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
                className="h-full w-full bg-gradient-to-r from-sky-400 to-indigo-500 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
