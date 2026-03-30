"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Brain, Zap, Shield, Settings, Flag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const FEATURES = [
  {
    icon: MessageCircle,
    title: "WhatsApp Native",
    desc: "Built around WhatsApp — where your customers already are. No app downloads, no onboarding friction.",
    color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20",
    glow: "rgba(16,185,129,0.08)",
  },
  {
    icon: Brain,
    title: "AI Intelligence",
    desc: "Claude AI powers daily summaries, smart reminders, and predictive collections — so you work smarter, not harder.",
    color: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/20",
    glow: "rgba(14,165,233,0.08)",
  },
  {
    icon: Zap,
    title: "Blazing Fast",
    desc: "Engineered for speed. Sub-second load times. One tap to call, one tap to invoice. Zero lag, zero excuses.",
    color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20",
    glow: "rgba(245,158,11,0.08)",
  },
  {
    icon: Flag,
    title: "Made in India",
    desc: "Built by Indians, for Indians. GST-ready, UPI-native, multi-language support, and priced for the Indian market.",
    color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20",
    glow: "rgba(249,115,22,0.08)",
  },
  {
    icon: Settings,
    title: "Zero Setup",
    desc: "Open browser, upload file, start selling. No IT team needed, no complex integrations, no training required.",
    color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20",
    glow: "rgba(99,102,241,0.08)",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Supabase-powered JWT auth, row-level security, encrypted data at rest. Trusted by regulated industries.",
    color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20",
    glow: "rgba(168,85,247,0.08)",
  },
];

export function WhyCelerApps() {
  return (
    <section id="why" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(ellipse 70% 50% at 50% 100%, rgba(14,165,233,0.06), transparent)"}} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity:0, y:32 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="brand" className="mb-4">Why CelerApps</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Everything Your Business{" "}<span className="gradient-text">Actually Needs</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Not another generic SaaS imported from the US. Tools built with deep understanding of how India does business.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, margin:"-50px" }}
              transition={{ duration:0.55, delay: (i % 3) * 0.1, ease:[0.22,1,0.36,1] }}
              whileHover={{ y:-4, transition:{ duration:0.2 } }}
              className={`relative p-6 rounded-2xl border transition-all duration-300 group cursor-default`}
              style={{
                background:`linear-gradient(155deg,${f.glow},transparent 60%), #0a0d1a`,
                borderColor: f.border.replace("border-",""),
              }}
            >
              {/* Icon */}
              <div className={`h-11 w-11 rounded-xl flex items-center justify-center mb-4 ${f.bg} border ${f.border}`}>
                <f.icon className={`h-5 w-5 ${f.color}`} />
              </div>

              <h3 className="text-base font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>

              {/* Corner glow on hover */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                style={{background:`radial-gradient(circle at top left, ${f.glow} 0%, transparent 60%)`}} />
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity:0 }} whileInView={{ opacity:1 }}
          viewport={{ once:true }} transition={{ duration:0.8, delay:0.4 }}
          className="text-center mt-14"
        >
          <p className="text-slate-500 text-sm">
            Trusted by sales teams, DSA networks, real estate brokers, and SMBs across{" "}
            <span className="text-white font-medium">28 states in India</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
