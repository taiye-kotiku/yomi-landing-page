"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className={`absolute rounded-2xl px-4 py-3 text-sm font-semibold leading-snug max-w-[190px] shadow-lg ${className}`}
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

        {/* Phone + floating speech bubbles */}
        <div className="relative flex justify-center" style={{ minHeight: "580px" }}>
          {/* Left bubbles */}
          <SpeechBubble
            text="You can't delete the app to get around it."
            direction="right"
            delay={0.3}
            className="left-0 top-[22%]"
          />
          <SpeechBubble
            text="You set the rules. The phone enforces them."
            direction="right"
            delay={0.45}
            className="left-0 top-[50%]"
          />

          {/* Center phone with real blocked screen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto"
            style={{ width: "240px", zIndex: 10 }}
          >
            {/* Phone frame behind */}
            <Image
              src="/images/img_21_obj47_644x1324.png"
              alt="Phone frame"
              width={644}
              height={1324}
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
                src="/images/img_22_obj48_804x1748.png"
                alt="MetaTrader is blocked screen"
                width={804}
                height={1748}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right bubble */}
          <SpeechBubble
            text="You can't turn it off mid-session."
            direction="left"
            delay={0.35}
            className="right-0 top-[30%]"
          />
        </div>
      </div>
    </section>
  );
}
