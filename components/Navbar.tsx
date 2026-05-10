"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
      style={{ background: "#E9DAB6" }}
    >
      <span
        className="text-xl font-bold tracking-tight"
        style={{ color: "#597E55" }}
      >
        TraderScript.ai
      </span>
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors"
        style={{ background: "#3A3D2E", color: "#E9DAB6" }}
      >
        Get Early Access
      </motion.button>
    </motion.nav>
  );
}
