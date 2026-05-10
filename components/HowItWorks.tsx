"use client";

import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";

const steps = [
  {
    number: 1,
    title: "You set your rules",
    description:
      "Set your rules once during setup. Simple sliders for loss limits. Advanced mode for complex conditions.",
  },
  {
    number: 2,
    title: "You trade normally",
    description:
      "TraderScript watches your trades automatically via MetaTrader sync. No manual logging.",
  },
  {
    number: 3,
    title: "You get close",
    description:
      "When you're getting close, you get a warning. Time to close your positions.",
  },
  {
    number: 4,
    title: "MetaTrader locks",
    description:
      "When you breach your rule, MetaTrader is blocked at the OS level. Not the app. The phone itself.",
  },
  {
    number: 5,
    title: "You come back tomorrow",
    description:
      "Track your discipline over time. Streaks, compliance score, session history.",
  },
];

function RuleCard({
  title,
  condition,
  value,
  color,
}: {
  title: string;
  condition: string;
  value: string;
  color: string;
}) {
  return (
    <div
      className="rounded-xl p-3 mb-3 flex items-center justify-between"
      style={{ background: "rgba(255,255,255,0.08)" }}
    >
      <div>
        <div className="text-sm font-bold" style={{ color: "#E9DAB6" }}>
          {title}
        </div>
        <div className="text-xs mt-0.5" style={{ color: "rgba(233,218,182,0.6)" }}>
          {condition}
        </div>
        <div className="text-xs" style={{ color: "rgba(233,218,182,0.6)" }}>
          ≥ {value}
        </div>
      </div>
      <div
        className="rounded-full px-3 py-1 text-xs font-bold"
        style={{ background: color, color: "#1C1E18" }}
      >
        Stop
      </div>
    </div>
  );
}

function RulesScreen() {
  return (
    <div className="w-full h-full flex flex-col px-4 pt-4" style={{ background: "#1C1E18" }}>
      <div className="text-base font-black mb-4" style={{ color: "#E9DAB6" }}>
        Your trading rules
      </div>
      <div className="text-xs mb-4" style={{ color: "rgba(233,218,182,0.5)" }}>
        We&apos;ve pre-filled rules based on your trader type. Edit, remove, or add your own.
      </div>
      <RuleCard title="Max 5 trades/day" condition="When Daily Trade Count" value="5" color="#4CAF50" />
      <RuleCard title="Stop after 3 losses" condition="When Consecutive Losses" value="3" color="#FFC107" />
      <button
        className="w-full rounded-xl py-2.5 mb-4 text-sm font-semibold flex items-center justify-center gap-2"
        style={{ background: "rgba(255,255,255,0.08)", color: "#E9DAB6" }}
      >
        <span className="text-lg">+</span> Add rule
      </button>
      <div className="text-xs text-center mb-4" style={{ color: "rgba(233,218,182,0.4)" }}>
        You can always adjust rules in Settings later
      </div>
      <button
        className="w-full rounded-full py-3 font-bold text-sm flex items-center justify-center gap-2"
        style={{ background: "#597E55", color: "#fff" }}
      >
        <span>←</span> Continue
      </button>
    </div>
  );
}

interface StepProps {
  step: (typeof steps)[0];
  side: "left" | "right";
  index: number;
  isActive?: boolean;
}

function Step({ step, side, index, isActive }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -30 : 30 }}
      whileInView={{ opacity: isActive ? 1 : 0.4, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex ${side === "right" ? "flex-row-reverse text-right" : "flex-row"} items-start gap-4 mb-10`}
    >
      <div
        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black"
        style={{
          background: isActive ? "#597E55" : "rgba(233,218,182,0.15)",
          color: isActive ? "#fff" : "rgba(233,218,182,0.5)",
          border: isActive ? "none" : "1px solid rgba(233,218,182,0.2)",
        }}
      >
        {step.number}
      </div>
      <div className="flex-1">
        <div
          className="font-bold text-lg mb-1"
          style={{ color: isActive ? "#E9DAB6" : "rgba(233,218,182,0.5)" }}
        >
          {step.title}
        </div>
        <div
          className="text-sm leading-relaxed"
          style={{ color: isActive ? "rgba(233,218,182,0.75)" : "rgba(233,218,182,0.3)" }}
        >
          {step.description}
        </div>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section className="py-24" style={{ background: "#3A3D2E" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#597E55" }}
          >
            HOW IT WORKS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black leading-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "#E9DAB6" }}
          >
            Here&apos;s how it
            <br />
            <em className="not-italic" style={{ color: "#E9DAB6" }}>
              actually works
            </em>
          </motion.h2>
        </div>

        {/* 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left steps: 1, 2, 3 */}
          <div>
            {steps.slice(0, 3).map((step, i) => (
              <Step key={step.number} step={step} side="left" index={i} isActive={i === 0} />
            ))}
          </div>

          {/* Center phone */}
          <div className="flex justify-center">
            <PhoneMockup borderColor="#2D2F29" bgColor="#1C1E18">
              <RulesScreen />
            </PhoneMockup>
          </div>

          {/* Right steps: 4, 5 */}
          <div className="flex flex-col justify-center">
            {steps.slice(3).map((step, i) => (
              <Step key={step.number} step={step} side="right" index={i} isActive={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
