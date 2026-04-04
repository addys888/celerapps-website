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
      className="w-52 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-sky-500/15"
      style={{ background: "linear-gradient(160deg,#0c1628 0%,#060a14 100%)" }}
    >
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
      <div className="p-3 space-y-2">
        {/* Current contact */}
        <div className="bg-white/[0.04] rounded-xl p-2.5">
          <p className="text-[9px] text-slate-500 mb-1">Calling now</p>
          <p className="text-xs font-semibold text-white">Ramesh Verma</p>
          <p className="text-[10px] text-sky-400 mt-0.5">+91 987•• ••210</p>
          <div className="flex gap-0.5 mt-2 items-end h-5">
            {[3,6,9,5,8,4,7,10,6,8,4,6].map((h,i)=>(
              <div key={i} className="flex-1 rounded-sm bg-sky-500/50 animate-pulse-soft" style={{height:`${h*2}px`, animationDelay:`${i*80}ms`}} />
            ))}
          </div>
        </div>
        {/* Outcomes */}
        <div className="grid grid-cols-2 gap-1">
          {["🟢 Interested","🔔 Callback","📵 No Answer","🔴 Not Int."].map((o,i)=>(
            <button key={i} className={`text-[9px] py-1.5 px-1.5 rounded-lg border text-center transition-all ${i===0?"border-emerald-500/40 bg-emerald-500/10 text-emerald-300 font-medium":"border-white/[0.07] bg-white/[0.02] text-slate-500"}`}>{o}</button>
          ))}
        </div>
        {/* Stats */}
        <div className="grid grid-cols-3 bg-white/[0.03] rounded-xl divide-x divide-white/[0.06]">
          {[["47","Called"],["8","Hot"],["12","Left"]].map(([v,l])=>(
            <div key={l} className="py-2 text-center">
              <p className="text-xs font-bold text-white">{v}</p>
              <p className="text-[8px] text-slate-500">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function BillKaroCard() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      className="w-44 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/15"
      style={{ background: "linear-gradient(160deg,#0e0c26 0%,#060508 100%)" }}
    >
      <div className="px-3 pt-3 pb-2.5 border-b border-white/[0.07]">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-lg bg-indigo-500/20 flex items-center justify-center">
            <FileText className="h-3 w-3 text-indigo-400" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-white leading-none">BillKaro</p>
            <p className="text-[8px] text-slate-500">Invoicing</p>
          </div>
        </div>
      </div>
      <div className="p-3 space-y-2">
        <div className="bg-white/[0.04] rounded-xl p-2.5">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[8px] text-slate-500">Invoice #1042</p>
              <p className="text-sm font-bold text-white">₹24,500</p>
            </div>
            <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 font-medium">Paid ✓</span>
          </div>
          <p className="text-[9px] text-slate-500 mt-1">Rajesh Enterprises</p>
        </div>
        {/* WhatsApp row */}
        <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 rounded-xl px-2.5 py-2">
          <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a8.1 8.1 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
          </div>
          <span className="text-[9px] text-green-400 font-medium">Sent via WhatsApp</span>
        </div>
        {/* Mini bar chart */}
        <div>
          <div className="flex items-end gap-0.5 h-8">
            {[30,55,40,70,50,85,65].map((h,i)=>(
              <div key={i} className="flex-1 rounded-t-sm" style={{height:`${h}%`, background: i===5?"rgba(99,102,241,0.85)":"rgba(99,102,241,0.2)"}} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Floating labels ─── */
function FloatBadge({ children, className, delay=0 }: { children: React.ReactNode; className: string; delay?: number }) {
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
    initial:    { opacity: 0, y: 28 },
    animate:    { opacity: 1, y:  0 },
    transition: { duration: 0.6, delay, ease: [0.22,1,0.36,1] },
  });

  return (
    <section className="pt-32 pb-20 container mx-auto px-4 md:px-8 overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(ellipse 90% 55% at 50% -5%, rgba(14,165,233,0.12), transparent)"}} />
      <div className="absolute top-1/4 -left-72 w-[560px] h-[560px] rounded-full bg-sky-600/8 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[440px] h-[440px] rounded-full bg-indigo-600/8 blur-[110px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Text & Buttons ── */}
          <div>
            <motion.div {...fadeUp(0)}>
              <Badge variant="brand" className="mb-5 text-[11px]">
                <Zap className="h-3 w-3 fill-sky-400 text-sky-400" />
                AI-Powered · Made for India
              </Badge>
            </motion.div>

            <motion.h1 {...fadeUp(0.08)} className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-6xl font-bold tracking-tight leading-[1.08] mb-5">
              Supercharge Your{" "}
              <span className="gradient-text">Business</span>{" "}
              with&nbsp;AI&#8209;Powered Apps
            </motion.h1>

            <motion.p {...fadeUp(0.16)} className="text-[1.05rem] text-slate-400 leading-relaxed mb-8 max-w-lg">
              Built for speed. Designed for India. Loved by thousands of businesses that needed tools built the way India works — on WhatsApp, in Hindi, at scale.
            </motion.p>

            <motion.div {...fadeUp(0.24)} className="flex flex-wrap gap-3 mb-10">
              <Button variant="primary" size="lg" asChild>
                <Link href="/dialkaro" className="gap-2">
                  <Phone className="h-4 w-4" />
                  Try DialKaro Free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/billkaro" className="gap-2">
                  <FileText className="h-4 w-4" />
                  Try BillKaro Free
                </Link>
              </Button>
            </motion.div>

            {/* Trust signals */}
            <motion.div {...fadeUp(0.35)}>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex -space-x-1.5">
                  {[["R","#0ea5e9"],["P","#6366f1"],["A","#10b981"],["S","#f59e0b"],["M","#ec4899"]].map(([l,c],i)=>(
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-[#050810] flex items-center justify-center text-[11px] font-bold text-white" style={{background:c}}>{l}</div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_,i)=><Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />)}
                    <span className="text-xs font-semibold text-white ml-1">4.9/5</span>
                  </div>
                  <p className="text-xs text-slate-500">Trusted by <span className="text-white font-semibold">10,000+</span> Indian businesses</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Reliance DSA","HDFC Partners","BajajFin Network","EdTech Hub","RE Brokers"].map(logo=>(
                  <span key={logo} className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.07] text-[11px] text-slate-500">{logo}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: mockups (THE SILVER BULLET FIX) ── */}
          <div className="relative w-full flex justify-center lg:justify-end mt-16 lg:mt-0 -mb-28 sm:-mb-10 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y:  0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.22,1,0.36,1] }}
              className="relative w-[500px] shrink-0 flex justify-center items-start transform scale-[0.65] sm:scale-80 lg:scale-100 origin-top lg:origin-center"
            >
              {/* Glow behind */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-72 h-72 rounded-full bg-sky-500/10 blur-3xl" />
              </div>

              {/* Cards */}
              <div className="relative pt-8 flex gap-5 items-start">
                <DialKaroCard />
                <div className="pt-16">
                  <BillKaroCard />
                </div>
              </div>

              {/* Floating badges */}
              <FloatBadge delay={0.9} className="absolute top-4 right-0 flex items-center gap-2 px-3 py-2 rounded-xl bg-sky-500/10 border border-sky-500/25 backdrop-blur-sm text-[11px] text-sky-300 font-medium">
                <Zap className="h-3 w-3" /> AI Summary Ready
              </FloatBadge>

              <FloatBadge delay={1.3} className="absolute bottom-12 left-0 flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/25 backdrop-blur-sm">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <div>
                  <p className="text-[11px] font-semibold text-white leading-none">₹24,500 Received</p>
                  <p className="text-[9px] text-slate-500 mt-0.5">via UPI · just now</p>
                </div>
              </FloatBadge>

              <FloatBadge delay={1.6} className="absolute top-[42%] -left-4 flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.09] backdrop-blur-sm">
                <TrendingUp className="h-3.5 w-3.5 text-sky-400" />
                <div>
                  <p className="text-[11px] font-bold text-white">+34% calls/day</p>
                  <p className="text-[9px] text-slate-500">vs manual dialing</p>
                </div>
              </FloatBadge>

              <FloatBadge delay={2.0} className="absolute bottom-4 right-4 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/25 text-[10px] text-indigo-300">
                <Users className="h-3 w-3" /> 248 businesses joined today
              </FloatBadge>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#050810] to-transparent pointer-events-none" />
    </section>
  );
}
