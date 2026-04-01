"use client";

export default function HeroImage() {
  return (
    <div className="w-full rounded-xl border border-white/[0.04] overflow-hidden bg-[#0a0f1e] p-4 font-sans">
      {/* Top bar */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.08]">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
        <span className="ml-3 text-xs text-slate-500">BillKaro Dashboard</span>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { label: "Total Billed", value: "₹1,24,500", color: "text-emerald-400" },
          { label: "Pending", value: "₹18,200", color: "text-yellow-400" },
          { label: "Collected", value: "₹1,06,300", color: "text-white" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white/[0.04] rounded-lg p-3 border border-white/[0.06]">
            <div className="text-xs text-slate-500 mb-1">{stat.label}</div>
            <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Invoice list */}
      <div className="space-y-2">
        {[
          { name: "Rahul Sharma", item: "AC Repair", amount: "₹5,000", status: "Paid", color: "bg-emerald-500/20 text-emerald-400" },
          { name: "Priya Traders", item: "Monthly Supply", amount: "₹12,400", status: "Pending", color: "bg-yellow-500/20 text-yellow-400" },
          { name: "Vikram & Co.", item: "Consulting", amount: "₹8,000", status: "Sent", color: "bg-blue-500/20 text-blue-400" },
          { name: "Meena Stores", item: "Furniture", amount: "₹22,000", status: "Paid", color: "bg-emerald-500/20 text-emerald-400" },
        ].map((inv) => (
          <div key={inv.name} className="flex items-center justify-between bg-white/[0.03] rounded-lg px-3 py-2 border border-white/[0.05]">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">
                {inv.name[0]}
              </div>
              <div>
                <div className="text-xs font-semibold text-white">{inv.name}</div>
                <div className="text-[10px] text-slate-500">{inv.item}</div>
              </div>
            </div>
            <div className="text-right flex items-center gap-3">
              <span className="text-sm font-bold text-white">{inv.amount}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${inv.color}`}>{inv.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* WhatsApp hint */}
      <div className="mt-4 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-2">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs text-emerald-400">WhatsApp Bot Active — &quot;Bill 5000 to Rahul for AC repair&quot;</span>
      </div>
    </div>
  );
}