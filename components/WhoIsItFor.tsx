"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const traders = [
  {
    src: "/images/img_8_obj28_1952x2184.png",
    w: 1952, h: 2184,
    title: "The Revenge\nTrader",
    description: "You know what revenge trading is. You've done it 100 times. You tell yourself you won't. You do it anyway. TraderScript makes it physically impossible.",
    delay: 0.1,
    avatarClass: "w-14 md:w-24 lg:w-32",
  },
  {
    src: "/images/img_7_obj27_1920x2186.png",
    w: 1920, h: 2186,
    title: "The Rule\nBreaker",
    description: "You have a trading plan. A good one. You just don't follow it. Now you don't have a choice.",
    delay: 0.22,
    avatarClass: "w-16 md:w-28 lg:w-36",
  },
  {
    src: "/images/img_9_obj29_1888x2222.png",
    w: 1888, h: 2222,
    title: "The Prop\nTrader",
    description: "You're on a funded account. One bad day and it's gone. Set your drawdown limit. Let TraderScript guard it.",
    delay: 0.34,
    avatarClass: "w-14 md:w-24 lg:w-32",
  },
];

export default function WhoIsItFor() {
  return (
    <section className="py-24 overflow-x-hidden" style={{ background: "#E9DAB6" }}>
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
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
            style={{ fontSize: "clamp(1.6rem, 5vw, 3.2rem)", color: "#1C1E18" }}
          >
            For traders who are serious
            <br />
            about getting serious.
          </motion.h2>
        </div>

        {/* Cards — always 3 columns */}
        <div className="grid grid-cols-3 gap-3 md:gap-8 items-end">
          {traders.map((trader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.93 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: trader.delay }}
              className="flex flex-col items-start animate-subtle-pulse"
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              {/* Avatar */}
              <div className="mb-1 md:mb-2">
                <Image
                  src={trader.src}
                  alt={trader.title}
                  width={trader.w}
                  height={trader.h}
                  className={`${trader.avatarClass} h-auto`}
                />
              </div>

              {/* Title */}
              <h3
                className="font-black text-[10px] md:text-base lg:text-xl leading-tight mb-1 whitespace-pre-line"
                style={{ color: "#1C1E18" }}
              >
                {trader.title}
              </h3>

              {/* Description */}
              <p className="text-[8px] md:text-xs lg:text-sm leading-relaxed hidden sm:block" style={{ color: "#3A3D2E" }}>
                {trader.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
