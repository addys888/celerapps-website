"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Upload, Phone, FileText, Brain, ArrowRight, Repeat, 
  Mic, Clock, Banknote, BarChart3 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// --- DIALKARO JOURNEY ---
const DIALKARO_STEPS = [
  {
    step: "01", icon: Upload, title: "Upload Your Leads",
    desc: "Drop any Excel or CSV file — DialKaro reads it instantly, cleans numbers, and auto-maps columns. No formatting required.",
    product: "DialKaro", color: "sky",
  },
  {
    step: "02", icon: Phone, title: "Call & Tag Outcomes",
    desc: "One tap to call via WhatsApp or phone. Tag each lead: Interested, Callback, No Answer. The queue advances automatically.",
    product: "DialKaro", color: "sky",
  },
  {
    step: "03", icon: Brain, title: "AI Generates Your Report",
    desc: "After your session, Claude AI writes a complete summary — hot leads, callbacks, success rate — ready to share on WhatsApp.",
    product: "AI Engine", color: "purple",
  },
  {
    step: "04", icon: BarChart3, title: "Track Analytics",
    desc: "Monitor team performance with live charts, call volumes, and leaderboards directly in the admin dashboard.",
    product: "DialKaro", color: "sky",
  },
  {
    step: "05", icon: Repeat, title: "Repeat & Scale",
    desc: "Every session improves your conversion rate. AI learns your team's patterns and highlights the best-performing strategies.",
    product: "AI Engine", color: "emerald",
  },
];

// --- BILLKARO JOURNEY ---
const BILLKARO_STEPS = [
  {
    step: "01", icon: Mic, title: "Say or Type",
    desc: "Just say 'Bill 5000 to Rahul for AC repair' via a voice note or text message in Hindi, English, or Hinglish.",
    product: "BillKaro", color: "emerald",
  },
  {
    step: "02", icon: Brain, title: "AI Parses Details",
    desc: "Our AI engine automatically extracts the amount, client name, items, and calculates GST without any manual data entry.",
    product: "AI Engine", color: "purple",
  },
  {
    step: "03", icon: FileText, title: "Confirm & Send",
    desc: "Review the generated GST-compliant invoice preview right inside WhatsApp, and tap 'Send' to deliver it to your client.",
    product: "BillKaro", color: "emerald",
  },
  {
    step: "04", icon: Clock, title: "Auto-Chasers Kick In",
    desc: "If unpaid, BillKaro sends polite, automated WhatsApp reminders on the due date, D+3, and D+7 to chase the payment.",
    product: "BillKaro", color: "amber",
  },
  {
    step: "05", icon: Banknote, title: "Collect Payment (Zero MDR)",
    desc: "Clients pay via the attached UPI link. Money goes straight to your bank account with absolutely zero transaction fees.",
    product: "BillKaro", color: "emerald",
  },
];

