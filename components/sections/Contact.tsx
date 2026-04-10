"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
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

  const handleSubmit = (e: React.FormEvent, type: "whatsapp" | "email") => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullMessage = `Hi CelerApps Team,\n\nMy name is ${form.name}.\nEmail: ${form.email}\nPhone: ${form.phone}\nSubject: ${form.subject}\n\nMessage: ${form.message}`;

    if (type === "whatsapp") {
      const url = `https://wa.me/919452661608?text=${encodeURIComponent(fullMessage)}`;
      window.open(url, "_blank");
    } else {
      const url = `mailto:hello@celerapps.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(fullMessage)}`;
      window.location.href = url;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
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
                { icon: Phone, label: "WhatsApp/Call", val: "+91 94526-61608", href: "https://wa.me/919452661608" },
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
            <form className="relative p-1 bg-gradient-to-br from-white/[0.08] to-transparent rounded-[2rem] overflow-hidden">
              <div className="bg-[#050810]/95 backdrop-blur-2xl rounded-[1.8rem] p-8 sm:p-10">
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
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
                      placeholder="john@company.com"
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
                      placeholder="+91 98765 43210"
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

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={(e) => handleSubmit(e, "whatsapp")}
                    disabled={isSubmitting}
                    className="flex-1 h-14 bg-[#25D366] hover:bg-[#20bd5c] text-black font-bold text-base rounded-xl gap-2 shadow-lg shadow-emerald-500/10 group active:scale-[0.98] transition-all"
                  >
                    {isSubmitting ? (
                      <div className="h-5 w-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    ) : (
                      <>
                        <Phone className="h-5 w-5 fill-black" />
                        Chat on WhatsApp
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={(e) => handleSubmit(e, "email")}
                    disabled={isSubmitting}
                    variant="secondary"
                    className="flex-1 h-14 bg-white/5 hover:bg-white/10 text-white font-bold text-base rounded-xl gap-2 border-white/10 active:scale-[0.98] transition-all"
                  >
                    <Mail className="h-5 w-5" />
                    Send Email
                  </Button>
                </div>

                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    <p className="text-sm text-emerald-400 font-medium">Message sent! We&apos;ll get back to you soon.</p>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
