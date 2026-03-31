import { Navbar }        from "@/components/sections/Navbar";
import { Hero }          from "@/components/sections/Hero";
import { Products }      from "@/components/sections/Products";
import { WhyCelerApps }  from "@/components/sections/WhyCelerApps";
import { HowItWorks }    from "@/components/sections/HowItWorks";
import { Testimonials }  from "@/components/sections/Testimonials";
import { Stats }         from "@/components/sections/Stats";
import { CTABanner }     from "@/components/sections/CTABanner";
import { Footer }        from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Products />
      <WhyCelerApps />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Stats />
      <CTABanner />
      <Footer />
    </main>
  );
}
