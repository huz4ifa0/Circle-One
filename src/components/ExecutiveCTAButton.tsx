"use client";

import React from "react";
import { motion } from "framer-motion";

interface ExecutiveCTAButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "orange" | "royal" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
}

export const ExecutiveCTAButton: React.FC<ExecutiveCTAButtonProps> = ({
  href,
  onClick,
  variant = "orange",
  size = "md",
  children,
  className = "",
  showArrow = true,
}) => {
  // Pill-shaped rounded-full buttons with smooth transitions
  const baseStyles =
    "group relative inline-flex items-center justify-center font-bold rounded-full overflow-hidden transition-all duration-300 select-none cursor-pointer tracking-wide";

  const sizeStyles = {
    sm: "px-6 py-2.5 text-sm gap-2",
    md: "px-8 py-3.5 text-base gap-2.5",
    lg: "px-10 py-4 text-lg gap-3",
  };

  const variantStyles = {
    // Solid Vibrant Orange #FF6B00 with hover glow
    orange:
      "bg-[#FF6B00] hover:bg-[#E05E00] text-white shadow-[0_6px_20px_rgba(255,107,0,0.32)] hover:shadow-[0_10px_28px_rgba(255,107,0,0.48)] border border-[#FF8533]/40",
    // Deep Royal Blue #004AAD
    royal:
      "bg-[#004AAD] hover:bg-[#003680] text-white shadow-[0_6px_20px_rgba(0,74,173,0.28)] hover:shadow-[0_10px_28px_rgba(0,74,173,0.42)] border border-[#1A67D2]/40",
    // Clean White Glassmorphism Outline
    outline:
      "bg-white/95 hover:bg-neutral-50 text-[#004AAD] hover:text-[#FF6B00] border border-neutral-200/80 hover:border-[#FF6B00]/60 shadow-sm hover:shadow-md",
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
      {/* Sleek Shimmer Light Beam Effect across Button */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-full top-0 block -rotate-45 transform bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100"
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
