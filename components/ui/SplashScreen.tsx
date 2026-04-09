"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); 
    }, 3000); // Slightly longer for the focus effect

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.5, // Zoom-through expansion
            filter: "blur(40px)",
            transition: { duration: 1.2, ease: [0.7, 0, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050810] overflow-hidden"
        >
          {/* Background Immersive Elements */}
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{background: "radial-gradient(circle at center, rgba(14,165,233,0.15) 0%, transparent 70%)"}} 
          />
          
          <div className="relative flex flex-col items-center gap-10">
            {/* Logo Container with Focus Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative h-32 w-32 sm:h-44 sm:w-44"
            >
              <Image
                src="/brand-icon.png"
                alt="CelerApps Logo"
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(56,189,248,0.4)]"
                style={{ 
                  filter: "invert(1) hue-rotate(180deg) brightness(1.2) contrast(1.1)",
                  mixBlendMode: "screen"
                }}
                priority
              />
              
              {/* Pulsing Outer Glow */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-sky-500/20 rounded-full blur-3xl -z-10"
              />
            </motion.div>

            {/* Subtext Reveal */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-2"
              >
                <span className="text-3xl sm:text-5xl font-bold tracking-tighter text-white">
                  Celer
                </span>
                <span className="text-3xl sm:text-5xl font-bold tracking-tighter bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
                  Apps
                </span>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="text-slate-500 text-sm sm:text-base tracking-[0.2em] uppercase mt-3 font-medium text-center"
              >
                Fast • Intelligent • Built for India
              </motion.p>
            </div>

            {/* Bottom Progress Bar */}
            <div className="absolute -bottom-24 w-48 h-[1px] bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2.8, ease: "easeInOut" }}
                className="h-full w-full bg-gradient-to-r from-sky-400 via-indigo-500 to-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.6)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
