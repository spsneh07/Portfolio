"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

export type TimelineEntry = {
  period: string;
  title: string;
  subtitle?: string;
  description?: ReactNode;
  icon?: LucideIcon;
};

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative border-l border-border ml-3">
      {entries.map((e, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          className="mb-12 ml-8 last:mb-0 relative group"
        >
          {e.icon ? (
            <span className="absolute -left-[42px] flex items-center justify-center w-8 h-8 rounded-full bg-surface border border-border text-signal shadow-[0_0_15px_rgba(var(--color-indigo),0.1)] group-hover:border-indigo/50 group-hover:text-indigo transition-all">
              <e.icon size={14} />
            </span>
          ) : (
            <span className="absolute -left-[37px] mt-1.5 h-3 w-3 rounded-full bg-indigo/80 border-4 border-surface shadow-[0_0_10px_rgba(var(--color-indigo),0.3)] group-hover:bg-indigo transition-colors" />
          )}
          
          <span className="text-xs font-mono text-signal uppercase tracking-wider">{e.period}</span>
          <h3 className="mt-2 font-display text-lg text-ink font-medium">{e.title}</h3>
          {e.subtitle && (
            <p className="text-sm text-muted mt-1">{e.subtitle}</p>
          )}
          {e.description && (
            <div className="mt-3 text-sm text-muted/90 leading-relaxed bg-surface-2/30 p-4 rounded-xl border border-border/50">
              {e.description}
            </div>
          )}
        </motion.li>
      ))}
    </ol>
  );
}

