"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import ExecutiveCTAButton from "./ExecutiveCTAButton";

interface ServiceItem {
  id: string;
  title: string;
  image: string;
  description: string;
  chips: readonly string[];
  moq: string;
}

const servicesData: readonly ServiceItem[] = [
  {
    id: "promotional_items",
    title: "Promotional Items & Drinkware",
    image: "assets/images/corporate-mug-tumbler.jpg",
    description:
      "Double-wall vacuum insulated stainless steel tumblers, ceramic mugs with natural cork bases, die-struck metal badges, and executive swag.",
    chips: ["Permanent Fiber Laser", "Kiln Ceramic Baking", "Food-Grade 304 Steel"],
    moq: "MOQ: 50 Units",
  },
  {
    id: "corporate_gifting",
    title: "Bespoke Executive Hampers",
    image: "assets/images/executive-gift-box.jpg",
    description:
      "Luxury magnetic presentation hampers, Italian leather gold-foiled diaries, weighted rollerball pens, and customized executive appreciation sets.",
    chips: ["Hot Gold Foil Stamping", "Precision Foam Inlays", "Magnetic Rigid Boxes"],
    moq: "VIP Personalization",
  },
  {
    id: "event_merchandise",
    title: "Event & Conference Merchandise",
    image: "assets/images/corporate-apparel.jpg",
    description:
      "High-density 240 GSM combed cotton polo shirts, custom zippered hoodies, structured corporate caps, delegate lanyards, and summit kits.",
    chips: ["3D Japanese Embroidery", "Silk Screen Printing", "Colorfast Reactive Dye"],
    moq: "XS to 5XL Sizes",
  },
  {
    id: "design_consultation",
    title: "Design & Branding Consultation",
    image: "assets/images/corporate-tech-gadgets.jpg",
    description:
      "Complimentary vector proofing, 3D digital mockups, pantone color matching, and physical pre-production sample fabrication delivered to your office.",
    chips: ["Free 3D Digital Proofs", "Pantone Color Matching", "Pre-Production Sampling"],
    moq: "Free Physical Prototype",
  },
] as const;

export const Services: React.FC = memo(() => {
  return (
    <section id="services" className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF6B00]"
          >
            Our Core Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="mb-5 font-heading text-3xl font-extrabold text-[#004AAD] sm:text-4xl lg:text-5xl"
          >
            End-to-End{" "}
            <span className="font-serif italic font-semibold text-[#FF6B00]">
              Corporate Solutions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="text-base leading-relaxed text-[#64748B] sm:text-lg"
          >
            Dedicated turnkey merchandising capabilities engineered specifically for brand marketing departments, corporate HR heads, and procurement directors in Karachi and nationwide.
          </motion.p>
        </div>

        {/* 4 Performance-Optimized Services Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200/70 bg-white shadow-luxury-card transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.015] hover:border-[#004AAD]/40 hover:shadow-[0_24px_50px_-12px_rgba(0,74,173,0.16)] will-change-transform [transform:translate3d(0,0,0)]"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="mb-2.5 font-heading text-xl font-bold text-[#004AAD] sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-[#64748B]">
                  {service.description}
                </p>

                {/* Specs Chips */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {service.chips.map((chip, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-neutral-200 bg-[#F8F9FA] px-3.5 py-1 text-xs font-medium text-[#334155]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-neutral-100 pt-4">
                  <span className="rounded-full bg-[#004AAD]/5 px-3 py-1 text-xs font-bold text-[#004AAD]">
                    {service.moq}
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FF6B00] transition-colors duration-200 hover:text-[#E05E00]"
                  >
                    Inquire Service <span className="transition-transform duration-200 group-hover:translate-x-1 will-change-transform">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Feature Spotlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-14 overflow-hidden rounded-3xl border border-neutral-200/70 bg-gradient-to-r from-white via-[#FAF9F6] to-white p-7 shadow-luxury-card md:p-11"
        >
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#004AAD]/15 shadow-sm">
                <img
                  src="assets/images/executive-gift-box.jpg"
                  alt="Executive Presentation Hamper Detail"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="mb-3 inline-block rounded-full bg-[#004AAD]/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#004AAD]">
                The Circle One Advantage
              </span>
              <h3 className="mb-4 font-heading text-2xl font-extrabold text-[#004AAD] sm:text-3xl">
                Bespoke Executive Gifting, Engineered to Perfection
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-[#64748B] sm:text-base">
                Unlike brokers who outsource across street vendors, we manage laser engraving, debossing, hot gold foiling, and assembly in our owned Nazimabad and Korangi facilities. Every VIP gift is reviewed and optically inspected before nationwide dispatch.
              </p>

              <div className="mb-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#0A1128]">
                  <span className="text-[#FF6B00]">✓</span> Complimentary 3D Digital Proofs
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#0A1128]">
                  <span className="text-[#FF6B00]">✓</span> Free Physical Pre-Production Sample
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#0A1128]">
                  <span className="text-[#FF6B00]">✓</span> 100% Active FBR & SRB Compliance
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#0A1128]">
                  <span className="text-[#FF6B00]">✓</span> Insured Express Nationwide Dispatch
                </div>
              </div>

              <ExecutiveCTAButton href="#contact" variant="orange" size="md">
                Inquire With Procurement Desk
              </ExecutiveCTAButton>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
});

Services.displayName = "Services";

export default Services;
