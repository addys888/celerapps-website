import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata = { title: "Resources | CelerApps" };

export default function ResourcesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050810]">
      <Navbar />
      <div className="flex-1 pt-32 pb-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Resources & Guides</h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">E-books, case studies, and templates to help your sales and finance teams win.</p>
        <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0a0d1a] inline-block text-slate-300">Resource library opening soon.</div>
      </div>
      <Footer />
    </main>
  );
}