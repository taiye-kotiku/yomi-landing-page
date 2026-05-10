"use client";

import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";

function BlockedScreen() {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center px-6 text-center"
      style={{ background: "#1C1E18" }}
    >
      <div className="mb-6">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: "rgba(239,83,80,0.15)", border: "1px solid rgba(239,83,80,0.3)" }}
        >
          <span className="text-2xl">🔒</span>
        </div>
        <div className="text-lg font-black mb-2" style={{ color: "#E9DAB6" }}>
          MetaTrader is blocked
        </div>
        <div className="text-xs leading-relaxed" style={{ color: "rgba(233,218,182,0.5)" }}>
          You&apos;ve hit your daily max loss limit.
        </div>
        <div className="text-xs leading-relaxed mt-1" style={{ color: "rgba(233,218,182,0.4)" }}>
          Do you remember: &ldquo;I have to build wealth over 10 years, not 10 minutes.&rdquo;
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <button
          className="w-full rounded-full py-3 text-sm font-bold"
          style={{ background: "rgba(255,255,255,0.1)", color: "#E9DAB6" }}
        >
          Close Session
        </button>
        <button
          className="w-full rounded-full py-3 text-sm font-bold"
          style={{ background: "rgba(255,255,255,0.05)", color: "rgba(233,218,182,0.5)" }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

interface SpeechBubbleProps {
  text: string;
  direction?: "left" | "right";
  className?: string;
  delay?: number;
}

function SpeechBubble({ text, direction = "left", className = "", delay = 0 }: SpeechBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      className={`absolute rounded-2xl px-4 py-3 text-sm font-medium leading-snug max-w-[180px] ${className}`}
      style={{
        background: "#147EFB",
        color: "#fff",
        borderRadius:
          direction === "left" ? "18px 18px 18px 4px" : "18px 18px 4px 18px",
        zIndex: 20,
      }}
    >
      {text}
    </motion.div>
  );
}

export default function ScreenSaves() {
  return (
    <section
      className="py-28 overflow-hidden"
      style={{ background: "#E9DAB6" }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-black mb-20 leading-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#1C1E18" }}
        >
          The screen that
          <br />
          saves your account.
        </motion.h2>

        {/* Phone + speech bubbles */}
        <div className="relative flex justify-center" style={{ minHeight: "600px" }}>
          {/* Left bubbles */}
          <SpeechBubble
            text="You can't delete the app to get around it."
            direction="right"
            delay={0.3}
            className="left-0 top-1/4"
          />
          <SpeechBubble
            text="You set the rules. The phone enforces them."
            direction="right"
            delay={0.45}
            className="left-0 top-1/2"
          />

          {/* Center phone */}
          <PhoneMockup borderColor="#2D2F29" bgColor="#1C1E18">
            <BlockedScreen />
          </PhoneMockup>

          {/* Right bubble */}
          <SpeechBubble
            text="You can't turn it off mid-session."
            direction="left"
            delay={0.35}
            className="right-0 top-1/3"
          />
        </div>
      </div>
    </section>
  );
}
