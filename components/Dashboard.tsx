"use client";

import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";

const floatingIcons = [
  { emoji: "⭐", className: "animate-float", style: { top: "8%", left: "5%", fontSize: "48px" } },
  { emoji: "🔼", className: "animate-float-delay-1", style: { top: "15%", right: "8%", fontSize: "40px" } },
  { emoji: "🏆", className: "animate-float-delay-2", style: { bottom: "20%", left: "3%", fontSize: "52px" } },
  { emoji: "🔥", className: "animate-float-delay-3", style: { bottom: "35%", right: "5%", fontSize: "44px" } },
  { emoji: "⭐", className: "animate-float-slow", style: { top: "45%", left: "12%", fontSize: "32px" } },
  { emoji: "🔽", className: "animate-float-delay-4", style: { top: "60%", right: "12%", fontSize: "36px", transform: "rotate(180deg)" } },
  { emoji: "🥇", className: "animate-float-delay-1", style: { bottom: "10%", left: "20%", fontSize: "40px" } },
  { emoji: "💫", className: "animate-float-delay-2", style: { top: "30%", right: "18%", fontSize: "36px" } },
];

function CalendarGrid() {
  const weeks = 5;
  const days = 7;
  const colors = ["#597E55", "#3A3D2E", "#E8968C", "#597E55", "#3A3D2E", "#597E55", "#3A3D2E"];

  return (
    <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${days}, 1fr)` }}>
      {Array.from({ length: weeks * days }).map((_, i) => (
        <div
          key={i}
          className="rounded-sm"
          style={{
            width: "14px",
            height: "14px",
            background: Math.random() > 0.4 ? colors[i % colors.length] : "rgba(233,218,182,0.1)",
            opacity: 0.6 + Math.random() * 0.4,
          }}
        />
      ))}
    </div>
  );
}

function DisciplineScreen() {
  return (
    <div className="w-full h-full flex flex-col px-4 pt-4" style={{ background: "#1C1E18" }}>
      <div className="text-sm font-black mb-4" style={{ color: "#E9DAB6" }}>
        Discipline
      </div>
      {/* Streak stats */}
      <div className="flex justify-around mb-4">
        {["5", "10", "3"].map((val, i) => (
          <div key={i} className="text-center">
            <div className="text-2xl font-black" style={{ color: "#E9DAB6" }}>{val}</div>
            <div className="text-xs" style={{ color: "rgba(233,218,182,0.4)" }}>streak</div>
          </div>
        ))}
      </div>
      {/* Calendar */}
      <div className="mb-4">
        <div className="text-xs mb-2" style={{ color: "rgba(233,218,182,0.4)" }}>Last 5 weeks</div>
        <CalendarGrid />
      </div>
      {/* Compliance circle */}
      <div className="flex items-center justify-center flex-1 flex-col gap-2">
        <div className="text-xs" style={{ color: "rgba(233,218,182,0.4)" }}>Compliance</div>
        <div
          className="relative flex items-center justify-center"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: `conic-gradient(#597E55 0deg 90deg, rgba(233,218,182,0.1) 90deg 360deg)`,
            boxShadow: "0 0 0 6px rgba(89,126,85,0.15)",
          }}
        >
          <div
            className="absolute inset-2 rounded-full flex items-center justify-center"
            style={{ background: "#1C1E18" }}
          >
            <span className="text-sm font-black" style={{ color: "#E9DAB6" }}>25%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: "#E8968C" }}
    >
      {/* Floating emoji decorations */}
      {floatingIcons.map((icon, i) => (
        <div
          key={i}
          className={`absolute pointer-events-none ${icon.className}`}
          style={icon.style}
        >
          {icon.emoji}
        </div>
      ))}

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#1C1E18", opacity: 0.7 }}
          >
            COMPLIANCE DASHBOARD
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black leading-tight mb-2"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "#1C1E18" }}
          >
            Know your patterns.
            <br />
            Fix them.
          </motion.h2>
        </div>

        {/* Phone */}
        <div className="flex justify-center mb-8">
          <PhoneMockup borderColor="#1C1E18" bgColor="#1C1E18">
            <DisciplineScreen />
          </PhoneMockup>
        </div>

        {/* Body text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-base leading-relaxed"
          style={{ color: "rgba(28,30,24,0.7)" }}
        >
          Every session is tracked. Every rule breach is logged.
          <br />
          Over time you&apos;ll see exactly where you lose discipline and fix it.
        </motion.p>
      </div>
    </section>
  );
}
