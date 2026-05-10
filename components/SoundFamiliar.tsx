"use client";

import { motion } from "framer-motion";

interface ChatCardProps {
  messages: { text: string; isBlue: boolean }[];
  delay?: number;
  offsetY?: number;
}

function ChatCard({ messages, delay = 0, offsetY = 0 }: ChatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 + offsetY }}
      whileInView={{ opacity: 1, y: offsetY }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className="rounded-2xl p-4 flex flex-col gap-2 min-w-[180px] max-w-[220px]"
      style={{ background: "#2A2A2A" }}
    >
      {messages.map((msg, i) => (
        <div key={i} className={`flex ${msg.isBlue ? "justify-end" : "justify-start"}`}>
          <div
            className="rounded-2xl px-3 py-2 text-sm leading-snug max-w-[160px]"
            style={{
              background: msg.isBlue ? "#147EFB" : "#3A3A3A",
              color: "#fff",
              borderRadius: msg.isBlue ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
            }}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default function SoundFamiliar() {
  return (
    <section
      className="relative pt-48 pb-24 overflow-hidden"
      style={{ background: "#1C1E18" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: "#597E55" }}
        >
          EVER HEARD THAT
        </motion.p>

        {/* Big quote */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center font-black mb-16"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#fff" }}
        >
          Just one more trade
        </motion.h2>

        {/* Chat bubbles */}
        <div className="flex justify-center items-start gap-6 flex-wrap">
          <ChatCard
            delay={0.2}
            offsetY={20}
            messages={[
              { text: "I'll just recover this one trade", isBlue: true },
              { text: "Down $400 more", isBlue: false },
            ]}
          />
          <ChatCard
            delay={0.35}
            offsetY={50}
            messages={[
              { text: "I already broke my rule once. Might as well.", isBlue: true },
              { text: "Worst trading day of the month 😐", isBlue: false },
            ]}
          />
          <ChatCard
            delay={0.2}
            offsetY={10}
            messages={[
              { text: "I'll stop after this one closes.", isBlue: true },
              { text: "Bruhhh", isBlue: false },
              { text: "It never closes green", isBlue: false },
            ]}
          />
        </div>

        {/* Footer text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 text-lg leading-relaxed"
          style={{ color: "rgba(233,218,182,0.7)" }}
        >
          Sound familiar?{" "}
          <strong style={{ color: "#E9DAB6" }}>
            TraderScript stops this loop before it starts.
          </strong>
        </motion.p>
      </div>
    </section>
  );
}
