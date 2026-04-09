"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1200); 
    }, 3800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.1,
            filter: "blur(20px)",
            transition: { duration: 1.2, ease: [0.7, 0, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050810] overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 pointer-events-none"
            style={{background: "radial-gradient(circle at center, rgba(14,165,233,0.1) 0%, transparent 70%)"}} 
          />
          
          <div className="relative flex flex-col items-center gap-12">
            {/* SVG Logo - Recreated for perfect transparency and animation */}
            <div className="relative h-32 w-32 sm:h-40 sm:w-40">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]"
              >
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" /> {/* Sky 500 */}
                    <stop offset="100%" stopColor="#10b981" /> {/* Emerald 500 */}
                  </linearGradient>
                </defs>

                {/* Animated Logo Paths */}
                {/* The "C" Loop */}
                <motion.path
                  d="M75 50C75 63.8071 63.8071 75 50 75C36.1929 75 25 63.8071 25 50C25 36.1929 36.1929 25 50 25"
                  stroke="url(#logoGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                {/* The Arrow */}
                <motion.path
                  d="M20 80L80 20M80 20H55M80 20V45"
                  stroke="url(#logoGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                />

                {/* Fill effect wash */}
                <motion.path
                  d="M75 50C75 63.8071 63.8071 75 50 75C36.1929 75 25 63.8071 25 50C25 36.1929 36.1929 25 50 25L20 80L80 20H55L80 20V45"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.15 }}
                  transition={{ delay: 2, duration: 1 }}
                  fill="url(#logoGradient)"
                />
              </svg>
              
              {/* Outer Glow Pulse */}
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-sky-500/10 rounded-full blur-3xl -z-10"
              />
            </div>

            {/* Brand Identity */}
            <div className="flex flex-col items-center">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 1.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-2.5"
                >
                  <span className="text-4xl sm:text-6xl font-black tracking-tighter text-white">
                    Celer
                  </span>
                  <span className="text-4xl sm:text-6xl font-black tracking-tighter bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                    Apps
                  </span>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="mt-4 flex flex-col items-center gap-2"
              >
                <div className="h-px w-12 bg-sky-500/30" />
                <p className="text-slate-500 text-xs sm:text-sm tracking-[0.4em] uppercase font-bold">
                  Augmenting AI Workflows
                </p>
              </motion.div>
            </div>

            {/* Premium Loading Indicator */}
            <div className="absolute bottom-12 w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 3.5, ease: "easeInOut" }}
                className="h-full w-full bg-gradient-to-r from-sky-400 via-emerald-400 to-sky-400"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
