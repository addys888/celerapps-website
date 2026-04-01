"use client";

export default function HeroImage() {
  return (
    <img
      src="/dashboard-mockup.png"
      alt="BillKaro Dashboard and WhatsApp Flow"
      className="w-full h-auto rounded-xl border border-white/[0.04] transition-transform duration-700 group-hover:scale-[1.01]"
      onError={(e) => {
        e.currentTarget.src =
          "https://placehold.co/1200x600/0a0d1a/25D366?text=BillKaro+WhatsApp+Dashboard+Mockup";
      }}
    />
  );
}