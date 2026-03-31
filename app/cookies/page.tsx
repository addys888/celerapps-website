import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata = { title: "Cookie Policy | CelerApps" };

export default function CookiesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050810]">
      <Navbar />
      <div className="flex-1 pt-32 pb-24 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Cookie Policy</h1>
        <p className="text-sm text-slate-400 mb-12 pb-6 border-b border-white/[0.08]">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. What are cookies?</h2>
            <p>Cookies are small text files that are placed on your computer or mobile device when you browse websites. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>
          </section>
          {/* Add your full legal text here */}
        </div>
      </div>
      <Footer />
    </main>
  );
}