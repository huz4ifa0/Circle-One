"use client";

import React, { memo } from "react";

interface ExecutiveCTAButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "orange" | "royal" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
}

export const ExecutiveCTAButton: React.FC<ExecutiveCTAButtonProps> = memo(({
  href,
  onClick,
  variant = "orange",
  size = "md",
  children,
  className = "",
  showArrow = true,
}) => {
  // Pure GPU-accelerated pill-shaped button styles
  const baseStyles =
    "group relative inline-flex items-center justify-center font-bold rounded-full overflow-hidden transition-all duration-200 ease-out select-none cursor-pointer tracking-wide hover:-translate-y-0.5 active:scale-[0.98] will-change-transform [transform:translate3d(0,0,0)]";

  const sizeStyles = {
    sm: "px-6 py-2.5 text-sm gap-2",
    md: "px-8 py-3.5 text-base gap-2.5",
    lg: "px-10 py-4 text-lg gap-3",
  };

  const variantStyles = {
    // Solid Vibrant Orange #FF6B00 with GPU hover glow
    orange:
      "bg-[#FF6B00] hover:bg-[#E05E00] text-white shadow-[0_6px_20px_rgba(255,107,0,0.32)] hover:shadow-[0_10px_28px_rgba(255,107,0,0.48)] border border-[#FF8533]/40",
    // Deep Royal Blue #004AAD
    royal:
      "bg-[#004AAD] hover:bg-[#003680] text-white shadow-[0_6px_20px_rgba(0,74,173,0.28)] hover:shadow-[0_10px_28px_rgba(0,74,173,0.42)] border border-[#1A67D2]/40",
    // Clean White Glassmorphism Outline
    outline:
      "bg-white/95 hover:bg-neutral-50 text-[#004AAD] hover:text-[#FF6B00] border border-neutral-200/80 hover:border-[#FF6B00]/60 shadow-sm hover:shadow-md",
  };

  const fullClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {/* Lightweight GPU-friendly Shimmer Light Beam Effect */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-full top-0 block -rotate-45 transform bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-500 group-hover:translate-x-full group-hover:opacity-100 will-change-transform"
      />

      {/* Button Content with smooth arrow translate */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && (
          <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1.5 will-change-transform">
            →
          </span>
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={fullClassName}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={fullClassName}>
      {content}
    </button>
  );
});

ExecutiveCTAButton.displayName = "ExecutiveCTAButton";

export default ExecutiveCTAButton;
