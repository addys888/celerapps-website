"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1200); 
    }, 4200); // 4.2s for a truly cinematic experience

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            transition: { duration: 1.2, ease: [0.7, 0, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050810] overflow-hidden"
        >
          {/* Background: Depth & Atmosphere */}
          <div className="absolute inset-0 grid-bg opacity-[0.07] pointer-events-none" />
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{background: "radial-gradient(circle at center, rgba(14,165,233,0.08) 0%, transparent 70%)"}} 
          />
          
          {/* Floating Particles for Immersive Depth */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 0.4, 0], 
                scale: [0, 1, 0],
                y: [0, -100 - (i * 20)],
                x: [(i - 3) * 30, (i - 3) * 40]
              }}
              transition={{ 
                duration: 4 + i, 
                repeat: Infinity, 
                delay: i * 0.5,
                ease: "easeOut" 
              }}
              className="absolute w-1 h-1 bg-sky-400 rounded-full blur-[1px]"
              style={{ 
                left: `${40 + (i * 4)}%`, 
                bottom: '30%' 
              }}
            />
          ))}

          <div className="relative flex flex-col items-center gap-14">
            {/* SVG Logo: Reconstructed for High-End Clarity */}
            <div className="relative h-36 w-36 sm:h-48 sm:w-48">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full"
              >
                <defs>
                  <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" /> {/* Sky 400 */}
                    <stop offset="100%" stopColor="#10b981" /> {/* Emerald 500 */}
                  </linearGradient>
                  
                  {/* Shimmer Effect */}
                  <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="white" stopOpacity="0" />
                    <stop offset="50%" stopColor="white" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  
                  <mask id="logoMask">
                    {/* Recreating the C + Arrow Shape as a Mask */}
                    <path
                      d="M75 50C75 63.8071 63.8071 75 50 75C36.1929 75 25 63.8071 25 50C25 36.1929 36.1929 25 50 25L20 80L80 20H55L80 20V45"
                      stroke="white"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                  </mask>
                </defs>

                {/* Primary Animated Paths */}
                <motion.path
                  d="M75 50C75 63.8071 63.8071 75 50 75C36.1929 75 25 63.8071 25 50C25 36.1929 36.1929 25 50 25"
                  stroke="url(#mainGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.8, ease: [0.65, 0, 0.35, 1] }}
                />

                <motion.path
                  d="M20 80L80 20M80 20H55M80 20V45"
                  stroke="url(#mainGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
                />

                {/* Moving Shimmer Sweep */}
                <motion.rect
                  x="-100"
                  y="0"
                  width="100"
                  height="100"
                  fill="url(#shimmerGradient)"
                  mask="url(#logoMask)"
                  animate={{ x: [0, 200] }}
                  transition={{ delay: 2.2, duration: 1.2, ease: "easeInOut" }}
                />
              </svg>
              
              {/* Dynamic Aura */}
              <motion.div
                animate={{ 
                  scale: [1, 1.4, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-sky-400/20 rounded-full blur-[80px] -z-10"
              />
            </div>

            {/* Typography */}
            <div className="flex flex-col items-center">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 2.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3"
                >
                  <span className="text-4xl sm:text-7xl font-black tracking-tighter text-white">
                    Celer
                  </span>
                  <span className="text-4xl sm:text-7xl font-black tracking-tighter bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                    Apps
                  </span>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, letterSpacing: "0.2em" }}
                animate={{ opacity: 1, letterSpacing: "0.5em" }}
                transition={{ delay: 3, duration: 1.5 }}
                className="mt-6 flex flex-col items-center gap-3"
              >
                <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
                <p className="text-slate-500 text-[10px] sm:text-xs uppercase font-extrabold text-center">
                  Augmenting AI Workflows
                </p>
              </motion.div>
            </div>

            {/* Subtle Progress Trace */}
            <div className="absolute bottom-6 w-56 h-[1px] bg-white/[0.03]">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 3.5, ease: "easeInOut" }}
                className="h-full w-full bg-gradient-to-r from-transparent via-sky-500/40 to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
