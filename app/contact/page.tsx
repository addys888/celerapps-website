"use client";
import React from "react";
import { Contact } from "@/components/sections/Contact";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function ContactPage() {
  return (
    <main className="relative bg-[#050810]">
      <Navbar />
      <div className="pt-20"> {/* Offset for Fixed/Sticky Navbar */}
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
