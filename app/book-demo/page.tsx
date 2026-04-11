"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Calendar, ArrowRight, CheckCircle2, Building2, User2, MessageSquare, MonitorPlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

/* ─── Product-specific content config ─── */
const PRODUCT_CONTENT = {
  DialKaro: {
    selectValue: "DialKaro (AI Sales Dialer)",
    headline: "DialKaro",
    tagline: "In Action",
    description: "Discover how 250+ sales reps are saving 58 minutes every single day. Book a personalized 1-on-1 demo with our product specialists.",
    benefits: [
      { title: "30-Minute Value Session", desc: "No boring slides. We dive straight into the product features that matter to your team." },
      { title: "Custom Workflow Map", desc: "We'll show you exactly how DialKaro fits into your current CRM and calling stack." },
      { title: "Live ROI Calculation", desc: "See how much your business can save in monthly productivity costs." },
    ],
  },
  BillKaro: {
    selectValue: "BillKaro (WhatsApp Invoicing)",
    headline: "BillKaro",
    tagline: "In Action",
    description: "See how Indian businesses are collecting payments 5× faster with WhatsApp invoicing. Book a personalized 1-on-1 demo with our product specialists.",
    benefits: [
      { title: "30-Minute Value Session", desc: "No boring slides. We show you the full invoicing flow — from creation to UPI collection." },
      { title: "WhatsApp Integration Demo", desc: "See live how invoices are sent on WhatsApp with auto-reminders and UPI payment links." },
      { title: "Live ROI Calculation", desc: "Calculate how much revenue you're losing to late payments — and how BillKaro fixes it." },
    ],
  },
  default: {
    selectValue: "DialKaro (AI Sales Dialer)",
    headline: "CelerApps",
    tagline: "Live",
    description: "Explore our AI-powered business tools — DialKaro (Sales Dialer) and BillKaro (WhatsApp Invoicing). Book a free 1-on-1 demo with our product specialists.",
    benefits: [
      { title: "30-Minute Value Session", desc: "No boring slides. We dive into the product features that matter most to your business." },
      { title: "Custom Workflow Map", desc: "We'll map our tools to your exact workflows — sales calling, invoicing, or both." },
      { title: "Live ROI Calculation", desc: "See how much your business can save in monthly productivity and collection costs." },
    ],
  },
} as const;

type ProductKey = keyof typeof PRODUCT_CONTENT;

function BookDemoContent() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product");
  const productKey: ProductKey = (productParam === "DialKaro" || productParam === "BillKaro") ? productParam : "default";
  const content = PRODUCT_CONTENT[productKey];

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: content.selectValue as string,
    message: "",
  });

  useEffect(() => {
    setForm(prev => ({ ...prev, product: content.selectValue }));
  }, [content.selectValue]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        // Clear form after success
        setForm({
          name: "",
          company: "",
          email: "",
          phone: "",
          product: content.selectValue,
          message: "",
        });
      } else {
        const errorMsg = result.error || "Internal Server Error";
        alert(`Submit Error: ${errorMsg}\n\nTroubleshooting:\n1. Ensure RESEND_API_KEY is correct in Vercel.\n2. In 'onboarding' mode, you can only send to your own signup email.\n3. Verify your domain on Resend dashboard to send to hello@celerapps.com.`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative bg-[#050810] min-h-screen">
      <Navbar />

      {/* Success Modal Overlay */}
      <AnimatePresence>
        {isSuccess && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-6 sm:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSuccess(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-[#0c111d] border border-emerald-500/30 rounded-[3rem] p-12 text-center shadow-[0_0_50px_rgba(16,185,129,0.15)]"
            >
              <div className="h-20 w-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
                <CheckCircle2 className="h-10 w-10 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Booking Confirmed!</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Thank you for your interest. A product specialist will reach out to you within 24 hours to coordinate the demo.
              </p>
              <Button
                onClick={() => setIsSuccess(false)}
                className="w-full h-14 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-2xl"
              >
                Close
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left Side: Pitch */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div>
                <Badge variant="brand" className="mb-4">
                  <MonitorPlay className="h-3 w-3 mr-1" /> Live Demo
                </Badge>
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                  See <span className="gradient-text">{content.headline}</span> {content.tagline === "Live" ? "" : "In "}<span className="text-emerald-400">{content.tagline}</span>
                </h1>
                <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
                  {content.description}
                </p>
              </div>

              <div className="space-y-6">
                {content.benefits.map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all">
                      <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative p-1 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-[2.5rem] overflow-hidden">
                <div className="bg-[#0c111d]/95 backdrop-blur-3xl rounded-[2.3rem] p-8 sm:p-10 border border-white/5">
                  <h2 className="text-2xl font-bold text-white mb-8">Book your demo slot</h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                        <div className="relative group">
                          <User2 className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 group-focus-within:text-emerald-400 transition-colors" />
                          <input
                            type="text"
                            required
                            placeholder="Enter your name"
                            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl pl-11 pr-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Company</label>
                        <div className="relative group">
                          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 group-focus-within:text-emerald-400 transition-colors" />
                          <input
                            type="text"
                            required
                            placeholder="Enter company name"
                            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl pl-11 pr-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                            value={form.company}
                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Work Email</label>
                        <div className="relative group">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 group-focus-within:text-emerald-400 transition-colors" />
                          <input
                            type="email"
                            required
                            placeholder="Enter work email"
                            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl pl-11 pr-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Phone / WhatsApp</label>
                        <div className="relative group">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 group-focus-within:text-emerald-400 transition-colors" />
                          <input
                            type="tel"
                            required
                            placeholder="+91 00000 00000"
                            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl pl-11 pr-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Product Area</label>
                      <select
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 appearance-none transition-all cursor-pointer"
                        value={form.product}
                        onChange={(e) => setForm({ ...form, product: e.target.value })}
                      >
                        <option className="bg-[#0c111d] text-white">DialKaro (AI Sales Dialer)</option>
                        <option className="bg-[#0c111d] text-white">BillKaro (WhatsApp Invoicing)</option>
                        <option className="bg-[#0c111d] text-white">Custom AI Solution</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">How can we help you most?</label>
                      <div className="relative group">
                        <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-slate-500 group-focus-within:text-emerald-400 transition-colors" />
                        <textarea
                          rows={3}
                          placeholder="Briefly describe your requirements..."
                          className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl pl-11 pr-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none"
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-base rounded-2xl shadow-xl shadow-emerald-500/20 group active:scale-[0.98] transition-all gap-2"
                    >
                      {isSubmitting ? (
                        <div className="h-5 w-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      ) : (
                        <>
                          <Calendar className="h-5 w-5" />
                          Confirm Demo Request
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function BookADemoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#050810]" />}>
      <BookDemoContent />
    </Suspense>
  );
}
