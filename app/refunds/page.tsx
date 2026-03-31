import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata = { title: "Refund Policy | CelerApps" };

export default function RefundsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050810]">
      <Navbar />
      <div className="flex-1 pt-32 pb-24 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Cancellation & Refund Policy</h1>
        <p className="text-sm text-slate-400 mb-12 pb-6 border-b border-white/[0.08]">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Subscription Cancellations</h2>
            <p>You may cancel your CelerApps subscription at any time. If you cancel, your subscription will remain active until the end of your current billing cycle.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Refunds</h2>
            <p>As our services include a free trial period, we generally do not offer refunds for subscription payments once they have been processed. However, exceptions may be made on a case-by-case basis at our sole discretion.</p>
          </section>
          {/* Add your full legal text here */}
        </div>
      </div>
      <Footer />
    </main>
  );
}