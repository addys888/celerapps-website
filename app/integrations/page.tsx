import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata = { title: "Integrations | CelerApps" };

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050810]">
      <Navbar />
      <div className="flex-1 pt-32 pb-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Integrations</h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">Connect CelerApps with the tools you already use.</p>
        <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0a0d1a] inline-block text-slate-300">Integration catalog coming soon.</div>
      </div>
      <Footer />
    </main>
  );
}