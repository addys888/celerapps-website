"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const STATS = [
  { label: "Businesses Trust Us",  value: 500,  suffix: "+",   prefix: "",  decimals: 0, display: "50+" },
  { label: "Invoices Sent",         value: 12,    suffix: "K+",  prefix: "",  decimals: 1, display: "12K+" },
  { label: "Payment Recovery Rate", value: 98,     suffix: "%",   prefix: "",  decimals: 0, display: "98%"   },
  { label: "Average Rating",        value: 4.9,    suffix: "/5",  prefix: "",  decimals: 1, display: "4.9"   },
  { label: "States Covered",        value: 3,     suffix: "+",   prefix: "",  decimals: 0, display: "3+"   },
  { label: "Calls Made Daily",      value: 50,     suffix: "K+",  prefix: "",  decimals: 0, display: "50K+"  },
];

function StatItem({ stat, delay }: { stat: typeof STATS[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity:0, y:32 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }}
      transition={{ duration:0.6, delay }}
      className="text-center group"
    >
      <div className="relative inline-block">
        <span className="text-4xl sm:text-5xl font-bold gradient-text leading-none">
          {stat.display}
        </span>
        {/* Glow */}
        <div className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity bg-gradient-to-r from-sky-500 to-indigo-500 pointer-events-none" />
      </div>
      <p className="text-slate-400 text-sm mt-2 font-medium">{stat.label}</p>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Top & bottom borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{background:"linear-gradient(135deg, rgba(14,165,233,0.04) 0%, rgba(99,102,241,0.04) 50%, rgba(168,85,247,0.04) 100%)"}} />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity:0 }} whileInView={{ opacity:1 }}
          viewport={{ once:true }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-12"
        >
          Numbers that speak for themselves
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
          {STATS.map((s, i) => (
            <StatItem key={s.label} stat={s} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
