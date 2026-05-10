"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const chatImages = [
  {
    src: "/images/img_2_obj9_1058x413.png",
    w: 1058, h: 413,
    alt: "I'll just recover this one trade / Down $400 more",
    delay: 0.2,
    desktopPadClass: "",
    rotate: -2.5,
  },
  {
    src: "/images/img_3_obj10_1058x444.png",
    w: 1058, h: 444,
    alt: "I already broke my rule once. Might as well.",
    delay: 0.35,
    desktopPadClass: "md:pt-20",
    rotate: 2,
  },
  {
    src: "/images/img_4_obj11_1058x431.png",
    w: 1058, h: 431,
    alt: "I'll stop after this one closes. / Bruhhh",
    delay: 0.2,
    desktopPadClass: "md:pt-5",
    rotate: -1.5,
  },
];

export default function SoundFamiliar() {
  return (
    <section
      className="relative pb-24 overflow-hidden"
      style={{ background: "#1C1E18", paddingTop: "220px" }}
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

        {/* Staggered chat screenshot images */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-4">
          {chatImages.map((img, i) => (
            <div
              key={i}
              className={`flex-1 min-w-0 ${img.desktopPadClass}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: img.rotate }}
                whileInView={{ opacity: 1, y: 0, rotate: img.rotate }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: img.delay }}
                className="rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Footer text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-20 text-lg leading-relaxed"
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
