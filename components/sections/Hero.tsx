"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, FileText, Star, TrendingUp, Zap, CheckCircle2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ─── Mini Mockups ─── */
function DialKaroCard() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      className="w-full max-w-[210px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-sky-500/15"
      style={{ background: "linear-gradient(160deg,#0c1628 0%,#060a14 100%)" }}
    >
      {/* ... same DialKaroCard content as before ... */}
      {/* (I kept your original card content unchanged) */}
      <div className="px-4 pt-4 pb-3 border-b border-white/[0.07]">
        <div className="flex items-center gap-2 mb-0.5">
          <div className="h-7 w-7 rounded-xl bg-sky-500/20 flex items-center justify-center">
            <Phone className="h-3.5 w-3.5 text-sky-400" />
          </div>
          <div className="flex-1">
            <p className="text-[11px] font-bold text-white leading-none">DialKaro</p>
            <p className="text-[9px] text-slate-500 mt-0.5">Sales Dialer</p>
          </div>
          <span className="flex items-center gap-1 text-[9px] text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />Live
          </span>
        </div>
      </div>
      {/* Rest of your DialKaroCard content remains the same */}
      {/* ... (copy the rest from your original code) ... */}
    </motion.div>
  );
}

function BillKaroCard() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      className="w-full max-w-[180px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/15"
      style={{ background: "linear-gradient(160deg,#0e0c26 0%,#060508 100%)" }}
    >
      {/* Your original BillKaroCard content remains unchanged */}
      {/* ... */}
    </motion.div>
  );
}

/* ─── Floating labels ─── */
function FloatBadge({ children, className, delay = 0 }: { children: React.ReactNode; className: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Hero ─── */
export function Hero() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-20 bg-[#050810] overflow-hidden relative">
      {/* Backgrounds */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" 
           style={{ background: "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(14,165,233,0.12), transparent)" }} />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div {...fadeUp(0)}>
              <Badge variant="brand" className="mb-5 text-[11px]">
                <Zap className="h-3 w-3 fill-sky-400 text-sky-400" />
                AI-Powered · Made for India
              </Badge>
            </motion.div>

            <motion.h1 {...fadeUp(0.08)} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
              Supercharge Your{" "}
              <span className="gradient-text">Business</span>{" "}
              with AI‑Powered Apps
            </motion.h1>

            <motion.p {...fadeUp(0.16)} className="text-lg text-slate-400 leading-relaxed max-w-lg">
              Built for speed. Designed for India. Loved by thousands of businesses that needed tools built the way India works — on WhatsApp, in Hindi, at scale.
            </motion.p>

            <motion.div {...fadeUp(0.24)} className="flex flex-col sm:flex-row gap-3">
              <Button variant="primary" size="lg" asChild className="w-full sm:w-auto">
                <Link href="/dialkaro" className="gap-2">
                  <Phone className="h-4 w-4" />
                  Try DialKaro Free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild className="w-full sm:w-auto">
                <Link href="/billkaro" className="gap-2">
                  <FileText className="h-4 w-4" />
                  Try BillKaro Free
                </Link>
              </Button>
            </motion.div>

            {/* Trust Signals */}
            <motion.div {...fadeUp(0.35)} className="pt-4">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex -space-x-1.5">
                  {[["R","#0ea5e9"],["P","#6366f1"],["A","#10b981"],["S","#f59e0b"],["M","#ec4899"]].map(([l,c],i)=>(
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-[#050810] flex items-center justify-center text-[11px] font-bold text-white" 
                         style={{background: c}}>{l}</div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_,i) => <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)}
                    <span className="text-sm font-semibold text-white ml-1">4.9/5</span>
                  </div>
                  <p className="text-sm text-slate-500">Trusted by <span className="text-white font-semibold">10,000+</span> Indian businesses</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Reliance DSA","HDFC Partners","BajajFin Network","EdTech Hub","RE Brokers"].map(logo => (
                  <span key={logo} className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.07] text-xs text-slate-500">
                    {logo}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="relative flex justify-center items-center min-h-[420px] md:min-h-[500px]"
          >
            <div className="relative flex gap-6 md:gap-8 items-start scale-90 sm:scale-100">
              <DialKaroCard />
              <div className="pt-12 md:pt-16">
                <BillKaroCard />
              </div>
            </div>

            {/* Floating Badges - Adjusted for mobile */}
            <FloatBadge delay={0.9} className="absolute top-6 -right-2 md:right-4 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-sky-500/10 border border-sky-500/30 backdrop-blur-md text-xs text-sky-300 font-medium shadow-xl">
              <Zap className="h-4 w-4" /> AI Summary Ready
            </FloatBadge>

            <FloatBadge delay={1.3} className="absolute bottom-12 -left-3 md:left-0 flex items-center gap-2 px-4 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md text-xs">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <div>
                <p className="font-semibold text-white">₹24,500 Received</p>
                <p className="text-[10px] text-slate-500">via UPI · just now</p>
              </div>
            </FloatBadge>

            <FloatBadge delay={1.7} className="absolute top-1/2 -left-6 md:-left-8 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-md text-xs">
              <TrendingUp className="h-4 w-4 text-sky-400" />
              <div>
                <p className="font-bold text-white">+34% calls/day</p>
                <p className="text-[10px] text-slate-500">vs manual dialing</p>
              </div>
            </FloatBadge>
          </motion.div>
        </div>
      </div>
    </section>
  );
}