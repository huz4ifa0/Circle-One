"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const WhatsAppConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (hasUnread) setHasUnread(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.94 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-full right-0 mb-4 w-80 max-w-[calc(100vw-32px)] overflow-hidden rounded-2xl border border-[#004AAD]/20 bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-[#FF6B00] bg-gradient-to-r from-[#004AAD] to-[#002766] p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md">
                  <img
                    src="assets/images/circleone-mark.svg"
                    alt="Circle One"
                    className="h-6 w-6"
                  />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Circle One Concierge</h4>
                  <p className="text-[11px] text-white/80">Karachi Sales Desk • Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-xs transition-colors hover:bg-white/30 text-white"
              >
                ✕
              </button>
            </div>

            {/* Chat Body */}
            <div className="bg-[#F8F9FA] p-4">
              <div className="mb-3 text-center text-[10px] font-semibold uppercase tracking-wider text-[#64748B]">
                Today
              </div>
              <div className="rounded-2xl rounded-tl-sm bg-white p-3.5 shadow-sm border border-neutral-200/60">
                <div className="mb-1 text-xs font-bold text-[#004AAD]">Circle One Corporate</div>
                <p className="text-xs leading-relaxed text-[#0F172A]">
                  As-salamu alaykum! 👋 Looking for executive gifting hampers, custom drinkware, or event merchandise? How can we assist you today?
                </p>
                <div className="mt-1 text-right text-[10px] text-[#94A3B8]">Just now</div>
              </div>
              <div className="mt-2 text-center text-[11px] text-[#64748B]">
                ⚡ Typically replies in under 15 minutes
              </div>
            </div>

            {/* Action Footer */}
            <div className="bg-white p-3.5 border-t border-neutral-100">
              <a
                href="https://wa.me/923009267711?text=Hi%20Circle%20One%2C%20I%20would%20like%20to%20inquire%20about%20corporate%20merchandising."
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FF6B00] py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-[#E05E00] hover:shadow-[0_8px_20px_rgba(255,107,0,0.35)]"
              >
                Start Chat with Sales Desk →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <button
        onClick={toggleOpen}
        aria-label="Open WhatsApp Sales Desk"
        className="group relative flex items-center gap-2.5 rounded-full border border-white/40 bg-gradient-to-r from-emerald-500 to-emerald-600 py-3 pl-4 pr-5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/40"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
        </span>

        {hasUnread && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#FF6B00] text-[10px] font-extrabold text-white shadow-sm">
            1
          </span>
        )}

        <span>Chat with Us</span>
      </button>
    </div>
  );
};

export default WhatsAppConcierge;
