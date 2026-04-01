"use client";

export default function HeroImage() {
  return (
    <div style={{
      background: "#0f1623",
      borderRadius: "12px",
      overflow: "hidden",
      fontFamily: "Inter, system-ui, sans-serif",
      display: "flex",
      minHeight: "480px",
    }}>
      {/* Sidebar */}
      <div style={{
        width: "180px",
        background: "#0a0f1a",
        borderRight: "1px solid rgba(255,255,255,0.07)",
        display: "flex",
        flexDirection: "column",
        padding: "20px 0",
        flexShrink: 0,
      }}>
        {/* Logo */}
        <div style={{ padding: "0 16px 24px", display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "28px", height: "28px", borderRadius: "6px", background: "#22c55e", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontSize: "14px", fontWeight: "700" }}>B</span>
          </div>
          <span style={{ color: "#fff", fontWeight: "600", fontSize: "15px" }}>BillKaro</span>
        </div>

        {/* Nav items */}
        {[
          { label: "Overview", active: true, icon: "⊞" },
          { label: "Invoices", active: false, icon: "◧" },
          { label: "Clients", active: false, icon: "◉" },
          { label: "Settings", active: false, icon: "⚙" },
        ].map((item) => (
          <div key={item.label} style={{
            padding: "10px 16px",
            margin: "2px 8px",
            borderRadius: "8px",
            background: item.active ? "rgba(34,197,94,0.15)" : "transparent",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          }}>
            <span style={{ fontSize: "13px", color: item.active ? "#22c55e" : "#64748b" }}>{item.icon}</span>
            <span style={{ fontSize: "13px", color: item.active ? "#22c55e" : "#64748b", fontWeight: item.active ? "500" : "400" }}>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: "20px 24px", overflowY: "auto" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h2 style={{ color: "#fff", fontSize: "18px", fontWeight: "600", margin: 0 }}>
            Financial Overview for Sharma HVAC Solutions
          </h2>
          <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#334155", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "#94a3b8", fontWeight: "600" }}>SS</div>
        </div>

        {/* Stats cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "16px" }}>
          {[
            { label: "Total Invoiced", value: "₹3,20,000", sub: "42 invoices", bg: "#1a2234", accent: "#94a3b8" },
            { label: "Collected", value: "₹1,80,000", sub: "24 paid", bg: "#0f2a1a", accent: "#22c55e" },
            { label: "Pending", value: "₹1,40,000", sub: "18 pending", bg: "#2a1f0a", accent: "#f59e0b" },
          ].map((card) => (
            <div key={card.label} style={{
              background: card.bg,
              borderRadius: "10px",
              padding: "14px 16px",
              border: "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{ fontSize: "11px", color: "#64748b", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.04em" }}>{card.label}</div>
              <div style={{ fontSize: "22px", fontWeight: "700", color: card.accent, marginBottom: "4px" }}>{card.value}</div>
              <div style={{ fontSize: "11px", color: "#475569" }}>{card.sub}</div>
            </div>
          ))}
        </div>

        {/* Overdue table */}
        <div style={{ background: "#131c2e", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.06)", padding: "16px", marginBottom: "16px" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", color: "#e2e8f0", marginBottom: "12px" }}>Overdue Invoices</div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                {["Name", "Price", "Status"].map((h) => (
                  <th key={h} style={{ textAlign: "left", padding: "6px 8px", fontSize: "11px", color: "#475569", fontWeight: "500" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Priya Constructions", price: "₹22,000", status: "12 days overdue", dot: "#ef4444" },
                { name: "Rajesh Electricals", price: "₹15,000", status: "8 days overdue", dot: "#f59e0b" },
                { name: "MK Solar", price: "₹8,000", status: "3 days overdue", dot: "#f59e0b" },
              ].map((row) => (
                <tr key={row.name} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <td style={{ padding: "9px 8px", fontSize: "12px", color: "#cbd5e1" }}>{row.name}</td>
                  <td style={{ padding: "9px 8px", fontSize: "12px", color: "#cbd5e1" }}>{row.price}</td>
                  <td style={{ padding: "9px 8px", fontSize: "12px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: row.dot, flexShrink: 0 }} />
                      <span style={{ color: row.dot }}>{row.status}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: "12px" }}>
          {/* Collection rate */}
          <div style={{ background: "#131c2e", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.06)", padding: "14px 16px" }}>
            <div style={{ fontSize: "11px", color: "#475569", marginBottom: "8px" }}>Collection Rate</div>
            <div style={{ fontSize: "26px", fontWeight: "700", color: "#fff", marginBottom: "12px" }}>78%</div>
            <div style={{ fontSize: "11px", color: "#475569", marginBottom: "4px" }}>Avg Days to Pay</div>
            <div style={{ fontSize: "22px", fontWeight: "700", color: "#fff" }}>9.2 days</div>
          </div>

          {/* Bar chart */}
          <div style={{ background: "#131c2e", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.06)", padding: "14px 16px" }}>
            <div style={{ fontSize: "12px", color: "#e2e8f0", fontWeight: "500", marginBottom: "8px" }}>Monthly Invoice Status</div>
            <div style={{ display: "flex", gap: "10px", fontSize: "10px", color: "#475569", marginBottom: "10px" }}>
              {[["#22c55e", "Paid"], ["#f59e0b", "Pending"], ["#ef4444", "Overdue"]].map(([c, l]) => (
                <span key={l} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "2px", background: c }} />{l}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "80px" }}>
              {[
                { paid: 70, pend: 40, over: 15 },
                { paid: 85, pend: 55, over: 20 },
                { paid: 100, pend: 35, over: 10 },
                { paid: 60, pend: 50, over: 25 },
                { paid: 90, pend: 45, over: 12 },
                { paid: 75, pend: 60, over: 18 },
              ].map((bar, i) => (
                <div key={i} style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: "2px" }}>
                  {[
                    { h: bar.paid, c: "#22c55e" },
                    { h: bar.pend, c: "#f59e0b" },
                    { h: bar.over, c: "#ef4444" },
                  ].map((b, j) => (
                    <div key={j} style={{ flex: 1, height: `${b.h * 0.7}%`, background: b.c, borderRadius: "2px 2px 0 0", minHeight: "3px" }} />
                  ))}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
                <span key={m} style={{ fontSize: "9px", color: "#334155", flex: 1, textAlign: "center" }}>{m}</span>
              ))}
            </div>
          </div>

          {/* Donut */}
          <div style={{ background: "#131c2e", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.06)", padding: "14px 16px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: "12px", color: "#e2e8f0", fontWeight: "500", marginBottom: "10px", alignSelf: "flex-start" }}>Receivables Aging</div>
            <svg viewBox="0 0 80 80" width="80" height="80">
              <circle cx="40" cy="40" r="30" fill="none" stroke="#22c55e" strokeWidth="14" strokeDasharray="94 95" strokeDashoffset="0" />
              <circle cx="40" cy="40" r="30" fill="none" stroke="#f59e0b" strokeWidth="14" strokeDasharray="56 133" strokeDashoffset="-94" />
              <circle cx="40" cy="40" r="30" fill="none" stroke="#ef4444" strokeWidth="14" strokeDasharray="38 151" strokeDashoffset="-150" />
              <circle cx="40" cy="40" r="22" fill="#131c2e" />
            </svg>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", width: "100%", marginTop: "8px" }}>
              {[["#22c55e", "Current", "56%"], ["#f59e0b", "30d", "31%"], ["#ef4444", "60d+", "13%"]].map(([c, l, v]) => (
                <div key={l} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "10px" }}>
                  <span style={{ width: "7px", height: "7px", borderRadius: "2px", background: c, flexShrink: 0 }} />
                  <span style={{ color: "#64748b", flex: 1 }}>{l}</span>
                  <span style={{ color: "#94a3b8", fontWeight: "500" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}