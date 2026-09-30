"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: "all" | "corporate" | "events" | "promotional";
  categoryLabel: string;
  volume: string;
  image: string;
  challenge: string;
  solution: string;
  results: string;
  items: string[];
}

const portfolioData: CaseStudy[] = [
  {
    id: "kpmg-merch",
    title: "KPMG Pakistan Annual Leadership Merchandise",
    client: "KPMG Advisory & Audit",
    category: "corporate",
    categoryLabel: "Corporate Gifting",
    volume: "10,000 Custom Items Delivered",
    image: "assets/images/executive-gift-box.jpg",
    challenge:
      "KPMG required 10,000 executive welcome boxes delivered simultaneously across Karachi, Lahore, and Islamabad within 14 days.",
    solution:
      "Operated dual shifts with in-house laser engraving, gold foil debossing, and direct air freight distribution.",
    results: "100% on-time delivery across all regional branches with zero defective units.",
    items: [
      "Gold-Foiled Italian Leather Journal",
      "Matte Black Thermal Flask",
      "Executive Metal Rollerball Pen",
      "Presentation Box",
    ],
  },
  {
    id: "hbl-summit",
    title: "HBL Regional Leaders Summit Gifting",
    client: "Habib Bank Limited (HBL)",
    category: "events",
    categoryLabel: "Event Merchandise",
    volume: "3,500 Luxury Drinkware Sets",
    image: "assets/images/corporate-mug-tumbler.jpg",
    challenge:
      "Needed permanent laser engraved executive drinkware that would withstand commercial dishwashing.",
    solution:
      "Engineered double-wall food-grade 304 stainless steel tumblers paired with organic cork base ceramic mugs.",
    results: "Recognized as the highest-rated conference merchandise in HBL summit history.",
    items: ["Laser Engraved Thermal Tumbler", "Cork Base Ceramic Mug", "Custom Printed Box"],
  },
  {
    id: "unilever-apparel",
    title: "Unilever Pakistan Onboarding Apparel",
    client: "Unilever Pakistan",
    category: "promotional",
    categoryLabel: "Promotional Items",
    volume: "5,000 Organic Pique Polo Shirts",
    image: "assets/images/corporate-apparel.jpg",
    challenge:
      "Required exact pantone matching with breathable 240 GSM combed cotton for Karachi summer climate.",
    solution:
      "Custom dyed combed honeycomb cotton pique with Japanese Tajima 3D embroidery and reinforced collars.",
    results: "Contract renewed for consecutive years covering all national manufacturing plants.",
    items: ["240 GSM Cotton Polo", "Brushed Fleece Zipper Hoodie", "Structured Cap"],
  },
  {
    id: "engro-tech",
    title: "Engro Corp Executive Tech Swag Box",
    client: "Engro Corporation",
    category: "corporate",
    categoryLabel: "Corporate Gifting",
    volume: "2,000 Executive Tech Kits",
    image: "assets/images/corporate-tech-gadgets.jpg",
    challenge:
      "Wanted high-end, reliable tech accessories that executive board members and senior management would actually use daily.",
    solution:
      "Sourced space gray aluminum 10,000mAh powerbanks and Qi wireless charging pads with laser-etched insignia.",
    results: "Distributed at Engro Annual Shareholder & Leadership Meet with 99.4% satisfaction score.",
    items: ["PD Fast Charging Powerbank", "Ambient LED Qi Wireless Pad", "Noise-Cancelling Earbuds"],
  },
  {
    id: "standard-chartered-badges",
    title: "Standard Chartered 24k Gold Honor Badges",
    client: "Standard Chartered Bank",
    category: "events",
    categoryLabel: "Event Merchandise",
    volume: "2,500 Enamel Lapel Badges",
    image: "assets/images/metal-lapel-badges.jpg",
    challenge:
      "Required jewelry-grade metallic lapel badges that would not damage expensive executive suits or blazers.",
    solution:
      "Manufactured die-struck brass badges with 24k gold electroplating and dual neodymium magnetic clasps.",
    results: "Zero clothing damage reported; deployed nationwide across priority banking branches.",
    items: ["Die-Struck Brass Lapel Pins", "Dual Neodymium Magnetic Backing", "Woven Silk Neck Lanyard"],
  },
  {
    id: "nestle-stationery",
    title: "Nestlé Corporate Executive Stationery",
    client: "Nestlé Pakistan",
    category: "promotional",
    categoryLabel: "Promotional Items",
    volume: "4,000 Embossed Journal Sets",
    image: "assets/images/leather-journal-pen.jpg",
    challenge:
      "Sourcing 4,000 textured journals with gilded gold edges and brass weighted pens within 10 days.",
    solution:
      "Stock reserved at our Karachi warehouse with rapid in-house foil stamping lines running 24/7.",
    results: "Delivered 2 days ahead of schedule for annual corporate planning conferences.",
    items: ["Thermo-PU Textured Journal", "Gilded Gold Foil Page Edges", "Brass Heavyweight Pen"],
  },
];

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "corporate" | "events" | "promotional">("all");
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "corporate", label: "Corporate Gifting" },
    { key: "events", label: "Event Merchandise" },
    { key: "promotional", label: "Promotional Items" },
  ] as const;

  return (
    <section id="portfolio" className="relative bg-[#FAFAFA] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/10 px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#9C772B]"
          >
            Demonstrated Track Record
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 font-heading text-3xl font-extrabold text-[#0A1128] sm:text-4xl lg:text-5xl"
          >
            Our Portfolio &{" "}
            <span className="font-serif italic font-semibold text-[#C5A059]">
              Case Studies
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base leading-relaxed text-[#64748B] sm:text-lg"
          >
            Click any project to inspect the challenge, engineered manufacturing solution, and enterprise deliverables produced for Pakistan's leading corporations.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {categories.map((tab) => {
            const isActive = activeCategory === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`relative rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#C5A059] to-[#A8833B] text-white shadow-luxury-gold"
                    : "border border-[#C5A059]/25 bg-white text-[#64748B] hover:border-[#C5A059] hover:text-[#0A1128]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Staggered Framer Motion */}
        <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.02, y: -6 }}
                onClick={() => setSelectedCase(project)}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-[#C5A059]/20 bg-white shadow-luxury-card backdrop-blur-xl transition-all duration-300 hover:border-[#C5A059]/50 hover:shadow-[0_24px_50px_-12px_rgba(197,160,89,0.25)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-[#C5A059]/30 bg-white/95 px-3 py-1 text-xs font-bold text-[#8C6720] shadow-sm backdrop-blur-md">
                    {project.categoryLabel}
                  </span>
                </div>

                <div className="p-6">
                  <div className="mb-2 text-xs font-bold uppercase tracking-wider text-[#9C772B]">
                    {project.client}
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-bold text-[#0A1128] transition-colors duration-200 group-hover:text-[#C5A059]">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-[#64748B]">{project.volume}</p>

                  <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#9C772B] transition-transform duration-300 group-hover:translate-x-1">
                    View Full Case Study →
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Lightbox */}
        <AnimatePresence>
          {selectedCase && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A1128]/70 p-4 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-[#C5A059]/30 bg-white p-8 shadow-2xl"
              >
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#C5A059]/30 bg-[#F8F9FA] text-[#0A1128] transition-transform hover:rotate-90 hover:bg-[#C5A059]/10"
                >
                  ✕
                </button>

                <div className="relative mb-6 aspect-video overflow-hidden rounded-2xl border border-[#C5A059]/25 shadow-md">
                  <img
                    src={selectedCase.image}
                    alt={selectedCase.title}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-[#C5A059]/30 bg-white/95 px-3 py-1 text-xs font-bold text-[#8C6720]">
                    {selectedCase.categoryLabel}
                  </span>
                </div>

                <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#9C772B]">
                  Client: {selectedCase.client}
                </div>
                <h3 className="mb-2 font-heading text-2xl font-bold text-[#0A1128]">
                  {selectedCase.title}
                </h3>
                <p className="mb-6 text-sm font-semibold text-[#C5A059]">{selectedCase.volume}</p>

                <div className="mb-6 space-y-4">
                  <div className="rounded-xl border border-[#C5A059]/20 bg-[#FAF8F5] p-4">
                    <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-[#0A1128]">
                      🎯 Challenge
                    </h4>
                    <p className="text-sm text-[#64748B]">{selectedCase.challenge}</p>
                  </div>

                  <div className="rounded-xl border border-[#C5A059]/20 bg-[#FDFBF7] p-4">
                    <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-[#9C772B]">
                      ⚙️ Circle One Solution
                    </h4>
                    <p className="text-sm text-[#64748B]">{selectedCase.solution}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-50/50 p-4">
                    <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
                      📈 Results & Impact
                    </h4>
                    <p className="text-sm text-emerald-950">{selectedCase.results}</p>
                  </div>
                </div>

                <div className="flex justify-end gap-3 border-t border-[#C5A059]/20 pt-6">
                  <button
                    onClick={() => setSelectedCase(null)}
                    className="rounded-xl border border-[#C5A059]/30 px-5 py-2.5 text-sm font-semibold text-[#0A1128] hover:bg-[#F8F9FA]"
                  >
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedCase(null)}
                    className="rounded-xl bg-gradient-to-r from-[#C5A059] to-[#A8833B] px-6 py-2.5 text-sm font-semibold text-white shadow-luxury-gold hover:from-[#D8B878] hover:to-[#C5A059]"
                  >
                    Inquire Similar Project →
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Portfolio;
