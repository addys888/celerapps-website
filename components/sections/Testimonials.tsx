"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TESTIMONIALS = [
  {
    name: "Rajesh Sharma",
    role: "DSA Team Lead",
    company: "FinLink DSA, Lucknow",
    avatar: "RS", 
    avatarBg: "#0ea5e9",
    rating: 5,
    text: "Before DialKaro, my 12-member team would manually dial from Excel all day. Now they call 3× more leads before lunch. The AI summary at end of day saves 45 minutes of reporting.",
    product: "DialKaro",
  },
  {
    name: "Priya Mehta",
    role: "Founder",
    company: "Mehta Interiors, Pune",
    avatar: "PM", 
    avatarBg: "#6366f1",
    rating: 5,
    text: "BillKaro changed how I collect payments. I send the invoice on WhatsApp and clients pay in minutes via UPI. My overdue invoices dropped from 40% to under 8% in two months.",
    product: "BillKaro",
  },
  {
    name: "Amit Gupta",
    role: "Sales Manager",
    company: "PropVista Realty, Noida",
    avatar: "AG", 
    avatarBg: "#10b981",
    rating: 5,
    text: "Our channel partners were losing leads because follow-ups weren't happening. DialKaro solved it completely. The jump-to-any-lead feature is brilliant for prioritizing hot leads.",
    product: "DialKaro",
  },
  {
    name: "Sunita Iyer",
    role: "Chartered Accountant",
    company: "Iyer & Associates, Chennai",
    avatar: "SI", 
    avatarBg: "#f59e0b",
    rating: 5,
    text: "I was using Tally + Excel + WhatsApp separately. BillKaro combined everything. GST-ready invoices sent on WhatsApp with UPI payment link — my clients love how professional it looks.",
    product: "BillKaro",
  },
  {
    name: "Mohammed Farouk",
    role: "Director",
    company: "Farouk FMCG Distributors, Hyderabad",
    avatar: "MF", 
    avatarBg: "#ec4899",
    rating: 5,
    text: "My sales team covers 200+ retailers weekly. DialKaro's session resume feature is a lifesaver — if the call drops or battery dies, they just continue from where they left off. Zero lead lost.",
    product: "DialKaro",
  },
  {
    name: "Kavya Nair",
    role: "EdTech Counsellor Lead",
    company: "BrightPath Academy, Bengaluru",
    avatar: "KN", 
    avatarBg: "#a855f7",
    rating: 5,
    text: "We generate 400+ Meta ad leads per week. DialKaro + BillKaro together is a complete pipeline — our counsellors call faster and when a student enrolls, BillKaro handles fee collection automatically.",
    product: "Both",
  },
];

const PRODUCT_BADGE: { [key: string]: string } = {
  DialKaro: "bg-sky-500/10 text-sky-400 border-sky-500/25",
  BillKaro: "bg-indigo-500/10 text-indigo-400 border-indigo-500/25",
  Both: "bg-purple-500/10 text-purple-400 border-purple-500/25",
};

export function Testimonials() {
  return (
    <section className="section relative overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(99,102,241,0.06), transparent)" }} 
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="indigo" className="mb-4">Social Proof</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Loved by <span className="gradient-text">Indian Businesses</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Real stories from real businesses — DSAs, realtors, freelancers, and SMBs across India.
          </p>
        </motion.div>

        {/* Masonry-ish grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
              className="relative p-6 rounded-2xl border border-white/[0.08] bg-[#0a0d1a] hover:border-white/[0.14] transition-all duration-300 group"
            >
              {/* Quote icon */}
              <Quote className="absolute top-5 right-5 h-6 w-6 text-white/5" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text with safely escaped quotes */}
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                &quot;{t.text}&quot;
              </p>

              {/* Footer */}
              <div className="flex items-center gap-3">
                <div 
                  className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0" 
                  style={{ background: t.avatarBg }}
                >
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500 truncate">{t.role} · {t.company}</p>
                </div>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border flex-shrink-0 ${PRODUCT_BADGE[t.product]}`}>
                  {t.product}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust */}
        <motion.div
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }} 
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
            <div className="flex -space-x-1.5">
              {["#0ea5e9", "#6366f1", "#10b981", "#f59e0b", "#ec4899"].map((c, i) => (
                <div key={i} className="h-7 w-7 rounded-full border-2 border-[#050810]" style={{ background: c }} />
              ))}
            </div>
            <p className="text-sm text-slate-400">
              Join <span className="text-white font-semibold">10,000+</span> businesses already using CelerApps
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}