"use client";

import React from "react";
import { motion } from "framer-motion";

interface ClientBrand {
  name: string;
  tag: string;
  featured?: boolean;
}

const track1Clients: ClientBrand[] = [
  { name: "Mobil 1", tag: "Automotive Energy", featured: true },
  { name: "Getz Pharma", tag: "Healthcare", featured: true },
  { name: "MCB Bank", tag: "Financial", featured: true },
  { name: "Jubilee Life Insurance", tag: "Insurance", featured: true },
  { name: "Abbott Laboratories", tag: "Pharmaceutical", featured: true },
  { name: "Engro Corporation", tag: "Conglomerate" },
  { name: "Unilever Pakistan", tag: "FMCG" },
  { name: "KPMG Pakistan", tag: "Advisory" },
  { name: "Habib Bank Limited (HBL)", tag: "Banking" },
];

const track2Clients: ClientBrand[] = [
  { name: "Standard Chartered", tag: "Banking", featured: true },
  { name: "Pakistan State Oil (PSO)", tag: "Energy" },
  { name: "GlaxoSmithKline (GSK)", tag: "Pharma", featured: true },
  { name: "Nestlé Pakistan", tag: "Nutrition" },
  { name: "Martin Dow", tag: "Healthcare" },
  { name: "Toyota Indus Motor", tag: "Automotive", featured: true },
  { name: "Shan Foods", tag: "Global FMCG" },
  { name: "Lucky Cement", tag: "Manufacturing" },
  { name: "Bank Alfalah", tag: "Banking" },
];

export const ClientMarquee: React.FC = () => {
  return (
    <section
      aria-label="Our Esteemed Corporate Clients"
      className="relative overflow-hidden border-y border-[#C5A059]/20 bg-white py-10 shadow-luxury-sm"
    >
      <div className="mx-auto max-w-7xl px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-[#64748B]"
        >
          Trusted By Pakistan's Leading Conglomerates & Multinationals
        </motion.p>
      </div>

      {/* Track 1: Leftward Continuous Smooth Infinite Ticker */}
      <div
        className="relative flex w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 32,
          }}
          className="flex w-max gap-5 hover:[animation-play-state:paused]"
        >
          {[...track1Clients, ...track1Clients].map((client, idx) => (
            <div
              key={`track1-${idx}`}
              className={`group inline-flex items-center gap-3 rounded-full border px-6 py-3 font-semibold backdrop-blur-md transition-all duration-300 ${
                client.featured
                  ? "border-[#C5A059]/40 bg-gradient-to-r from-white to-[#FDFBF7]"
                  : "border-[#C5A059]/20 bg-white/90"
              } shadow-luxury-sm hover:-translate-y-0.5 hover:scale-[1.03] hover:border-[#C5A059] hover:shadow-[0_10px_25px_rgba(197,160,89,0.22)]`}
            >
              <span className="font-heading text-sm text-[#0A1128] transition-colors duration-200 group-hover:text-[#8F6D26] md:text-base">
                {client.name}
              </span>
              <span className="rounded-full border border-[#C5A059]/25 bg-[#C5A059]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#8C6720]">
                {client.tag}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Track 2: Rightward Continuous Smooth Infinite Ticker */}
      <div
        className="relative mt-4 flex w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 36,
          }}
          className="flex w-max gap-5 hover:[animation-play-state:paused]"
        >
          {[...track2Clients, ...track2Clients].map((client, idx) => (
            <div
              key={`track2-${idx}`}
              className={`group inline-flex items-center gap-3 rounded-full border px-6 py-3 font-semibold backdrop-blur-md transition-all duration-300 ${
                client.featured
                  ? "border-[#C5A059]/40 bg-gradient-to-r from-white to-[#FDFBF7]"
                  : "border-[#C5A059]/20 bg-white/90"
              } shadow-luxury-sm hover:-translate-y-0.5 hover:scale-[1.03] hover:border-[#C5A059] hover:shadow-[0_10px_25px_rgba(197,160,89,0.22)]`}
            >
              <span className="font-heading text-sm text-[#0A1128] transition-colors duration-200 group-hover:text-[#8F6D26] md:text-base">
                {client.name}
              </span>
              <span className="rounded-full border border-[#C5A059]/25 bg-[#C5A059]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#8C6720]">
                {client.tag}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientMarquee;
