"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, FileText, ChevronDown, Menu, X, Zap, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const PRODUCTS = [
  {
    name: "DialKaro", href: "/dialkaro",
    desc: "AI-powered sales dialer + WhatsApp calling",
    icon: Phone, color: "text-sky-400", bg: "bg-sky-500/10",
  },
  {
    name: "BillKaro", href: "/billkaro",
    desc: "WhatsApp-first smart invoicing & collections",
    icon: FileText, color: "text-indigo-400", bg: "bg-indigo-500/10",
  },
];

const NAV = [
  { label: "Solutions", href: "/#why"      },
  { label: "Pricing",   href: "/#pricing"  },
  { label: "Blog",      href: "/blog"     },
  { label: "Contact",   href: "/contact"   },
];

import { useLoading } from "@/components/providers/LoadingProvider";

export function Navbar() {
  const { isLoading } = useLoading();
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen,   setDropOpen]   = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={isLoading ? { y: -72, opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#050810]/88 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl shadow-black/50"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-8">

            {/* ── Logo ── */}
         {/*}   <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="relative h-8 w-8 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-sky-500/30 group-hover:shadow-sky-500/50 transition-shadow duration-300">
                <Zap className="h-4 w-4 text-white fill-white" />
                <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-sky-300 animate-[pulseSoft_3s_ease-in-out_infinite]" />
              </div>
              <span className="text-[15px] font-semibold tracking-tight">
                <span className="text-white">Celer</span>
                <span className="gradient-text">Apps</span>
              </span>
            </Link>{*/}

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <Image 
                src="/logo.png" 
                alt="CelerApps Logo" 
                width={32} 
                height={32} 
                className="rounded-lg object-contain group-hover:opacity-80 transition-opacity"
              />
              <span className="text-[15px] font-semibold tracking-tight">
                <span className="text-white">Celer</span>
                <span className="gradient-text">Apps</span>
              </span>
            </Link>
            
            {/* ── Desktop nav ── */}
            <nav className="hidden md:flex items-center gap-0.5 flex-1">

              {/* Products dropdown */}
              <div ref={dropRef} className="relative">
                <button
                  onClick={() => setDropOpen(!dropOpen)}
                  className={cn(
                    "flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors",
                    dropOpen ? "text-white bg-white/[0.06]" : "text-slate-400 hover:text-white hover:bg-white/5",
                  )}
                >
                  Products
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", dropOpen && "rotate-180")} />
                </button>

                <AnimatePresence>
                  {dropOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y:  0, scale: 1    }}
                      exit={  { opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-[#0c1022]/96 backdrop-blur-2xl border border-white/[0.08] shadow-2xl shadow-black/60 overflow-hidden"
                    >
                      <div className="p-2">
                        <p className="px-3 pt-2 pb-1.5 text-[10px] font-semibold uppercase tracking-widest text-slate-600">Our Products</p>
                        {PRODUCTS.map((p) => (
                          <Link
                            key={p.name}
                            href={p.href}
                            onClick={() => setDropOpen(false)}
                            className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                          >
                            <div className={cn("h-9 w-9 rounded-xl flex items-center justify-center flex-shrink-0", p.bg)}>
                              <p.icon className={cn("h-4 w-4", p.color)} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-white group-hover/item:text-sky-300 transition-colors">{p.name}</p>
                              <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{p.desc}</p>
                            </div>
                            <ArrowRight className="h-3.5 w-3.5 text-slate-600 group-hover/item:text-sky-400 group-hover/item:translate-x-0.5 transition-all" />
                          </Link>
                        ))}
                        <div className="mx-3 mt-1 mb-1 h-px bg-white/[0.06]" />
                        <Link
                          href="#products"
                          onClick={() => setDropOpen(false)}
                          className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-medium text-sky-400 hover:bg-sky-500/10 transition-colors"
                        >
                          <Sparkles className="h-3.5 w-3.5" />
                          View all products
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {NAV.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* ── Desktop CTAs ── */}
            <div className="hidden md:flex items-center gap-2 flex-shrink-0">
              <Button variant="primary" size="sm" asChild>
                <Link href="/#products" className="gap-1.5">
                  Get Started Free <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>

            {/* ── Mobile toggle ── */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={  { opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#050810]/98 backdrop-blur-2xl border-b border-white/[0.07] overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-1">
              <p className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-widest text-slate-600">Products</p>
              {PRODUCTS.map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className={cn("h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0", p.bg)}>
                    <p.icon className={cn("h-4 w-4", p.color)} />
                  </div>
                  <span className="text-sm font-medium text-white">{p.name}</span>
                </Link>
              ))}
              <div className="h-px bg-white/[0.06] my-2" />
              {NAV.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <div className="h-px bg-white/[0.06] my-2" />
              <div className="flex flex-col gap-2 pt-1">
                <Button variant="primary" size="md" asChild className="w-full justify-center">
                  <Link href="/#products" onClick={() => setMobileOpen(false)}>Get Started Free</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}