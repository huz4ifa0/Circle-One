"use client";

import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Muhammad Hassan",
    role: "Marketing Manager",
    company: "KPMG Pakistan",
    quote:
      "Circle One delivered exceptional executive kits for our annual partner meet. The thermal engraving and gold foiling were immaculate. Truly the most reliable vendor in Karachi.",
    initials: "MH",
  },
  {
    name: "Fatima Siddiqui",
    role: "HR & Culture Head",
    company: "Habib Bank Limited (HBL)",
    quote:
      "Delivering 3,500 custom drinkware sets across 14 cities in 10 days sounded impossible, but Circle One pulled it off flawlessly. Best corporate gifting partner we've worked with.",
    initials: "FS",
  },
  {
    name: "Hassan Mahmood",
    role: "Procurement Officer",
    company: "Unilever Pakistan",
    quote:
      "Highly professional team. Their in-house sampling process gave our leadership complete confidence before we placed our bulk apparel order. 10/10 quality.",
    initials: "HM",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative bg-[#FAFAFA] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/10 px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#9C772B]"
          >
            Client Endorsements
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 font-heading text-3xl font-extrabold text-[#0A1128] sm:text-4xl lg:text-5xl"
          >
            What Corporate Leaders{" "}
            <span className="font-serif italic font-semibold text-[#C5A059]">Say</span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, y: -6 }}
              className="flex flex-col justify-between rounded-2xl border border-[#C5A059]/20 bg-white p-8 shadow-luxury-card backdrop-blur-xl transition-all duration-300 hover:border-[#C5A059]/50 hover:shadow-[0_24px_50px_-12px_rgba(197,160,89,0.22)]"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-base tracking-widest text-[#C5A059]">★★★★★</div>
                  <span className="rounded-full border border-emerald-500/20 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
                    ✓ Verified Enterprise
                  </span>
                </div>

                <p className="mb-6 text-sm italic leading-relaxed text-[#334155]">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-[#0A1128]/5 pt-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C5A059]/30 bg-gradient-to-br from-[#0A1128] to-[#1C2541] text-xs font-bold text-[#C5A059] shadow-sm">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0A1128]">{item.name}</h4>
                  <p className="text-xs text-[#64748B]">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
