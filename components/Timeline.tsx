"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export type TimelineEntry = {
  period: string;
  title: string;
  subtitle?: string;
  description?: ReactNode;
};

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative border-l border-border ml-2">
      {entries.map((e, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          className="mb-10 ml-6 last:mb-0"
        >
          <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-indigo shadow-glow" />
          <span className="text-xs font-mono text-signal">{e.period}</span>
          <h3 className="mt-1 font-display text-lg text-ink">{e.title}</h3>
          {e.subtitle && (
            <p className="text-sm text-muted mt-0.5">{e.subtitle}</p>
          )}
          {e.description && (
            <div className="mt-2 text-sm text-muted leading-relaxed">
              {e.description}
            </div>
          )}
        </motion.li>
      ))}
    </ol>
  );
}
