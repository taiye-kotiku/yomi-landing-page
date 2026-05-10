"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center overflow-hidden"
      style={{
        background: "#E9DAB6",
        borderRadius: "0 0 40px 40px",
        paddingTop: "100px",
      }}
    >
      {/* Text content */}
      <div className="max-w-3xl mx-auto px-6 text-center pt-16 pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-black leading-[1.05] mb-6"
          style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)", color: "#1C1E18" }}
        >
          You know the rules.
          <br />
          You just can&apos;t stop breaking them.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="leading-relaxed max-w-lg mx-auto"
          style={{ fontSize: "1rem", color: "#3A3D2E" }}
        >
          TraderScript automatically locks MetaTrader when you break your trading rules.
          <br />
          No willpower. No way to bypass it.
        </motion.p>
      </div>

      {/* Real MetaTrader phone image — bleeds into dark section below */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="relative w-full max-w-2xl mx-auto px-6"
        style={{ marginBottom: "-80px" }}
      >
        <Image
          src="/images/img_1_obj7_3044x1376.png"
          alt="MetaTrader chart on phone"
          width={3044}
          height={1376}
          className="w-full h-auto rounded-3xl shadow-2xl"
          priority
        />
      </motion.div>
    </section>
  );
}
