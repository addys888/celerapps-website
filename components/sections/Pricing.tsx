"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const DIALKARO_PLANS = [
  {
    name: "Starter",
    price: "₹2,999",
    period: "per month",
    description: "Perfect for small sales teams starting out.",
    features: [
      "Up to 5 sales reps",
      "Unlimited calls & leads",
      "AI Summary reports",
      "WhatsApp templates (6 langs)",
      "PDF & Excel exports",
    ],
    buttonText: "Get Started →",
    popular: false,
    color: "sky",
    href: "/book-demo?product=DialKaro"
  },
  {
    name: "Pro",
    price: "₹4,999",
    period: "per month",
    description: "For growing teams that need deep analytics.",
    features: [
      "Up to 15 sales reps",
      "Everything in Starter",
      "Admin Analytics Dashboard",
      "Team Leaderboard",
      "Priority WhatsApp support",
    ],
    buttonText: "Get Started →",
    popular: true,
    color: "sky",
    href: "/book-demo?product=DialKaro"
  },
  {
    name: "Enterprise",
    price: "₹7,999",
    period: "per month",
    description: "Maximum scale, security, and custom branding.",
    features: [
      "Unlimited sales reps",
      "Everything in Pro",
      "Custom branding",
      "Dedicated account manager",
      "NDA + DB ownership transfer",
    ],
    buttonText: "Contact Us →",
    popular: false,
    color: "sky",
    href: "/book-demo?product=DialKaro"
  },
];

const BILLKARO_PLANS = [
  {
    name: "Starter",
    price: "FREE",
    period: "forever",
    description: "Zero cost to start automating your invoices.",
    features: [
      "Up to 20 invoices/month",
      "Voice + text invoicing",
      "PDF with UPI QR code",
      "Basic auto-reminders",
      "WhatsApp OTP dashboard",
    ],
    buttonText: "Get Started Free →",
    popular: false,
    color: "emerald",
    href: "/book-demo?product=DialKaro"
  },
  {
    name: "Pro",
    price: "₹499",
    period: "per month",
    description: "Unlimited billing and full collection automation.",
    features: [
      "Unlimited invoices",
      "Everything in Starter",
      "Full auto-chaser sequence",
      "Client directory + scores",
      "Priority WhatsApp support",
    ],
    buttonText: "Start 7-Day Trial →",
    popular: true,
    color: "emerald",
    href: "/book-demo?product=DialKaro"
  },
  {
    name: "Business",
    price: "₹999",
    period: "per month",
    description: "Built for agencies and multi-user finance teams.",
    features: [
      "Everything in Pro",
      "Multi-user accounts",
      "Custom invoice branding",
      "CSV/Excel export",
      "Dedicated account manager",
    ],
    buttonText: "Contact Us →",
    popular: false,
    color: "emerald",
    href: "/book-demo?product=BillKaro"
  },
];

export function Pricing() {
  const [activeTab, setActiveTab] = useState<"dialkaro" | "billkaro">("dialkaro");
  const plans = activeTab === "dialkaro" ? DIALKARO_PLANS : BILLKARO_PLANS;

  return (
    <section id="pricing" className="section relative py-24 overflow-hidden border-t border-white/[0.08]">
      {/* Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[120px] -z-10 transition-colors duration-700 pointer-events-none"
        style={{ background: activeTab === "dialkaro" ? "rgba(14, 165, 233, 0.05)" : "rgba(16, 185, 129, 0.05)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <Badge variant="brand" className="mb-4">Simple Pricing</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            No hidden charges. <span className="gradient-text">Cancel anytime.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Choose the product and plan that fits your business scale.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-[#0a0d1a] border border-white/[0.08] p-1.5 rounded-2xl relative z-10 shadow-xl">
            <button 
              onClick={() => setActiveTab("dialkaro")} 
              className={cn(
                "px-8 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300", 
                activeTab === "dialkaro" ? "bg-sky-500/15 text-sky-400 shadow-sm" : "text-slate-400 hover:text-white"
              )}
            >
              DialKaro Plans
            </button>
            <button 
              onClick={() => setActiveTab("billkaro")} 
              className={cn(
                "px-8 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300", 
                activeTab === "billkaro" ? "bg-emerald-500/15 text-emerald-400 shadow-sm" : "text-slate-400 hover:text-white"
              )}
            >
              BillKaro Plans
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          <AnimatePresence mode="popLayout">
            {plans.map((plan, i) => (
              <motion.div
                key={`${activeTab}-${plan.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className={cn(
                  "relative flex flex-col p-8 rounded-3xl border bg-[#0a0d1a] h-full transition-all duration-300",
                  plan.popular 
                    ? activeTab === "dialkaro" ? "border-sky-500/40 shadow-[0_0_40px_rgba(14,165,233,0.1)] scale-105 z-10" : "border-emerald-500/40 shadow-[0_0_40px_rgba(16,185,129,0.1)] scale-105 z-10"
                    : "border-white/[0.08] hover:border-white/[0.2] scale-100"
                )}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className={cn(
                    "absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase",
                    activeTab === "dialkaro" ? "bg-sky-500 text-black" : "bg-emerald-500 text-black"
                  )}>
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={cn("text-xl font-bold mb-2", activeTab === "dialkaro" ? "text-sky-400" : "text-emerald-400")}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-extrabold text-white tracking-tight">{plan.price}</span>
                    <span className="text-sm font-medium text-slate-500">{plan.period}</span>
                  </div>
                  <p className="text-sm text-slate-400">{plan.description}</p>
                </div>

                <div className="flex-1">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className={cn(
                          "w-5 h-5 flex-shrink-0 mt-0.5", 
                          activeTab === "dialkaro" ? "text-sky-400" : "text-emerald-400"
                        )} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* <button className={cn(
                  "w-full py-3 px-6 rounded-xl text-sm font-bold transition-all duration-200",
                  plan.popular 
                    ? activeTab === "dialkaro" ? "bg-sky-500 text-black hover:bg-sky-400" : "bg-emerald-500 text-black hover:bg-emerald-400"
                    : "bg-white/[0.05] text-white border border-white/[0.1] hover:bg-white/[0.1]"
                )}>
                  {plan.buttonText}
                </button> */}
                <a 
                  href={plan.href}
                  className={cn(
                    "w-full py-3 px-6 rounded-xl text-sm font-bold transition-all duration-200 text-center block",
                    plan.popular 
                      ? activeTab === "dialkaro" ? "bg-sky-500 text-black hover:bg-sky-400" : "bg-emerald-500 text-black hover:bg-emerald-400"
                      : "bg-white/[0.05] text-white border border-white/[0.1] hover:bg-white/[0.1]"
                  )}
                >
                  {plan.buttonText}
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}