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

// Removed the <string, string> Record type to prevent SWC parser confusion
const PRODUCT_BADGE: { [key: string]: string } = {
  DialKaro: "bg-sky-500/10 text-sky-400 border-sky-500/25",
  BillKaro: "bg-indigo-500/10 text-indigo-400 border-indigo-500/25",
  Both: "bg-purple-500/10 text-purple-400 border-purple-500/25",
};

export function Testimonials()