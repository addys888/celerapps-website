import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata = { title: "Privacy Policy | CelerApps" };

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050810]">
      <Navbar />
      <div className="flex-1 pt-32 pb-24 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
        <p className="text-sm text-slate-400 mb-12 pb-6 border-b border-white/[0.08]">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p>Welcome to CelerApps. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. The Data We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows: Identity Data, Contact Data, Financial Data, Transaction Data, Technical Data, Profile Data, Usage Data, and Marketing and Communications Data.</p>
          </section>
          {/* Add your full legal text here */}
        </div>
      </div>
      <Footer />
    </main>
  );
}