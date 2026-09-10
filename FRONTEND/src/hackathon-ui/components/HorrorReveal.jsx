import React from "react";
import { motion } from "framer-motion";

/**
 * HorrorReveal
 * Atmospheric scroll-reveal component that fades elements smoothly out of darkness.
 */
export default function HorrorReveal({
  children,
  delay = 0,
  duration = 0.8,
  y = 24,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Smooth cinematic ease
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
