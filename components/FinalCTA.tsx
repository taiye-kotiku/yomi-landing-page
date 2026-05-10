"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-28" style={{ background: "#1C1E18" }}>
      <div className="max-w-xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-black leading-tight mb-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#E9DAB6" }}
        >
          Your rules.
          <br />
          Finally enforced.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base leading-relaxed mb-10"
          style={{ color: "rgba(233,218,182,0.6)" }}
        >
          Join traders who stopped making excuses and started making progress.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center gap-3 justify-center mb-5"
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="rounded-full px-5 py-3 text-sm outline-none bg-transparent w-full sm:w-64"
            style={{
              border: "1px solid rgba(233,218,182,0.35)",
              color: "#E9DAB6",
            }}
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full px-6 py-3 text-sm font-bold whitespace-nowrap"
            style={{ background: "#597E55", color: "#fff" }}
          >
            Get Early Access
          </motion.button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xs"
          style={{ color: "rgba(233,218,182,0.35)" }}
        >
          iOS only · Free 7-day trial
        </motion.p>
      </div>
    </section>
  );
}
