"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, FileText, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="section relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden text-center px-8 py-16 sm:py-20"
          style={{
            background: "linear-gradient(135deg, #0c1628 0%, #0e0c26 50%, #0c1628 100%)",
            border: "1px solid rgba(99,102,241,0.2)",
          }}
        >
          {/* Animated background orbs */}
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-sky-600/15 blur-3xl animate-[floatA_8s_ease-in-out_infinite] pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-indigo-600/15 blur-3xl animate-[floatB_9s_ease-in-out_infinite] pointer-events-none" />
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

          {/* Border glow */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ boxShadow: "inset 0 0 80px rgba(99,102,241,0.08), 0 0 80px rgba(14,165,233,0.08)" }} />

          <div className="relative">
            {/* Icon cluster */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-12 w-12 rounded-2xl bg-sky-500/15 border border-sky-500/25 flex items-center justify-center">
                <Phone className="h-5 w-5 text-sky-400" />
              </div>
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 border border-white/10 flex items-center justify-center">
                <Zap className="h-7 w-7 text-white fill-white" />
              </div>
              <div className="h-12 w-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center">
                <FileText className="h-5 w-5 text-indigo-400" />
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Ready to{" "}
              <span className="gradient-text">Accelerate</span>{" "}
              Your Business?
            </h2>

            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Join 50+ Indian businesses already running faster, selling smarter, and collecting payments effortlessly — with CelerApps.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <Button variant="primary" size="xl" asChild>
                <Link href="/book-demo?product=DialKaro" className="gap-2.5">
                  <Phone className="h-5 w-5" />
                  Start with DialKaro
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="secondary" size="xl" asChild>
                <Link href="/book-demo?product=BillKaro" className="gap-2.5">
                  <FileText className="h-5 w-5" />
                  Start with BillKaro
                </Link>
              </Button>
            </div>

            {/* Trust line */}
            <p className="text-slate-500 text-sm">
              Free to start · No credit card · Setup in{" "}
              <span className="text-white font-medium">under 5 minutes</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
