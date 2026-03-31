import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export const metadata = {
  title: "BillKaro | WhatsApp-First Smart Invoicing by CelerApps",
  description: "WhatsApp-first smart invoicing and collections. Send invoices and get paid faster.",
};

export default function BillKaroPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050810]">
      <Navbar />
      <div className="flex-1 pt-32 pb-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 30%, rgba(99, 102, 241, 0.1), transparent 50%)" }} />
        
        <div className="h-16 w-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 relative z-10">
          <FileText className="h-8 w-8 text-indigo-400" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight relative z-10">
          Bill<span className="text-indigo-400">Karo</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 relative z-10">
          WhatsApp-first smart invoicing & collections. Automate reminders and collect payments instantly via UPI.
        </p>
        <div className="flex items-center gap-4 relative z-10">
          <Button variant="primary" size="lg">Start Free Trial</Button>
          <Button variant="secondary" size="lg">Book a Demo</Button>
        </div>
      </div>
      <Footer />
    </main>
  );
}