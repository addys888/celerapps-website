import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata = { title: "Terms of Service | CelerApps" };

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050810]">
      <Navbar />
      <div className="flex-1 pt-32 pb-24 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Terms of Service</h1>
        <p className="text-sm text-slate-400 mb-12 pb-6 border-b border-white/[0.08]">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
            <p>By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Use of Services</h2>
            <p>You must follow any policies made available to you within the Services. You may use our Services only as permitted by law, including applicable export and re-export control laws and regulations.</p>
          </section>
          {/* Add your full legal text here */}
        </div>
      </div>
      <Footer />
    </main>
  );
}