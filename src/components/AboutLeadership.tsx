"use client";

import React from "react";
import { motion } from "framer-motion";

export const AboutLeadership: React.FC = () => {
  return (
    <section id="about" className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* About Hero Box */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#004AAD]/20 bg-[#004AAD]/5 px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#004AAD]"
          >
            Our Story & Heritage
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 font-heading text-3xl font-extrabold text-[#004AAD] sm:text-4xl lg:text-5xl"
          >
            Karachi's Trusted Partner for{" "}
            <span className="font-serif italic font-semibold text-[#FF6B00]">
              Enterprise Gifting
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base leading-relaxed text-[#64748B] sm:text-lg"
          >
            Founded to replace fragmented promotional middlemen with an elite, consultation-driven corporate gifting house. Operating from Nazimabad No. 4 and our Korangi industrial fabrication facility, Circle One combines deep Pakistani market insight with world-class craftsmanship benchmarks. Over 15+ years, we have delivered 1.2M+ items with unwavering precision.
          </motion.p>
        </div>

        {/* 3 Core Competencies */}
        <div className="mb-24 grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -6 }}
            className="rounded-2xl border border-neutral-200/80 bg-[#FAFAFA] p-8 shadow-luxury-card backdrop-blur-xl transition-all duration-300 hover:border-[#004AAD]/40 hover:shadow-[0_24px_50px_-12px_rgba(0,74,173,0.16)]"
          >
            <div className="mb-4 text-3xl">🏭</div>
            <h3 className="mb-3 font-heading text-xl font-bold text-[#004AAD]">
              Owned Karachi Infrastructure
            </h3>
            <p className="text-sm leading-relaxed text-[#64748B]">
              In-house fiber laser etching, screen printing, Tajima embroidery, and rigid box assembly in Nazimabad & Korangi for complete timeline control.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ scale: 1.02, y: -6 }}
            className="rounded-2xl border border-neutral-200/80 bg-[#FAFAFA] p-8 shadow-luxury-card backdrop-blur-xl transition-all duration-300 hover:border-[#FF6B00]/40 hover:shadow-[0_24px_50px_-12px_rgba(255,107,0,0.16)]"
          >
            <div className="mb-4 text-3xl">📜</div>
            <h3 className="mb-3 font-heading text-xl font-bold text-[#FF6B00]">
              100% Tax & FBR Compliant
            </h3>
            <p className="text-sm leading-relaxed text-[#64748B]">
              Active FBR taxpayer (NTN: 9481203-7), SRB registered with transparent sales tax invoicing and standard 30-day PO terms for enterprise accounts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02, y: -6 }}
            className="rounded-2xl border border-neutral-200/80 bg-[#FAFAFA] p-8 shadow-luxury-card backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_24px_50px_-12px_rgba(16,185,129,0.16)]"
          >
            <div className="mb-4 text-3xl">🔍</div>
            <h3 className="mb-3 font-heading text-xl font-bold text-emerald-700">
              Pre-Production Physical Proof
            </h3>
            <p className="text-sm leading-relaxed text-[#64748B]">
              Zero surprises on delivery day. We build and dispatch a physical prototype for your leadership to touch and inspect before mass fabrication begins.
            </p>
          </motion.div>
        </div>

        {/* Executive Directorate: Tariq Mehmood & Khalid Bashir */}
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <span className="mb-3 inline-block rounded-full bg-[#004AAD]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#004AAD]">
              Executive Directorate
            </span>
            <h3 className="font-heading text-3xl font-extrabold text-[#004AAD] sm:text-4xl">
              The Minds Behind <span className="font-serif italic text-[#FF6B00]">Circle One</span>
            </h3>
            <p className="mt-2 text-sm text-[#64748B]">
              Guiding vision, operational precision, and enduring client partnerships across Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            
            {/* Tariq Mehmood: Founder / CEO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -8 }}
              className="relative overflow-hidden rounded-3xl border border-[#004AAD]/20 bg-gradient-to-b from-white via-[#F8FBFF] to-white p-10 text-center shadow-luxury-card backdrop-blur-xl transition-all duration-300 hover:border-[#004AAD]/50 hover:shadow-[0_28px_65px_-12px_rgba(0,74,173,0.22)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#004AAD] via-[#1A67D2] to-[#004AAD]" />

              <div className="relative mx-auto mb-6 inline-block">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-[#004AAD] to-[#002766] font-heading text-3xl font-extrabold text-white shadow-xl">
                  TM
                </div>
                <span className="absolute -bottom-1 -right-1 rounded-full border-2 border-white bg-[#004AAD] px-2.5 py-0.5 text-[11px] font-bold text-white shadow-md">
                  CEO
                </span>
              </div>

              <h4 className="font-heading text-2xl font-bold text-[#004AAD]">Tariq Mehmood</h4>
              <div className="my-2 inline-block rounded-full border border-[#004AAD]/30 bg-[#004AAD]/10 px-4 py-1 text-xs font-bold text-[#004AAD]">
                Founder / CEO
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#64748B]">
                15+ years of strategic leadership driving high-precision corporate merchandising, bespoke executive gifting programs, and supply-chain excellence for Pakistan's premier conglomerates and multinationals.
              </p>

              <div className="mt-6 border-t border-neutral-100 pt-4 text-xs font-bold uppercase tracking-wider text-[#004AAD]">
                Strategic Direction & Enterprise Gifting
              </div>
            </motion.div>

            {/* Khalid Bashir: Co-Founder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -8 }}
              className="relative overflow-hidden rounded-3xl border border-[#FF6B00]/25 bg-gradient-to-b from-white via-[#FFF9F5] to-white p-10 text-center shadow-luxury-card backdrop-blur-xl transition-all duration-300 hover:border-[#FF6B00]/50 hover:shadow-[0_28px_65px_-12px_rgba(255,107,0,0.22)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FF6B00] via-[#FFA34D] to-[#FF6B00]" />

              <div className="relative mx-auto mb-6 inline-block">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-[#FF6B00] to-[#C95500] font-heading text-3xl font-extrabold text-white shadow-xl">
                  KB
                </div>
                <span className="absolute -bottom-1 -right-1 rounded-full border-2 border-white bg-[#FF6B00] px-2.5 py-0.5 text-[11px] font-bold text-white shadow-md">
                  COO
                </span>
              </div>

              <h4 className="font-heading text-2xl font-bold text-[#FF6B00]">Khalid Bashir</h4>
              <div className="my-2 inline-block rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-4 py-1 text-xs font-bold text-[#FF6B00]">
                Co-Founder
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#64748B]">
                Co-founder steering operational excellence, nationwide corporate supply chain networks, industrial fabrication lines, and enduring enterprise procurement partnerships across Pakistan.
              </p>

              <div className="mt-6 border-t border-neutral-100 pt-4 text-xs font-bold uppercase tracking-wider text-[#FF6B00]">
                Operations & Manufacturing Directorate
              </div>
            </motion.div>

          </div>

          {/* Executive Quality Pledge Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-[#004AAD]/20 bg-[#F8FBFF] p-6 text-center sm:flex-row sm:text-left"
          >
            <div className="text-3xl">🛡️</div>
            <div className="text-sm leading-relaxed text-[#0A1128]">
              <strong className="text-[#004AAD]">The Circle One Executive Quality Pledge:</strong> Every corporate gift bearing your company insignia undergoes multi-stage optical quality checks supervised directly by our Karachi leadership team before final packaging and delivery.
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutLeadership;
