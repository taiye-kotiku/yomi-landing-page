"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const floatingIcons = [
  {
    src: "/images/img_15_obj35_582x561.png",
    w: 582, h: 561, alt: "3D star",
    size: 70,
    className: "animate-float",
    style: { top: "5%", left: "2%" },
  },
  {
    src: "/images/img_11_obj31_628x622.png",
    w: 628, h: 622, alt: "3D down arrow",
    size: 64,
    className: "animate-float-delay-1",
    style: { top: "10%", right: "4%" },
  },
  {
    src: "/images/img_14_obj34_680x590.png",
    w: 680, h: 590, alt: "3D trophy",
    size: 80,
    className: "animate-float-delay-2",
    style: { bottom: "18%", left: "0%" },
  },
  {
    src: "/images/img_10_obj30_591x623.png",
    w: 591, h: 623, alt: "3D fire 12",
    size: 72,
    className: "animate-float-delay-3",
    style: { bottom: "28%", right: "2%" },
  },
  {
    src: "/images/img_12_obj32_613x665.png",
    w: 613, h: 665, alt: "3D up arrow",
    size: 56,
    className: "animate-float-slow",
    style: { top: "42%", left: "8%" },
  },
  {
    src: "/images/img_16_obj36_291x281.png",
    w: 291, h: 281, alt: "3D star small",
    size: 44,
    className: "animate-float-delay-4",
    style: { top: "55%", right: "8%" },
  },
];

export default function Dashboard() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: "#E8968C" }}
    >
      {/* Floating 3D icon images */}
      {floatingIcons.map((icon, i) => (
        <div
          key={i}
          className={`absolute pointer-events-none ${icon.className}`}
          style={icon.style}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={icon.w}
            height={icon.h}
            style={{ width: `clamp(28px, ${icon.size}px, ${icon.size}px)`, height: "auto" }}
          />
        </div>
      ))}

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "rgba(28,30,24,0.65)" }}
          >
            COMPLIANCE DASHBOARD
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black leading-tight mb-2"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "#1C1E18" }}
          >
            Know your patterns.
            <br />
            Fix them.
          </motion.h2>
        </div>

        {/* Real discipline screen inside phone frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-8"
        >
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
                src="/images/img_19_obj39_828x1666.png"
                alt="Discipline and compliance dashboard screen"
                width={828}
                height={1666}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>

        {/* Body text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-base leading-relaxed"
          style={{ color: "rgba(28,30,24,0.65)" }}
        >
          Every session is tracked. Every rule breach is logged.
          <br />
          Over time you&apos;ll see exactly where you lose discipline and fix it.
        </motion.p>
      </div>
    </section>
  );
}
