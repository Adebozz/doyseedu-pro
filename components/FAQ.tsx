"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type QA = { q: string; a: string };

export default function FAQ({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white shadow-sm">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={idx} className="p-4 sm:px-6">
            <button
              className="w-full min-h-11 text-left font-semibold flex items-center justify-between gap-4"
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              {item.q}
              <span className="text-xl leading-none">{isOpen ? "–" : "+"}</span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="pt-2 pb-2 leading-relaxed text-muted">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
