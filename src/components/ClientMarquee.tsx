"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";

interface ClientBrand {
  name: string;
  tag: string;
  featured?: boolean;
}

const track1Clients: readonly ClientBrand[] = [
  { name: "Mobil 1", tag: "Automotive Energy", featured: true },
  { name: "Getz Pharma", tag: "Healthcare", featured: true },
  { name: "MCB Bank", tag: "Financial", featured: true },
  { name: "Jubilee Life Insurance", tag: "Insurance", featured: true },
  { name: "Abbott Laboratories", tag: "Pharmaceutical", featured: true },
  { name: "Engro Corporation", tag: "Conglomerate" },
  { name: "Unilever Pakistan", tag: "FMCG" },
  { name: "KPMG Pakistan", tag: "Advisory" },
  { name: "Habib Bank Limited (HBL)", tag: "Banking" },
] as const;

const track2Clients: readonly ClientBrand[] = [
  { name: "Standard Chartered", tag: "Banking", featured: true },
  { name: "Pakistan State Oil (PSO)", tag: "Energy" },
  { name: "GlaxoSmithKline (GSK)", tag: "Pharma", featured: true },
  { name: "Nestlé Pakistan", tag: "Nutrition" },
  { name: "Martin Dow", tag: "Healthcare" },
  { name: "Toyota Indus Motor", tag: "Automotive", featured: true },
  { name: "Shan Foods", tag: "Global FMCG" },
  { name: "Lucky Cement", tag: "Manufacturing" },
  { name: "Bank Alfalah", tag: "Banking" },
] as const;

export const ClientMarquee: React.FC = memo(() => {
  return (
    <section
      aria-label="Our Esteemed Corporate Clients"
      className="relative overflow-hidden border-y border-neutral-200/70 bg-white py-9 shadow-luxury-sm"
    >
      <div className="mx-auto max-w-7xl px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-[#64748B]"
        >
          Trusted By Pakistan's Leading Conglomerates & Multinationals
        </motion.p>
      </div>

      {/* Track 1: Pure CSS Hardware-Accelerated Infinite Ticker */}
      <div
        className="relative flex w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <div className="flex w-max gap-5 will-change-transform animate-marquee hover:[animation-play-state:paused] [transform:translate3d(0,0,0)] [backface-visibility:hidden]">
          {[...track1Clients, ...track1Clients].map((client, idx) => (
            <div
              key={`track1-${idx}`}
              className={`group inline-flex items-center gap-3 rounded-full border px-6 py-3 font-semibold transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] ${
                client.featured
                  ? "border-[#FF6B00]/30 bg-gradient-to-r from-white to-[#FFF9F5]"
                  : "border-neutral-200/70 bg-white/95"
              } shadow-sm hover:border-[#004AAD] hover:shadow-[0_10px_25px_rgba(0,74,173,0.14)]`}
            >
              <span className="font-heading text-sm text-[#0A1128] transition-colors duration-200 group-hover:text-[#004AAD] md:text-base">
                {client.name}
              </span>
              <span
                className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                  client.featured
                    ? "border border-[#FF6B00]/30 bg-[#FF6B00]/10 text-[#FF6B00]"
                    : "border border-[#004AAD]/20 bg-[#004AAD]/5 text-[#004AAD]"
                }`}
              >
                {client.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Track 2: Pure CSS Hardware-Accelerated Reverse Infinite Ticker */}
      <div
        className="relative mt-4 flex w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <div className="flex w-max gap-5 will-change-transform animate-marquee-reverse hover:[animation-play-state:paused] [transform:translate3d(0,0,0)] [backface-visibility:hidden]">
          {[...track2Clients, ...track2Clients].map((client, idx) => (
            <div
              key={`track2-${idx}`}
              className={`group inline-flex items-center gap-3 rounded-full border px-6 py-3 font-semibold transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] ${
                client.featured
                  ? "border-[#FF6B00]/30 bg-gradient-to-r from-white to-[#FFF9F5]"
                  : "border-neutral-200/70 bg-white/95"
              } shadow-sm hover:border-[#004AAD] hover:shadow-[0_10px_25px_rgba(0,74,173,0.14)]`}
            >
              <span className="font-heading text-sm text-[#0A1128] transition-colors duration-200 group-hover:text-[#004AAD] md:text-base">
                {client.name}
              </span>
              <span
                className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                  client.featured
                    ? "border border-[#FF6B00]/30 bg-[#FF6B00]/10 text-[#FF6B00]"
                    : "border border-[#004AAD]/20 bg-[#004AAD]/5 text-[#004AAD]"
                }`}
              >
                {client.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ClientMarquee.displayName = "ClientMarquee";

export default ClientMarquee;