const COLOR_MAP: Record<string, { border: string; glow: string; ring: string; text: string; bg: string; grad: string }> = {
  sky:     { border: "border-sky-500/30",     glow: "rgba(14,165,233,0.08)",    ring: "ring-sky-500/30",     text: "text-sky-400",     bg: "bg-sky-500/10",     grad: "#0ea5e9,#6366f1" },
  indigo:  { border: "border-indigo-500/30",  glow: "rgba(99,102,241,0.08)",    ring: "ring-indigo-500/30",  text: "text-indigo-400",  bg: "bg-indigo-500/10",  grad: "#6366f1,#a855f7" },
  purple:  { border: "border-purple-500/30",  glow: "rgba(168,85,247,0.08)",    ring: "ring-purple-500/30",  text: "text-purple-400",  bg: "bg-purple-500/10",  grad: "#a855f7,#ec4899" },
  emerald: { border: "border-emerald-500/30", glow: "rgba(16,185,129,0.08)",    ring: "ring-emerald-500/30", text: "text-emerald-400", bg: "bg-emerald-500/10", grad: "#10b981,#0ea5e9" },
  amber:   { border: "border-amber-500/30",   glow: "rgba(245,158,11,0.08)",    ring: "ring-amber-500/30",   text: "text-amber-400",   bg: "bg-amber-500/10",   grad: "#f59e0b,#ef4444" },
};

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"dialkaro" | "billkaro">("dialkaro");
  const [activeStep, setActiveStep] = useState(0);
  
  const currentSteps = activeTab === "dialkaro" ? DIALKARO_STEPS : BILLKARO_STEPS;
  const s = currentSteps[activeStep];
  const cm = COLOR_MAP[s.color];

  const handleTabSwitch = (tab: "dialkaro" | "billkaro") => {
    setActiveTab(tab);
    setActiveStep(0); // Reset progress when switching tabs
  };

  return (
    <section className="section relative overflow-hidden py-24">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <Badge variant="brand" className="mb-4">How It Works</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Designed for <span className="gradient-text">Absolute Speed</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Choose a product to see how CelerApps automates your daily workflows from start to finish.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-[#0a0d1a] border border-white/[0.08] p-1.5 rounded-2xl relative z-10 shadow-xl">
            <button 
              onClick={() => handleTabSwitch("dialkaro")} 
              className={cn(
                "px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300", 
                activeTab === "dialkaro" ? "bg-sky-500/15 text-sky-400 shadow-sm" : "text-slate-400 hover:text-white"
              )}
            >
              DialKaro Journey
            </button>
            <button 
              onClick={() => handleTabSwitch("billkaro")} 
              className={cn(
                "px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300", 
                activeTab === "billkaro" ? "bg-emerald-500/15 text-emerald-400 shadow-sm" : "text-slate-400 hover:text-white"
              )}
            >
              BillKaro Journey
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Step list */}
          <div className="space-y-3">
            {currentSteps.map((step, i) => {
              const cm2 = COLOR_MAP[step.color];
              const isActive = activeStep === i;
              
              return (
                <motion.button
                  key={`${activeTab}-${i}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setActiveStep(i)}
                  className={cn(
                    "w-full text-left flex items-start gap-4 p-4 rounded-2xl border transition-all duration-200",
                    isActive
                      ? `border ${cm2.border} ring-1 ${cm2.ring}`
                      : "border-white/[0.06] hover:border-white/[0.1] hover:bg-white/[0.02]"
                  )}
                  style={isActive ? { background: `linear-gradient(135deg, ${cm2.glow}, transparent)` } : {}}
                >
                  <div className={cn(
                    "h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200",
                    isActive ? cm2.bg : "bg-white/5",
                  )}>
                    <step.icon className={cn("h-4 w-4 transition-colors duration-200", isActive ? cm2.text : "text-slate-500")} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={cn("text-[10px] font-bold uppercase tracking-widest", isActive ? cm2.text : "text-slate-600")}>Step {step.step}</span>
                      <span className={cn("text-[10px] px-2 py-0.5 rounded-full border", isActive ? `${cm2.bg} ${cm2.text} ${cm2.border}` : "bg-white/5 text-slate-600 border-white/[0.06]")}>{step.product}</span>
                    </div>
                    <p className={cn("text-base font-semibold transition-colors", isActive ? "text-white" : "text-slate-400")}>{step.title}</p>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-sm text-slate-400 mt-2 leading-relaxed overflow-hidden"
                        >
                          {step.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <ArrowRight className={cn("h-5 w-5 flex-shrink-0 mt-1 transition-all duration-200", isActive ? `${cm2.text} translate-x-1` : "text-slate-700 opacity-0")} />
                </motion.button>
              );
            })}
          </div>

          {/* Visual panel */}
          <div className="lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${activeStep}`}
                initial={{ opacity: 0, x: 24, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -24, scale: 0.97 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={cn("relative p-8 rounded-3xl border shadow-2xl", cm.border)}
                style={{ background: `linear-gradient(155deg, ${cm.glow} 0%, transparent 80%), #0a0d1a` }}
              >
                {/* Product Badge */}
                <div className={cn("inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border text-xs font-semibold", cm.bg, cm.text, cm.border)}>
                  <span className="text-[10px] opacity-60">Step</span>
                  {s.step}
                  <span className="opacity-60">·</span>
                  {s.product}
                </div>

                {/* Dynamic Icon Container */}
                <div className={cn("h-20 w-20 rounded-2xl flex items-center justify-center mb-8 border relative overflow-hidden", cm.bg, cm.border)}>
                   <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at center, ${cm.text.split('-')[1]}, transparent)` }} />
                  <s.icon className={cn("h-10 w-10 relative z-10", cm.text)} />
                </div>

                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">{s.title}</h3>
                <p className="text-slate-300 leading-relaxed mb-10 text-lg">{s.desc}</p>

                {/* Progress bar */}
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider">
                    <span>Workflow Progress</span>
                    <span>{activeStep + 1} / {currentSteps.length}</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${cm.grad})` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${((activeStep + 1) / currentSteps.length) * 100}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-3 mt-8">
                  {activeStep > 0 && (
                    <button 
                      onClick={() => setActiveStep(activeStep - 1)} 
                      className="flex-1 py-3 rounded-xl border border-white/10 text-sm font-semibold text-slate-400 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all"
                    >
                      ← Back
                    </button>
                  )}
                  {activeStep < currentSteps.length - 1 && (
                    <button 
                      onClick={() => setActiveStep(activeStep + 1)} 
                      className={cn("flex-1 py-3 rounded-xl text-sm font-bold text-white transition-all hover:brightness-110 border", cm.bg.replace("/10", "/20"), cm.border)} 
                      style={{ background: `linear-gradient(135deg, ${cm.glow}, transparent)` }}
                    >
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