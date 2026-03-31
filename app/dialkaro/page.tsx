import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { PhoneCall, Timer, FileSpreadsheet, BrainCircuit, BarChart3, Globe, MessageSquare, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "DialKaro | The Sales Calling Tool Your Team Deserves",
  description: "Stop wasting 58 minutes every day per rep on manual tracking. Start calling smarter with AI-powered reports and WhatsApp integration.",
};

export default function DialKaroPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050810]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 30%, rgba(14, 165, 233, 0.1), transparent 50%)" }} />
        
        <div className="inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-400 mb-6 relative z-10 tracking-wide uppercase">
          DialKaro By CelerApps
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight relative z-10">
          The Sales Calling Tool <br className="hidden md:block" />
          <span className="text-sky-400">Your Team Deserves</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 relative z-10 leading-relaxed">
          Stop wasting <strong className="text-red-400 font-semibold">58 minutes every day</strong> per rep on manual tracking. Start calling smarter with AI-powered reports and WhatsApp integration.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
          <Button variant="primary" size="lg" className="w-full sm:w-auto bg-sky-500 text-white hover:bg-sky-600 border-none">Start 7-Day Trial</Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto">Book a Demo</Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-white/[0.08] bg-white/[0.02]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-extrabold text-sky-400 mb-1">58 min</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Saved per rep/day</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white mb-1">₹0</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Setup Cost</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white mb-1">30 min</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Go-Live Time</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white mb-1">0</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">App Installs Required</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Three steps. That&apos;s it.</h2>
            <p className="text-slate-400">A lightweight, WhatsApp-first calling assistant simpler than the apps on your reps&apos; phones.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0a0d1a] border border-white/[0.08] rounded-2xl p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold text-xl mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold text-white mb-3">Upload Leads</h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">Drag Excel/CSV file. Toggle for international numbers. Smart validation flags errors and auto-deduplicates.</p>
              <FileSpreadsheet className="w-8 h-8 text-slate-600 mx-auto" />
            </div>
            
            <div className="bg-[#0a0d1a] border border-white/[0.08] rounded-2xl p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold text-xl mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold text-white mb-3">Call & Tag</h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">One-tap call. Tag outcome. Add notes. Timer tracks duration. Schedule callbacks directly in the app.</p>
              <PhoneCall className="w-8 h-8 text-slate-600 mx-auto" />
            </div>
            
            <div className="bg-[#0a0d1a] border border-white/[0.08] rounded-2xl p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold text-xl mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold text-white mb-3">AI Report</h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">AI generates a coaching summary. Download as PDF or Excel. Email to manager. Zero manual typing required.</p>
              <BrainCircuit className="w-8 h-8 text-slate-600 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white/[0.02] border-t border-white/[0.08]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Power Features</h2>
            <p className="text-slate-400">Everything your team needs to scale calling operations.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: MessageSquare, title: "WhatsApp Native", desc: "One-tap messages in 6 languages" },
              { icon: Globe, title: "International", desc: "India + US, UK, UAE, SG, AU numbers" },
              { icon: BarChart3, title: "Live Analytics", desc: "4 live charts for admins" },
              { icon: Timer, title: "Call Timer", desc: "Live MM:SS duration tracking" },
              { icon: BrainCircuit, title: "AI Summaries", desc: "Per-contact notes compiled by AI" },
              { icon: ShieldCheck, title: "DND Guard", desc: "TRAI 9PM-9AM compliance built-in" },
            ].map((feat, i) => (
              <div key={i} className="bg-[#050810] border border-white/[0.08] rounded-xl p-6 text-center hover:border-sky-500/30 transition-colors">
                <feat.icon className="w-8 h-8 text-sky-400 mx-auto mb-4" />
                <h4 className="text-sm font-bold text-white mb-2">{feat.title}</h4>
                <p className="text-xs text-slate-500">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}