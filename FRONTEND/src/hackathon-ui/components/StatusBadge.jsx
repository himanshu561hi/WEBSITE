import React from "react";

/**
 * StatusBadge
 * Authentic stamped classified marker for case file entries.
 */
export default function StatusBadge({
  text = "CONFIDENTIAL",
  variant = "red", // "red" | "green" | "amber" | "neutral"
  className = "",
}) {
  const styles = {
    red: "border-[#D01820] text-[#D01820] shadow-[0_0_10px_rgba(208,24,32,0.25)]",
    green: "border-emerald-500 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]",
    amber: "border-amber-500 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.2)]",
    neutral: "border-slate-500 text-slate-400",
  }[variant] || styles.red;

  return (
    <span
      className={`inline-block px-2.5 py-0.5 border font-mono-tech text-[10px] uppercase font-bold tracking-widest select-none ${styles} ${className}`}
    >
      [{text}]
    </span>
  );
}
