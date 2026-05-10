"use client";

import { motion } from "framer-motion";

const traders = [
  {
    emoji: "😜",
    title: "The Revenge\nTrader",
    description:
      "You know what revenge trading is. You've done it 100 times. You tell yourself you won't. You do it anyway. TraderScript makes it physically impossible.",
    delay: 0.1,
    size: "large",
  },
  {
    emoji: "🤓",
    title: "The Rule\nBreaker",
    description:
      "You have a trading plan. A good one. You just don't follow it. Now you don't have a choice.",
    delay: 0.25,
    size: "xlarge",
  },
  {
    emoji: "👩🏾",
    title: "The Prop\nTrader",
    description:
      "You're on a funded account. One bad day and it's gone. Set your drawdown limit. Let TraderScript guard it.",
    delay: 0.4,
    size: "large",
  },
];

export default function WhoIsItFor() {
  return (
    <section className="py-24" style={{ background: "#E9DAB6" }}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#597E55" }}
          >
            WHO THIS IS FOR
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#1C1E18" }}
          >
            For traders who are serious
            <br />
            about getting serious.
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 items-end">
          {traders.map((trader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: trader.delay }}
              className="flex flex-col items-start pb-6"
            >
              {/* Avatar emoji */}
              <div
                className="mb-4 flex items-center justify-center rounded-full select-none"
                style={{
                  fontSize: trader.size === "xlarge" ? "100px" : "85px",
                  width: trader.size === "xlarge" ? "140px" : "120px",
                  height: trader.size === "xlarge" ? "140px" : "120px",
                  lineHeight: "1",
                }}
              >
                {trader.emoji}
              </div>
              {/* Title */}
              <h3
                className="font-black text-xl leading-tight mb-3 whitespace-pre-line"
                style={{ color: "#1C1E18" }}
              >
                {trader.title}
              </h3>
              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: "#3A3D2E" }}>
                {trader.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
