"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "General Inquiry",
          message: "",
        });
      } else {
        const errorMsg = result.error || "Internal Server Error";
        alert(`Submit Error: ${errorMsg}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
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
              className="relative w-full max-w-lg bg-[#0c111d] border border-sky-500/30 rounded-[3rem] p-12 text-center shadow-[0_0_50px_rgba(14,165,233,0.15)]"
            >
              <div className="h-20 w-20 rounded-full bg-sky-500/10 flex items-center justify-center mx-auto mb-6 border border-sky-500/20">
                <CheckCircle2 className="h-10 w-10 text-sky-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Thank you for reaching out. Our team will get back to you within 24 hours.
              </p>
              <Button
                onClick={() => setIsSuccess(false)}
                className="w-full h-14 bg-sky-500 hover:bg-sky-400 text-black font-bold rounded-2xl"
              >
                Close
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24 items-start">

          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="brand" className="mb-4">
                <MessageSquare className="h-3 w-3 mr-1" /> Contact Us
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                Let&apos;s Build Something <span className="gradient-text">Exceptional</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Whether you have a specific project in mind or just want to explore how our AI apps can help your business, we&apos;re here to talk.
              </p>
            </motion.div>

            <div className="space-y-6 pt-4">
              {[
                { icon: Mail, label: "Email Us", val: "hello@celerapps.com", href: "mailto:hello@celerapps.com" },
                { icon: Phone, label: "WhatsApp/Call", val: "+91 94526-61608", href: "https://wa.me/919082573335" },
                { icon: MapPin, label: "Location", val: "Lucknow, India 🇮🇳", href: null },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.1] transition-colors group"
                >
                  <div className="h-10 w-10 rounded-xl bg-sky-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-500/20 transition-colors">
                    <item.icon className="h-5 w-5 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-base font-medium text-white hover:text-sky-400 transition-colors">
                        {item.val}
                      </a>
                    ) : (
                      <p className="text-base font-medium text-white">{item.val}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="relative p-1 bg-gradient-to-br from-white/[0.08] to-transparent rounded-[2rem] overflow-hidden">
              <div className="bg-[#050810]/95 backdrop-blur-2xl rounded-[1.8rem] p-8 sm:p-10">
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">WhatsApp Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 00000 00000"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Interested In</label>
                    <select
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 appearance-none transition-all cursor-pointer"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    >
                      <option className="bg-[#0c111d] text-white">General Inquiry</option>
                      <option className="bg-[#0c111d] text-white">DialKaro Pro</option>
                      <option className="bg-[#0c111d] text-white">BillKaro Pro</option>
                      <option className="bg-[#0c111d] text-white">Custom AI Solution</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Tell us about your project</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your requirements..."
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all resize-none"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white font-extrabold text-base rounded-xl gap-2 shadow-xl shadow-sky-500/20 group active:scale-[0.98] transition-all"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
