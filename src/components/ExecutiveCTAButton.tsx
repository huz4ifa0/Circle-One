"use client";

import React from "react";
import { motion } from "framer-motion";

interface ExecutiveCTAButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "gold" | "navy" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
}

export const ExecutiveCTAButton: React.FC<ExecutiveCTAButtonProps> = ({
  href,
  onClick,
  variant = "gold",
  size = "md",
  children,
  className = "",
  showArrow = true,
}) => {
  const baseStyles =
    "group relative inline-flex items-center justify-center font-semibold rounded-xl overflow-hidden transition-all duration-300 select-none cursor-pointer tracking-wide";

  const sizeStyles = {
    sm: "px-5 py-2.5 text-sm gap-2",
    md: "px-7 py-3.5 text-base gap-2.5",
    lg: "px-9 py-4 text-lg gap-3",
  };

  const variantStyles = {
    gold: "bg-gradient-to-r from-[#C5A059] to-[#A8833B] hover:from-[#D8B878] hover:to-[#C5A059] text-white shadow-luxury-gold hover:shadow-[0_12px_32px_rgba(197,160,89,0.45)] border border-white/20",
    navy: "bg-gradient-to-r from-[#0A1128] to-[#1C2541] hover:from-[#1C2541] hover:to-[#0A1128] text-white border border-[#C5A059]/30 shadow-[0_8px_24px_rgba(10,17,40,0.18)] hover:shadow-[0_12px_30px_rgba(197,160,89,0.25)]",
    outline:
      "bg-white/90 hover:bg-[#C5A059]/10 text-[#0A1128] hover:text-[#8F6D26] border border-[#C5A059]/30 hover:border-[#C5A059] shadow-luxury-sm hover:shadow-[0_8px_24px_rgba(197,160,89,0.16)]",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {/* Subtle Shimmer Light Sweep on Hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-full top-0 block -rotate-45 transform bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100"
      />

      {/* Button Content with smooth arrow translate */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && (
          <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5">
            →
          </span>
        )}
      </span>
    </Component>
  );
};

export default ExecutiveCTAButton;
