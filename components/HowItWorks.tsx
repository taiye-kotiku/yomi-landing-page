"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const steps = [
  {
    number: 1,
    title: "You set your rules",
    description: "Set your rules once during setup. Simple sliders for loss limits. Advanced mode for complex conditions.",
  },
  {
    number: 2,
    title: "You trade normally",
    description: "TraderScript watches your trades automatically via MetaTrader sync. No manual logging.",
  },
  {
    number: 3,
    title: "You get close",
    description: "When you're getting close, you get a warning. Time to close your positions.",
  },
  {
    number: 4,
    title: "MetaTrader locks",
    description: "When you breach your rule, MetaTrader is blocked at the OS level. Not the app. The phone itself.",
  },
  {
    number: 5,
    title: "You come back tomorrow",
    description: "Track your discipline over time. Streaks, compliance score, session history.",
  },
];

function Step({ step, side, index }: { step: typeof steps[0]; side: "left" | "right"; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isActive = useInView(ref, { once: false, margin: "-25% 0px -25% 0px" });

  return (
    <div
      ref={ref}
      className={`flex ${side === "right" ? "flex-row-reverse text-right" : "flex-row"} items-start gap-1.5 lg:gap-3 mb-5 lg:mb-10`}
    >
      {/* Number badge */}
      <motion.div
        animate={{
          background: isActive ? "#597E55" : "rgba(233,218,182,0.1)",
          color: isActive ? "#ffffff" : "rgba(233,218,182,0.4)",
        }}
        transition={{ duration: 0.45 }}
        className="flex-shrink-0 w-5 h-5 lg:w-8 lg:h-8 rounded-full flex items-center justify-center text-[9px] lg:text-sm font-black mt-0.5"
        style={{ border: "1px solid rgba(233,218,182,0.2)" }}
      >
        {step.number}
      </motion.div>

      {/* Text block */}
      <motion.div
        className="flex-1 min-w-0"
        animate={{ opacity: isActive ? 1 : 0.28 }}
        transition={{ duration: 0.45 }}
      >
        <div
          className="text-[9px] lg:text-base leading-tight mb-0.5"
          style={{
            color: "#E9DAB6",
            fontVariationSettings: isActive ? "'wght' 900" : "'wght' 500",
            transition: "font-variation-settings 0.45s ease",
          }}
        >
          {step.title}
        </div>
        <div
          className="text-[8px] lg:text-xs leading-relaxed hidden sm:block"
          style={{ color: "rgba(233,218,182,0.55)" }}
        >
          {step.description}
        </div>
      </motion.div>
    </div>
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

        {/* 3-column layout — always side by side */}
        <div className="grid grid-cols-3 gap-2 lg:gap-8 items-center">
          {/* Left steps: 1, 2, 3 */}
          <div>
            {steps.slice(0, 3).map((step, i) => (
              <Step key={step.number} step={step} side="left" index={i} />
            ))}
          </div>

          {/* Center phone — CSS frame, no black image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto w-[110px] md:w-[190px] lg:w-[255px]"
              style={{
                borderRadius: "13%",
                overflow: "hidden",
                boxShadow: "0 16px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)",
              }}
            >
              <Image
                src="/images/img_20_obj46_804x1748.png"
                alt="Your trading rules screen"
                width={804}
                height={1748}
                className="w-full h-auto block"
              />
            </motion.div>
          </motion.div>

          {/* Right steps: 4, 5 */}
          <div className="flex flex-col justify-center">
            {steps.slice(3).map((step, i) => (
              <Step key={step.number} step={step} side="right" index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
