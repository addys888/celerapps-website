"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, FileText, Star, TrendingUp, Zap, CheckCircle2, Users } from "lucide-react";
import { useLoading } from "@/components/providers/LoadingProvider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ─── Mini Mockups ─── */
function DialKaroCard() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      className="w-[168px] sm:w-52 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-sky-500/15 flex-shrink-0"
      style={{ background: "linear-gradient(160deg,#0c1628 0%,#060a14 100%)" }}
    >
      <div className="px-3 pt-3 pb-2.5 border-b border-white/[0.07]">
        <div className="flex items-center gap-2 mb-0.5">
          <div className="h-6 w-6 rounded-xl bg-sky-500/20 flex items-center justify-center flex-shrink-0">
            <Phone className="h-3 w-3 text-sky-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold text-white leading-none">DialKaro</p>
            <p className="text-[9px] text-slate-500 mt-0.5">Sales Dialer</p>
          </div>
          <span className="flex items-center gap-1 text-[9px] text-emerald-400 flex-shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />Live
          </span>
        </div>
      </div>
      <div className="p-2.5 space-y-2">
        <div className="bg-white/[0.04] rounded-xl p-2">
          <p className="text-[9px] text-slate-500 mb-1">Calling now</p>
          <p className="text-[11px] font-semibold text-white">Ramesh Verma</p>
          <p className="text-[9px] text-sky-400 mt-0.5">+91 987•• ••210</p>
          <div className="flex gap-0.5 mt-1.5 items-end h-4">
            {[3,6,9,5,8,4,7,10,6,8,4,6].map((h,i)=>(
              <div key={i} className="flex-1 rounded-sm bg-sky-500/50" style={{height:`${h*1.5}px`}} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1">
          {["🟢 Int.","🔔 CB","📵 NA","🔴 NI"].map((o,i)=>(
            <button key={i} className={`text-[8px] py-1 px-1 rounded-lg border text-center ${i===0?"border-emerald-500/40 bg-emerald-500/10 text-emerald-300 font-medium":"border-white/[0.07] bg-white/[0.02] text-slate-500"}`}>{o}</button>
          ))}
        </div>
        <div className="grid grid-cols-3 bg-white/[0.03] rounded-xl divide-x divide-white/[0.06]">
          {[["47","Called"],["8","Hot"],["12","Left"]].map(([v,l])=>(
            <div key={l} className="py-1.5 text-center">
              <p className="text-[11px] font-bold text-white">{v}</p>
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
      className="w-[140px] sm:w-44 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/15 flex-shrink-0"
      style={{ background: "linear-gradient(160deg,#0e0c26 0%,#060508 100%)" }}
    >
      <div className="px-3 pt-3 pb-2.5 border-b border-white/[0.07]">
        <div className="flex items-center gap-1.5">
          <div className="h-6 w-6 rounded-lg bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
            <FileText className="h-3 w-3 text-indigo-400" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-white leading-none">BillKaro</p>
            <p className="text-[8px] text-slate-500">Invoicing</p>
          </div>
        </div>
      </div>
      <div className="p-2.5 space-y-2">
        <div className="bg-white/[0.04] rounded-xl p-2">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[8px] text-slate-500">Invoice #1042</p>
              <p className="text-xs font-bold text-white">₹24,500</p>
            </div>
            <span className="text-[7px] px-1 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 font-medium">Paid ✓</span>
          </div>
          <p className="text-[8px] text-slate-500 mt-1">Rajesh Enterprises</p>
        </div>
        <div className="flex items-center gap-1 bg-green-500/10 border border-green-500/20 rounded-xl px-2 py-1.5">
          <div className="h-3.5 w-3.5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" className="h-2 w-2 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a8.1 8.1 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
          </div>
          <span className="text-[8px] text-green-400 font-medium">Via WhatsApp</span>
        </div>
        <div className="flex items-end gap-0.5 h-7">
          {[30,55,40,70,50,85,65].map((h,i)=>(
            <div key={i} className="flex-1 rounded-t-sm" style={{height:`${h}%`, background: i===5?"rgba(99,102,241,0.85)":"rgba(99,102,241,0.2)"}} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Floating Badge ─── */
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
  const { isLoading } = useLoading();

  const fadeUp = (delay = 0) => ({
    initial:    { opacity: 0, y: 28 },
    animate:    isLoading ? { opacity: 0, y: 28 } : { opacity: 1, y:  0 },
    transition: { duration: 0.6, delay: delay + 0.2, ease: [0.22,1,0.36,1] },
  });

  return (
    // ✅ FIX 1: section has NO padding — single source of padding lives in the inner div only
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">

      {/* Backgrounds */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none"
        style={{background:"radial-gradient(ellipse 90% 55% at 50% -5%, rgba(14,165,233,0.12), transparent)"}} />
      <div className="absolute top-1/4 -left-72 w-[560px] h-[560px] rounded-full bg-sky-600/8 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[440px] h-[440px] rounded-full bg-indigo-600/8 blur-[110px] pointer-events-none" />

      {/* ✅ FIX 2: ONE container div, consistent px-4 sm:px-6 lg:px-8, no double padding */}
      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* ── Left: Copy ── */}
          <div className="flex flex-col">
            <motion.div {...fadeUp(0)}>
              <Badge variant="brand" className="mb-5 text-[11px] self-start">
                <Zap className="h-3 w-3 fill-sky-400 text-sky-400" />
                AI-Powered · Made for India
              </Badge>
            </motion.div>

            <motion.h1
              {...fadeUp(0.08)}
              className="text-4xl sm:text-5xl lg:text-[3.2rem] xl:text-6xl font-bold tracking-tight leading-[1.1] mb-5"
            >
              Supercharge Your{" "}
              <span className="gradient-text">Business</span>{" "}
              with AI&#8209;Powered Apps
            </motion.h1>

            <motion.p {...fadeUp(0.16)} className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              Built for speed. Designed for India. Loved by thousands of businesses that needed tools built the way India works — on WhatsApp, in Hindi, at scale.
            </motion.p>

            {/* ✅ FIX 3: Buttons stack properly on mobile with flex-col sm:flex-row */}
            <motion.div {...fadeUp(0.24)} className="flex flex-col sm:flex-row gap-3 mb-10">
              <Button variant="primary" size="lg" asChild className="w-full sm:w-auto">
                <Link href="/dialkaro" className="gap-2 justify-center">
                  <Phone className="h-4 w-4" />
                  Try DialKaro Free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild className="w-full sm:w-auto">
                <Link href="/billkaro" className="gap-2 justify-center">
                  <FileText className="h-4 w-4" />
                  Try BillKaro Free
                </Link>
              </Button>
            </motion.div>

            {/* Trust signals */}
            <motion.div {...fadeUp(0.35)}>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex -space-x-1.5">
                  {[["R","#0ea5e9"],["P","#6366f1"],["A","#10b981"],["S","#f59e0b"],["M","#ec4899"]].map(([l,c],i)=>(
                    <div key={i} className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 border-[#050810] flex items-center justify-center text-[10px] sm:text-[11px] font-bold text-white" style={{background:c}}>{l}</div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_,i)=><Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />)}
                    <span className="text-xs font-semibold text-white ml-1">4.9/5</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Trusted by <span className="text-white font-semibold">10,000+</span> Indian businesses
                  </p>
                </div>
              </div>
              {/* ✅ FIX 4: Logo pills wrap correctly on mobile */}
              <div className="flex flex-wrap gap-2">
                {["Reliance DSA","HDFC Partners","BajajFin Network","EdTech Hub","RE Brokers"].map(logo=>(
                  <span key={logo} className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.07] text-[11px] text-slate-500">
                    {logo}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: Mockups ── */}
          {/* ✅ FIX 5: hidden on mobile, shown from lg. On mobile the left col alone is the full hero */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isLoading ? { opacity: 0, x: 40 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.4, ease: [0.22,1,0.36,1] }}
            className="hidden lg:flex relative justify-center items-start min-h-[460px]"
          >
            {/* Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 rounded-full bg-sky-500/8 blur-3xl" />
            </div>

            {/* Cards */}
            <div className="relative pt-8 flex gap-5 items-start">
              <DialKaroCard />
              <div className="pt-16">
                <BillKaroCard />
              </div>
            </div>

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

            <FloatBadge delay={1.6} className="absolute top-[42%] -left-2 flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.09] backdrop-blur-sm">
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

          {/* ✅ FIX 6: Mobile-only compact mockup preview — scaled down, centered */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isLoading ? { opacity: 0, y: 24 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="lg:hidden flex justify-center items-start gap-4 pt-2 pb-4"
          >
            <DialKaroCard />
            <div className="pt-10">
              <BillKaroCard />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#050810] to-transparent pointer-events-none" />
    </section>
  );
}
