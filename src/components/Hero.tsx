"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import ExecutiveCTAButton from "./ExecutiveCTAButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const Hero: React.FC = memo(() => {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#FAFAFA] pb-16 pt-26 md:pt-32"
    >
      {/* Lightweight GPU-friendly Ambient Glows (Using pure CSS gradient layers, avoiding CPU re-rasterization) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-[#004AAD]/8 to-transparent blur-[100px] [transform:translate3d(0,0,0)]" />
        <div className="absolute bottom-0 left-[-80px] h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-[#FF6B00]/8 to-transparent blur-[100px] [transform:translate3d(0,0,0)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Heading & Value Proposition */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            {/* Eyebrow Luxury Badge */}
            <motion.div variants={itemVariants} className="mb-6 inline-flex">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#004AAD]/20 bg-[#004AAD]/5 px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#004AAD] shadow-sm md:text-sm">
                <span className="h-2 w-2 rounded-full bg-[#FF6B00] shadow-[0_0_8px_#FF6B00]" />
                Karachi's Premier Corporate Merchandising Partner
              </span>
            </motion.div>

            {/* Main Luxury Heading: Royal Blue #004AAD paired with Vibrant Orange #FF6B00 */}
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-heading text-4xl font-extrabold tracking-tight text-[#0A1128] sm:text-5xl lg:text-6xl"
            >
              Shaping Gifts into{" "}
              <span className="text-[#004AAD]">Lasting</span>{" "}
              <span className="font-serif italic font-semibold text-[#FF6B00] drop-shadow-[0_2px_12px_rgba(255,107,0,0.28)]">
                Partnerships
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mb-8 max-w-2xl text-base leading-relaxed text-[#64748B] sm:text-lg lg:text-xl"
            >
              We transform your corporate brand vision into tangible reality. From bespoke VIP executive hampers to high-volume summit apparel, we deliver precision manufacturing, NTN-compliant billing, and white-glove corporate fulfillment nationwide.
            </motion.p>

            {/* Button Actions: Pill-shaped with vibrant orange background and GPU hover glow */}
            <motion.div
              variants={itemVariants}
              className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <ExecutiveCTAButton href="#contact" variant="orange" size="lg">
                Get Free Quote
              </ExecutiveCTAButton>
              <ExecutiveCTAButton href="#portfolio" variant="outline" size="lg" showArrow={false}>
                Explore Portfolio
              </ExecutiveCTAButton>
            </motion.div>

            {/* Executive Stats Ribbon with Lightweight Styling */}
            <motion.div
              variants={itemVariants}
              className="relative max-w-xl overflow-hidden rounded-2xl border border-[#004AAD]/15 bg-white/95 p-5 shadow-luxury-card"
            >
              <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-[#004AAD] via-[#FF6B00] to-[#004AAD]" />
              
              <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
                <div>
                  <div className="font-mono text-2xl font-extrabold text-[#004AAD]">
                    15<span className="text-[#FF6B00]">+</span>
                  </div>
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                    Years Legacy
                  </div>
                </div>

                <div className="border-l border-neutral-200/60">
                  <div className="font-mono text-2xl font-extrabold text-[#004AAD]">
                    1.2M<span className="text-[#FF6B00]">+</span>
                  </div>
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                    Units Delivered
                  </div>
                </div>

                <div className="border-t border-neutral-200/60 pt-2 sm:border-l sm:border-t-0 sm:pt-0">
                  <div className="font-mono text-2xl font-extrabold text-[#004AAD]">
                    500<span className="text-[#FF6B00]">+</span>
                  </div>
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                    Enterprises
                  </div>
                </div>

                <div className="border-t border-neutral-200/60 pt-2 sm:border-l sm:border-t-0 sm:pt-0">
                  <div className="font-mono text-2xl font-extrabold text-[#004AAD]">
                    100<span className="text-[#FF6B00]">%</span>
                  </div>
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                    In-House QA
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Floating Luxury Hamper Card with GPU-accelerated CSS Hover */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="group relative rounded-3xl border border-[#004AAD]/15 bg-white p-3 shadow-luxury-card transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.01] hover:border-[#FF6B00]/40 hover:shadow-[0_24px_50px_-12px_rgba(0,74,173,0.18)] will-change-transform [transform:translate3d(0,0,0)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="assets/images/executive-gift-box.jpg"
                  alt="Circle One Executive Presentation Hamper"
                  loading="eager"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004AAD]/25 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-white/80 bg-white/95 p-4 shadow-md backdrop-blur-md">
                <div>
                  <h4 className="font-heading text-sm font-extrabold text-[#004AAD] sm:text-base">
                    Executive Elite Hamper
                  </h4>
                  <p className="text-xs text-[#64748B]">
                    Gold Foiled Leather • Thermal Flask • VIP Tech
                  </p>
                </div>
                <span className="rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-3 py-1 text-xs font-bold text-[#FF6B00]">
                  Bespoke VIP
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
