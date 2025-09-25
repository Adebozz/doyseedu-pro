"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type QA = { q: string; a: string };

export default function FAQ({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y rounded-xl border shadow-sm">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={idx} className="p-4">
            <button
              className="w-full text-left font-medium flex items-center justify-between"
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
                  <p className="pt-3 text-sm text-gray-700">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
