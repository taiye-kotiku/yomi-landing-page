"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
      whileInView={{ opacity: isActive ? 1 : 0.38, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex ${side === "right" ? "flex-row-reverse text-right" : "flex-row"} items-start gap-4 mb-10`}
    >
      <div
        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black"
        style={{
          background: isActive ? "#597E55" : "rgba(233,218,182,0.12)",
          color: isActive ? "#fff" : "rgba(233,218,182,0.45)",
          border: isActive ? "none" : "1px solid rgba(233,218,182,0.18)",
        }}
      >
        {step.number}
      </div>
      <div className="flex-1">
        <div
          className="font-bold text-lg mb-1"
          style={{ color: isActive ? "#E9DAB6" : "rgba(233,218,182,0.42)" }}
        >
          {step.title}
        </div>
        <div
          className="text-sm leading-relaxed"
          style={{ color: isActive ? "rgba(233,218,182,0.72)" : "rgba(233,218,182,0.25)" }}
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
            actually works
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

          {/* Center — real app screenshot inside phone frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            {/* Phone frame wrapper */}
            <div className="relative mx-auto" style={{ width: "260px" }}>
              {/* Phone frame behind */}
              <Image
                src="/images/img_18_obj38_640x1318.png"
                alt="Phone frame"
                width={640}
                height={1318}
                className="w-full h-auto relative z-0"
                style={{ pointerEvents: "none" }}
              />
              {/* App screen on top, inset to sit inside the frame's screen area */}
              <div
                className="absolute inset-0 z-10 overflow-hidden"
                style={{
                  top: "4.5%",
                  left: "5%",
                  right: "5%",
                  bottom: "3.5%",
                  borderRadius: "14%",
                }}
              >
                <Image
                  src="/images/img_20_obj46_804x1748.png"
                  alt="Your trading rules screen"
                  width={804}
                  height={1748}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

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
