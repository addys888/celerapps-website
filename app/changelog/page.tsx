import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata = { title: "Changelog | CelerApps" };

export default function ChangelogPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050810]">
      <Navbar />
      <div className="flex-1 pt-32 pb-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl font-bold text-white mb-6 tracking-tight text-center">Changelog</h1>
        <p className="text-slate-400 text-center mb-12">Keep track of our latest features, fixes, and improvements.</p>
        
        <div className="relative border-l border-white/[0.1] pl-6 ml-4 space-y-12">
          <div className="relative">
            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
            <span className="text-sm font-medium text-sky-400 mb-2 block">Version 1.0 (Upcoming)</span>
            <h3 className="text-xl font-bold text-white mb-3">Public Beta Launch</h3>
            <p className="text-slate-400">Preparing DialKaro and BillKaro for early access users.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}