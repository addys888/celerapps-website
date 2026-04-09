"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Phone, FileText, Twitter, Linkedin, Github, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const PRODUCTS = [
  { name:"DialKaro", href:"/dialkaro", icon:Phone, desc:"AI Sales Dialer" },
  { name:"BillKaro", href:"/billkaro", icon:FileText, desc:"Smart Invoicing" },
];

const QUICK = [
  ["Solutions",  "#why"       ],
  ["Pricing",    "#pricing"   ],
  ["Contact Us", "#contact"   ],
  ["Blog",       "/blog"      ],
  ["Changelog",  "/changelog" ],
];

const LEGAL = [
  ["Privacy Policy",  "/privacy"  ],
  ["Terms of Use",    "/terms"    ],
  ["Refund Policy",   "/refunds"  ],
];

const SOCIAL = [
  { icon: Twitter,  href: "https://twitter.com/celerapps",            label: "Twitter"  },
  { icon: Linkedin, href: "https://linkedin.com/company/celerapps",   label: "LinkedIn" },
  { icon: Github,   href: "https://github.com/celerapps",             label: "GitHub"   },
  { icon: Mail,     href: "mailto:hello@celerapps.in",                label: "Email"    },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand col */}
          <div className="col-span-2 lg:col-span-2">
            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2.5 group inline-flex mb-6">
              <Image 
                src="/logo.png" 
                alt="CelerApps Logo" 
                width={32} 
                height={32} 
                className="rounded-lg object-contain group-hover:opacity-80 transition-opacity"
              />
              <span className="text-[17px] font-semibold tracking-tight">
                <span className="text-white">Celer</span>
                <span className="gradient-text">Apps</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-5 max-w-xs">
              Fast. Intelligent. Built for India. — AI-powered business tools that solve real problems for real Indian businesses.
            </p>
            {/* Products mini list */}
            <div className="space-y-2 mb-6">
              {PRODUCTS.map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-white transition-colors group/p"
                >
                  <div className="h-6 w-6 rounded-lg bg-white/[0.05] flex items-center justify-center group-hover/p:bg-sky-500/15 transition-colors">
                    <p.icon className="h-3 w-3 text-slate-500 group-hover/p:text-sky-400 transition-colors" />
                  </div>
                  <span className="font-medium">{p.name}</span>
                  <span className="text-xs text-slate-600">— {p.desc}</span>
                </Link>
              ))}
            </div>
            {/* Social */}
            <div className="flex gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="h-8 w-8 rounded-lg bg-white/[0.05] border border-white/[0.07] flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/[0.09] hover:border-white/[0.14] transition-all duration-200"
                >
                  <s.icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Company</p>
            <ul className="space-y-2.5">
              {QUICK.map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-slate-400 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Products</p>
            <ul className="space-y-2.5">
              {[
                ["DialKaro",        "/dialkaro"         ],
                ["BillKaro",        "/billkaro"         ],
                ["Integrations",    "/integrations"     ],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-slate-400 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Legal</p>
            <ul className="space-y-2.5 mb-6">
              {LEGAL.map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-slate-400 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">Contact</p>
            <div className="space-y-2">
              <Link href="#contact" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <Mail className="h-3.5 w-3.5" />
                hello@celerapps.in
              </Link>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <MapPin className="h-3.5 w-3.5" />
                Lucknow, India 🇮🇳
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.07] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © 2025 - {new Date().getFullYear()} CelerApps Technologies Pvt. Ltd. All rights reserved.
          </p>
          <motion.p
            initial={{ opacity:0 }}
            whileInView={{ opacity:1 }}
            viewport={{ once:true }}
            transition={{ duration:1 }}
            className="text-xs text-slate-600 flex items-center gap-1"
          >
            Made with{" "}
            <span className="text-red-400 animate-pulse-soft">❤️</span>
            {" "}in India
            {" "}·{" "}
            <span className="gradient-text font-medium">CelerApps</span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
