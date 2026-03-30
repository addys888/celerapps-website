"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Phone, FileText, Brain, CheckCircle2, ArrowRight, Repeat } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    step: "01", icon: Upload, title: "Upload Your Leads",
    desc: "Drop any Excel or CSV file — DialKaro reads it instantly, cleans numbers, and auto-maps columns. No formatting required.",
    product: "DialKaro", productColor: "text-sky-400", productBg: "bg-sky-500/10",
    color: "sky",
  },
  {
    step: "02", icon: Phone, title: "Call & Tag Outcomes",
    desc: "One tap to call via WhatsApp or phone. Tag each lead: Interested, Callback, No Answer. The queue advances automatically.",
    product: "DialKaro", productColor: "text-sky-400", productBg: "bg-sky-500/10",
    color: "sky",
  },
  {
    step: "03", icon: Brain, title: "AI Generates Your Report",
    desc: "After your session, Claude AI writes a complete summary — hot leads, callbacks, success rate — ready to share on WhatsApp.",
    product: "AI Engine", productColor: "text-purple-400", productBg: "bg-purple-500/10",
    color: "purple",
  },
  {
    step: "04", icon: FileText, title: "Send Invoice via WhatsApp",
    desc: "Interested lead? Switch to BillKaro and send a professional GST invoice directly in their WhatsApp chat.",
    product: "BillKaro", productColor: "text-indigo-400", productBg: "bg-indigo-500/10",
    color: "indigo",
  },
  {
    step: "05", icon: CheckCircle2, title: "Collect Payment Instantly",
    desc: "Customers pay via UPI link in the WhatsApp message. BillKaro tracks it and auto-sends receipts.",
    product: "BillKaro", productColor: "text-indigo-400", productBg: "bg-indigo-500/10",
    color: "indigo",
  },
  {
    step: "06", icon: Repeat, title: "Repeat & Scale",
    desc: "Every session improves your conversion rate. AI learns your team's patterns and highlights the best-performing strategies.",
    product: "AI Engine", productColor: "text-emerald-400", productBg: "bg-emerald-500/10",
    color: "emerald",
  },
];

const COLOR_MAP: Record<string, { border: string; glow: string; ring: string }> = {
  sky:     { border: "border-sky-500/30",     glow: "rgba(14,165,233,0.08)",    ring: "ring-sky-500/30"     },
  indigo:  { border: "border-indigo-500/30",  glow: "rgba(99,102,241,0.08)",    ring: "ring-indigo-500/30"  },
  purple:  { border: "border-purple-500/30",  glow: "rgba(168,85,247,0.08)",    ring: "ring-purple-500/30"  },
  emerald: { border: "border-emerald-500/30", glow: "rgba(16,185,129,0.08)",    ring: "ring-emerald-500/30" },
};

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const s = STEPS[active];
  const cm = COLOR_MAP[s.color];

  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="brand" className="mb-4">How It Works</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            From Lead to{" "}<span className="gradient-text">Payment in 6 Steps</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            DialKaro and BillKaro work as one seamless pipeline — from first call to final payment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Step list */}
          <div className="space-y-2">
            {STEPS.map((step, i) => {
              const cm2 = COLOR_MAP[step.color];
              const isActive = active === i;
              return (
                <motion.button
                  key={i}
                  onClick={() => setActive(i)}
                  className={cn(
                    "w-full text-left flex items-start gap-4 p-4 rounded-2xl border transition-all duration-200",
                    isActive
                      ? `border ${cm2.border} ring-1 ${cm2.ring}`
                      : "border-white/[0.06] hover:border-white/[0.1] hover:bg-white/[0.02]",
                  )}
                  style={isActive ? { background:`linear-gradient(135deg,${cm2.glow},transparent)` } : {}}
                >
                  <div className={cn(
                    "h-9 w-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200",
                    isActive ? step.productBg : "bg-white/5",
                  )}>
                    <step.icon className={cn("h-4 w-4 transition-colors duration-200", isActive ? step.productColor : "text-slate-500")} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={cn("text-[10px] font-bold uppercase tracking-widest", isActive ? step.productColor : "text-slate-600")}>{step.step}</span>
                      <span className={cn("text-[10px] px-2 py-0.5 rounded-full border", isActive ? `${step.productBg} ${step.productColor} ${cm2.border}` : "bg-white/5 text-slate-600 border-white/[0.06]")}>{step.product}</span>
                    </div>
                    <p className={cn("text-sm font-semibold transition-colors", isActive ? "text-white" : "text-slate-400")}>{step.title}</p>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity:0, height:0 }}
                          animate={{ opacity:1, height:"auto" }}
                          exit={{ opacity:0, height:0 }}
                          transition={{ duration:0.2 }}
                          className="text-xs text-slate-400 mt-1.5 leading-relaxed overflow-hidden"
                        >
                          {step.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <ArrowRight className={cn("h-4 w-4 flex-shrink-0 mt-0.5 transition-all duration-200", isActive ? `${s.productColor} translate-x-0.5` : "text-slate-700")} />
                </motion.button>
              );
            })}
          </div>

          {/* Visual panel */}
          <div className="lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity:0, x:24, scale:0.97 }}
                animate={{ opacity:1, x:0,  scale:1    }}
                exit={  { opacity:0, x:-24, scale:0.97 }}
                transition={{ duration:0.3, ease:[0.22,1,0.36,1] }}
                className={cn("relative p-8 rounded-3xl border", cm.border)}
                style={{ background:`linear-gradient(155deg,${cm.glow} 0%,transparent 60%), #0a0d1a` }}
              >
                {/* Step number */}
                <div className={cn("inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border text-xs font-semibold", s.productBg, s.productColor, cm.border)}>
                  <span className="text-[10px] opacity-60">Step</span>
                  {s.step}
                  <span className="opacity-60">·</span>
                  {s.product}
                </div>

                {/* Icon */}
                <div className={cn("h-16 w-16 rounded-2xl flex items-center justify-center mb-6 border", s.productBg, cm.border)}>
                  <s.icon className={cn("h-8 w-8", s.productColor)} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8">{s.desc}</p>

                {/* Progress bar */}
                <div>
                  <div className="flex justify-between text-[11px] text-slate-500 mb-2">
                    <span>Progress through workflow</span>
                    <span>{active + 1} / {STEPS.length}</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className={cn("h-full rounded-full", s.productBg.replace("bg-","bg-").replace("/10",""))}
                      style={{ background:`linear-gradient(90deg,${s.color === "sky" ? "#0ea5e9,#6366f1" : s.color === "indigo" ? "#6366f1,#a855f7" : s.color === "purple" ? "#a855f7,#ec4899" : "#10b981,#0ea5e9"})` }}
                      initial={{ width:0 }}
                      animate={{ width:`${((active+1)/STEPS.length)*100}%` }}
                      transition={{ duration:0.4 }}
                    />
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-2 mt-6">
                  {active > 0 && (
                    <button onClick={() => setActive(active-1)} className="flex-1 py-2.5 rounded-xl border border-white/10 text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
                      ← Previous
                    </button>
                  )}
                  {active < STEPS.length-1 && (
                    <button onClick={() => setActive(active+1)} className={cn("flex-1 py-2.5 rounded-xl text-sm font-medium text-white transition-all hover:brightness-110", s.productBg.replace("/10","/20"))} style={{background:`linear-gradient(135deg,${cm.glow},transparent)`}}>
                      Next Step →
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
