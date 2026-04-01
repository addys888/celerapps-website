// At the top, add this import:
import HeroImage from "./HeroImage";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Testimonials } from "@/components/sections/Testimonials";
import { Button } from "@/components/ui/button";
import { Receipt, Mic, Banknote, Clock, Calculator, ShieldCheck, FileText, Smartphone } from "lucide-react";

export const metadata = {
  title: "BillKaro | WhatsApp-First Smart Invoicing by CelerApps",
  description: "WhatsApp pe Bill Banao, Paisa Apne Aap Pao. Turn WhatsApp into your invoicing + collection machine.",
};

export default function BillKaroPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050810]">
      <Navbar />
      
      {/* 1. HERO SECTION WITH GLOWING MOCKUP */}
      <section className="pt-32 pb-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 30%, rgba(37, 211, 102, 0.1), transparent 50%)" }} />
        
        <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 mb-6 relative z-10 tracking-wide uppercase">
          BillKaro By CelerApps
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight relative z-10">
          WhatsApp pe Bill Banao,<br className="hidden md:block" />
          <span className="text-emerald-400">Paisa Apne Aap Pao</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 relative z-10 leading-relaxed">
          Indian SMEs lose <strong className="text-red-400 font-semibold">₹2.8 lakh/year</strong> in uncollected payments. BillKaro turns WhatsApp into your invoicing + collection machine — <strong className="text-emerald-400">zero app downloads</strong>.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 mb-16">
          <Button variant="primary" size="lg" className="w-full sm:w-auto bg-emerald-500 text-black hover:bg-emerald-400 border-none font-bold">
            Start Free Forever Plan
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto" asChild>
            <a href="https://wa.me/919452661608?text=Hi%20CelerApps!%20I%20want%20to%20book%20a%20demo%20for%20BillKaro." target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center">
              Book a Demo
            </a>
          </Button>
        </div>

        {/* The Glowing Hero Image Mockup */}
        <div className="relative max-w-5xl mx-auto w-full z-10">
          <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] -z-10 rounded-full" />
          <div className="rounded-2xl border border-white/[0.08] bg-[#0a0d1a]/80 backdrop-blur-sm p-2 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
          <HeroImage />
        </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-12 border-y border-white/[0.08] bg-white/[0.02]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-extrabold text-emerald-400 mb-1">10 sec</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Invoice Created</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white mb-1">₹0</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Gateway / MDR Fee</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white mb-1">65%</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Faster Collections</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white mb-1">40 min</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Saved per day</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Three steps. Ten seconds.</h2>
            <p className="text-slate-400">No app. No learning curve. Just talk to your WhatsApp assistant.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0a0d1a] border border-white/[0.08] rounded-2xl p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xl mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold text-white mb-3">Say or Type</h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">&quot;Bill 5000 to Rahul for AC repair&quot; — send a text or voice note in Hindi, English, or Hinglish.</p>
              <Mic className="w-8 h-8 text-slate-600 mx-auto" />
            </div>
            
            <div className="bg-[#0a0d1a] border border-white/[0.08] rounded-2xl p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xl mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold text-white mb-3">Confirm</h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">AI parses the amount, client, items, and GST automatically. Review the preview and tap Send.</p>
              <FileText className="w-8 h-8 text-slate-600 mx-auto" />
            </div>
            
            <div className="bg-[#0a0d1a] border border-white/[0.08] rounded-2xl p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xl mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold text-white mb-3">Get Paid</h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">PDF + UPI link sent to the client. Our 4-step auto-reminders chase the payment so you don&apos;t have to.</p>
              <Banknote className="w-8 h-8 text-slate-600 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURES GRID */}
      <section className="py-24 bg-white/[0.02] border-y border-white/[0.08]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Power Features</h2>
            <p className="text-slate-400">Everything you need to get paid faster without the headache.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Receipt, title: "PDF Invoices", desc: "GST-compliant with QR code" },
              { icon: Mic, title: "Voice Notes", desc: "Speak in Hindi/English/Hinglish" },
              { icon: Banknote, title: "UPI Payments", desc: "Zero MDR, direct to your bank" },
              { icon: Clock, title: "Auto Chasers", desc: "4-step payment reminders" },
              { icon: Calculator, title: "GST Auto-Calc", desc: "Configurable tax rates" },
              { icon: Smartphone, title: "Mobile First", desc: "Works entirely inside WhatsApp" },
            ].map((feat, i) => (
              <div key={i} className="bg-[#050810] border border-white/[0.08] rounded-xl p-6 text-center hover:border-emerald-500/30 transition-colors">
                <feat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                <h4 className="text-sm font-bold text-white mb-2">{feat.title}</h4>
                <p className="text-xs text-slate-500">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Do my clients need to download an app?", a: "No. Your clients receive a standard WhatsApp message containing a PDF invoice and a secure UPI payment link. They don't need to install anything." },
              { q: "Is there a transaction fee for UPI payments?", a: "Absolutely zero. Unlike traditional payment gateways that charge 2-3% MDR, BillKaro routes UPI payments directly to your bank account, saving you thousands in fees." },
              { q: "What happens if a client doesn't pay on time?", a: "BillKaro's intelligent auto-chaser system kicks in. It sends polite, automated WhatsApp reminders on the Due Date, Day +3, and Day +7. You never have to awkwardly ask for money again." },
              { q: "Is my business data secure?", a: "Yes. We use bank-grade encryption, and your dashboard is secured via WhatsApp OTP login. Your client list and financial data are never shared." }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl border border-white/[0.08] bg-[#0a0d1a]">
                <h4 className="text-lg font-bold text-white mb-2">{faq.q}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SOCIAL PROOF */}
      <Testimonials />

      <Footer />
    </main>
  );
}