"use client";

import { motion } from "framer-motion";

interface PhoneMockupProps {
  children: React.ReactNode;
  borderColor?: string;
  className?: string;
  bgColor?: string;
}

export default function PhoneMockup({
  children,
  borderColor = "#2D2F29",
  className = "",
  bgColor = "#1C1E18",
}: PhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative mx-auto ${className}`}
      style={{
        width: "280px",
        height: "560px",
        borderRadius: "44px",
        border: `8px solid ${borderColor}`,
        background: bgColor,
        boxShadow: "0 32px 64px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.05)",
      }}
    >
      {/* Notch */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: "120px",
          height: "28px",
          background: borderColor,
          borderRadius: "0 0 20px 20px",
          zIndex: 10,
        }}
      />
      {/* Side button left */}
      <div
        className="absolute"
        style={{
          left: "-11px",
          top: "100px",
          width: "4px",
          height: "32px",
          background: borderColor,
          borderRadius: "2px 0 0 2px",
        }}
      />
      <div
        className="absolute"
        style={{
          left: "-11px",
          top: "145px",
          width: "4px",
          height: "32px",
          background: borderColor,
          borderRadius: "2px 0 0 2px",
        }}
      />
      {/* Side button right */}
      <div
        className="absolute"
        style={{
          right: "-11px",
          top: "120px",
          width: "4px",
          height: "64px",
          background: borderColor,
          borderRadius: "0 2px 2px 0",
        }}
      />
      {/* Screen content */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius: "36px", paddingTop: "28px" }}
      >
        {children}
      </div>
    </motion.div>
  );
}
