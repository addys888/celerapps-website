"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, FileText, ArrowRight, Zap, Brain, MessageCircle, IndianRupee, Bell, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/* ─── DialKaro inline mockup ─── */
function DialKaroMockup() {
  const rows = [
    { name:"Priya Sharma",   num:"98765…", outcome:"Interested", done:true  },
    { name:"Rahul Gupta",    num:"87654…", outcome:"Current",    current:true },
    { name:"Sunita Devi",    num:"76543…", outcome:"—",          done:false },
    { name:"Amit Verma",     num:"65432…", outcome:"—",          done:false },
  ];
  return (
    <div className="rounded-2xl overflow-hidden border border-white/[0.08]" style={{background:"#070c1a"}}>
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.07]">
        <div className="flex items-center gap-2">
          <Phone className="h-3.5 w-3.5 text-sky-400" />
          <span className="text-xs font-semibold text-white">Active Session</span>
        </div>
        <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />Calling
        </span>
      </div>
      {/* Progress */}
      <div className="px-4 pt-3 pb-2">
        <div className="flex justify-between text-[10px] text-slate-500 mb-1.5"><span>Progress</span><span>12 / 47 leads</span></div>
        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "26%" }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="h-full rounded-full bg-gradient-to-r from-sky-500 to-indigo-500"
          />
        </div>
      </div>
      {/* Queue */}
      <div className="px-4 pb-3 space-y-1">
        {rows.map((r,i)=>(
          <div key={i} className={cn("flex items-center gap-2.5 py-2 px-2 rounded-xl", r.current && "bg-sky-500/[0.07]")}>
            <div className={cn("h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0",
              r.done ? "bg-emerald-500/15 text-emerald-400" : r.current ? "bg-sky-500/20 text-sky-400" : "bg-white/5 text-slate-500")}>
              {r.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-medium text-white truncate">{r.name}</p>
              <p className="text-[9px] text-slate-600">{r.num}</p>
            </div>
            <span className={cn("text-[9px] px-2 py-0.5 rounded-full font-medium",
              r.done ? "bg-emerald-500/10 text-emerald-400" : r.current ? "bg-sky-500/15 text-sky-400" : "bg-white/5 text-slate-600")}>
              {r.current ? "↗ Now" : r.outcome}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── BillKaro inline mockup ─── */
function BillKaroMockup() {
  const invoices = [
    { client:"Rajesh Ent.",    amount:"₹24,500", status:"paid",    date:"Today"   },
    { client:"Priya Stores",   amount:"₹8,200",  status:"pending", date:"Due tmr" },
    { client:"Kumar & Sons",   amount:"₹52,000", status:"paid",    date:"Jun 10"  },
    { client:"Meena Fashion",  amount:"₹6,800",  status:"overdue", date:"Jun 5"   },
  ];
  return (
    <div className="rounded-2xl overflow-hidden border border-white/[0.08]" style={{background:"#070614"}}>
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.07]">
        <div className="flex items-center gap-2">
          <FileText className="h-3.5 w-3.5 text-indigo-400" />
          <span className="text-xs font-semibold text-white">Invoices</span>
        </div>
        <span className="flex items-center gap-1 text-[10px] text-green-400 font-medium">
          <svg viewBox="0 0 24 24" className="h-3 w-3 fill-green-400"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a8.1 8.1 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
          WhatsApp linked
        </span>
      </div>
      {/* Summary */}
      <div className="grid grid-cols-2 gap-2 px-4 py-3 border-b border-white/[0.06]">
        {[["This Month","₹1.2L","↑ 18%","emerald"],["Pending","₹28K","3 invoices","amber"]].map(([l,v,s,c])=>(
          <div key={l} className="bg-white/[0.03] rounded-xl p-2.5">
            <p className="text-[10px] text-slate-500">{l}</p>
            <p className="text-sm font-bold text-white mt-0.5">{v}</p>
            <p className={`text-[10px] mt-0.5 text-${c}-400`}>{s}</p>
          </div>
        ))}
      </div>
      {/* List */}
      <div className="px-4 py-2 space-y-0.5">
        {invoices.map((inv,i)=>(
          <div key={i} className="flex items-center gap-2.5 py-2">
            <div className="h-6 w-6 rounded-full bg-indigo-500/15 flex items-center justify-center text-[10px] font-bold text-indigo-400 flex-shrink-0">{inv.client[0]}</div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-medium text-white truncate">{inv.client}</p>
              <p className="text-[9px] text-slate-600">{inv.date}</p>
            </div>
            <span className="text-[11px] font-semibold text-white mr-1">{inv.amount}</span>
            <span className={cn("text-[9px] px-1.5 py-0.5 rounded-full font-medium",
              inv.status==="paid" ? "bg-emerald-500/10 text-emerald-400" :
              inv.status==="overdue" ? "bg-red-500/10 text-red-400" : "bg-amber-500/10 text-amber-400")}>
              {inv.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Product data ─── */
const PRODUCTS = [
  {
    id: "dialkaro", name: "DialKaro", tagline: "Rapid Dialing App",
    desc: "AI-powered auto-dialer with WhatsApp calling for Indian sales teams. Upload your leads, start calling, get AI reports — all in one tool.",
    icon: Phone, badge: "Sales Teams", badgeVariant: "brand" as const,
    href: "/dialkaro",
    from: "#0ea5e9", to: "#6366f1",
    glow: "rgba(14,165,233,0.1)", border: "rgba(14,165,233,0.18)",
    iconColor: "text-sky-400", iconBg: "bg-sky-500/12",
    benefits: [
      { icon: Zap,           text: "Auto-dial from any Excel or CSV file" },
      { icon: MessageCircle, text: "One-tap WhatsApp + phone call per lead" },
      { icon: Brain,         text: "Claude AI daily session summary" },
      { icon: Users,         text: "Manager dashboard + team oversight" },
    ],
    stats: [["3×","More calls/day"],["98%","Lead coverage"],["AI","Auto reports"]],
    Mockup: DialKaroMockup,
  },
  {
    id: "billkaro", name: "BillKaro", tagline: "WhatsApp-First Invoicing",
    desc: "Send invoices directly on WhatsApp, collect UPI payments, and automate follow-up reminders — without switching apps.",
    icon: FileText, badge: "SMBs & Freelancers", badgeVariant: "indigo" as const,
    href: "/billkaro",
    from: "#6366f1", to: "#a855f7",
    glow: "rgba(99,102,241,0.1)", border: "rgba(99,102,241,0.18)",
    iconColor: "text-indigo-400", iconBg: "bg-indigo-500/12",
    benefits: [
      { icon: MessageCircle, text: "Send invoices inside WhatsApp chat" },
      { icon: IndianRupee,   text: "Collect UPI & bank transfers instantly" },
      { icon: Bell,          text: "Automated payment reminders" },
      { icon: Brain,         text: "AI-powered collections predictions" },
    ],
    stats: [["98%","Payment rate"],["2.3M+","Invoices sent"],["₹0","Setup cost"]],
    Mockup: BillKaroMockup,
  },
];

export function Products() {
  return (
    <section id="products" className="section relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity:0, y:32 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="brand" className="mb-4">Our Products</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Powerful Products.{" "}<span className="gradient-text">One Family.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Two focused tools. One shared mission — make Indian businesses faster, smarter, and more profitable.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {PRODUCTS.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity:0, y:48 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, margin:"-60px" }}
              transition={{ duration:0.65, delay: idx*0.12, ease:[0.22,1,0.36,1] }}
              className="group relative rounded-3xl overflow-hidden border transition-all duration-300 hover:scale-[1.01]"
              style={{ background:`linear-gradient(155deg,${p.glow},transparent 55%), #0a0d1a`, borderColor:p.border }}
            >
              {/* Hover shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 shimmer-anim pointer-events-none" />

              <div className="p-7 lg:p-8">
                {/* Top */}
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <Badge variant={p.badgeVariant} className="mb-3 text-[11px]">{p.badge}</Badge>
                    <div className="flex items-center gap-3">
                      <div className={cn("h-11 w-11 rounded-2xl flex items-center justify-center shadow-lg", p.iconBg)}>
                        <p.icon className={cn("h-5 w-5", p.iconColor)} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{p.name}</h3>
                        <p className="text-sm text-slate-500">{p.tagline}</p>
                      </div>
                    </div>
                  </div>
                  {/* Stats */}
                  <div className="hidden sm:flex flex-col gap-1.5 items-end">
                    {p.stats.map(([v,l])=>(
                      <div key={l} className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-white">{v}</span>
                        <span className="text-[10px] text-slate-500">{l}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-5">{p.desc}</p>

                {/* Mockup */}
                <div className="mb-6"><p.Mockup /></div>

                {/* Benefits */}
                <ul className="grid grid-cols-2 gap-2.5 mb-7">
                  {p.benefits.map((b,i)=>(
                    <li key={i} className="flex items-start gap-2">
                      <div className={cn("h-5 w-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5", p.iconBg)}>
                        <b.icon className={cn("h-3 w-3", p.iconColor)} />
                      </div>
                      <span className="text-xs text-slate-300 leading-snug">{b.text}</span>
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex gap-3">
                  <Button variant="primary" size="md" asChild className="flex-1"
                    style={{background:`linear-gradient(135deg,${p.from},${p.to})`}}>
                    <Link href={`/book-demo?product=${p.name}`} className="gap-2">
                      Try Free <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="secondary" size="md" asChild>
                    <Link href={`${p.href}#demo`}>Learn More</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
