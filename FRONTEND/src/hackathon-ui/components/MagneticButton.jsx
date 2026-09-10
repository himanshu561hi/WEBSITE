import React from "react";

/**
 * MagneticButton
 * Red-accented case-file button with sharp corners and subtle hover glow.
 */
export default function MagneticButton({
  children,
  onClick,
  href,
  variant = "primary", // "primary" | "secondary" | "outline"
  size = "md", // "sm" | "md" | "lg"
  className = "",
  icon = null,
  type = "button",
}) {
  const baseStyles = "relative inline-flex items-center justify-center font-mono-tech font-bold uppercase tracking-wider transition-all duration-200 rounded-xs cursor-pointer select-none overflow-hidden focus:outline-none focus:ring-1 focus:ring-[#D01820]";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-xs md:text-sm gap-2",
    lg: "px-8 py-4 text-sm md:text-base gap-2.5",
  }[size] || sizeStyles.md;

  const variantStyles = {
    primary: "bg-[#B3131B] hover:bg-[#D01820] text-white border border-[#D01820] shadow-[0_0_20px_rgba(208,24,32,0.45)] hover:shadow-[0_0_30px_rgba(208,24,32,0.7)] hover:-translate-y-0.5 active:translate-y-0",
    secondary: "bg-[#141414] hover:bg-[#1a1a1a] text-slate-200 hover:text-white border border-white/20 hover:border-[#D01820] shadow-[0_0_15px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 active:translate-y-0",
    outline: "bg-transparent hover:bg-white/[0.04] text-slate-300 hover:text-white border border-white/15 hover:border-white/35 hover:-translate-y-0.5 active:translate-y-0",
  }[variant] || variantStyles.primary;

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
    >
      {content}
    </button>
  );
}
