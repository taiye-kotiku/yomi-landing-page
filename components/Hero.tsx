"use client";

import { motion, type Transition } from "framer-motion";
import PhoneMockup from "./PhoneMockup";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay } as Transition,
});

function MetaTraderScreen() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: "#0d0d0d", paddingTop: "8px" }}>
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-1" style={{ fontSize: "10px", color: "#aaa" }}>
        <span>12:06</span>
        <div className="flex gap-1 items-center">
          <span>●●●</span>
          <span>WiFi</span>
          <span>🔋</span>
        </div>
      </div>
      {/* Chart header */}
      <div className="px-4 pt-2 pb-1">
        <div className="text-xs font-semibold" style={{ color: "#E9DAB6" }}>M5</div>
        <div className="text-xs" style={{ color: "#E9DAB6", fontSize: "9px" }}>XAUUSD • M5</div>
        <div className="text-xs" style={{ color: "#aaa", fontSize: "9px" }}>Gold vs US Dollar, Spot CFD</div>
      </div>
      {/* Price levels */}
      <div className="flex-1 relative px-2">
        {["4717.80","4717.20","4716.60","4716.00","4715.40","4714.80"].map((price, i) => (
          <div key={i} className="flex items-center justify-end gap-1 mb-1">
            <div className="flex-1 border-b border-dashed" style={{ borderColor: "rgba(255,255,255,0.08)" }} />
            <span style={{ color: "#aaa", fontSize: "9px", minWidth: "48px", textAlign: "right" }}>{price}</span>
          </div>
        ))}
        {/* Candles */}
        <div className="absolute bottom-4 left-4 flex items-end gap-0.5">
          {[
            { h: 40, up: true },
            { h: 28, up: false },
            { h: 52, up: true },
            { h: 20, up: false },
            { h: 36, up: true },
            { h: 44, up: false },
            { h: 30, up: true },
          ].map((c, i) => (
            <div
              key={i}
              style={{
                width: "12px",
                height: `${c.h}px`,
                background: c.up ? "#26a69a" : "#ef5350",
                borderRadius: "2px",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center overflow-hidden"
      style={{
        background: "#E9DAB6",
        borderRadius: "0 0 32px 32px",
        paddingTop: "100px",
      }}
    >
      {/* Text content */}
      <div className="max-w-3xl mx-auto px-6 text-center pt-16 pb-8">
        <motion.h1
          {...fadeUp(0.1)}
          className="font-black leading-tight mb-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#1C1E18" }}
        >
          You know the rules.
          <br />
          You just can&apos;t stop breaking them.
        </motion.h1>
        <motion.p
          {...fadeUp(0.3)}
          className="text-lg leading-relaxed max-w-xl mx-auto"
          style={{ color: "#3A3D2E", fontSize: "1.05rem" }}
        >
          TraderScript automatically locks MetaTrader when you break your trading rules.
          <br />
          No willpower. No way to bypass it.
        </motion.p>
      </div>

      {/* Phone mockup — bleeds into next section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
        className="relative z-10 mt-8"
        style={{ marginBottom: "-120px" }}
      >
        <PhoneMockup borderColor="#D4845A" bgColor="#0d0d0d" className="shadow-2xl">
          <MetaTraderScreen />
        </PhoneMockup>
      </motion.div>
    </section>
  );
}
