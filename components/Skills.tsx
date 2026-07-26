"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { skillsData } from "@/lib/data";
import {
  Code2,
  BrainCircuit,
  Database,
  Globe,
  Cloud,
  Wrench,
  LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  BrainCircuit,
  Database,
  Globe,
  Cloud,
  Wrench
};

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 sm:px-8 py-28">
      <SectionHeading eyebrow="05 · Expertise" title="Technical Arsenal" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((category, i) => {
          const Icon = iconMap[category.iconName];
          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 group hover:border-white/10 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-surface-2 border border-border group-hover:border-indigo/30 transition-colors">
                  {Icon && <Icon size={18} className="text-signal" />}
                </div>
                <h3 className="font-display text-lg text-ink">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((s, j) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 + j * 0.03 }}
                    data-cursor="link"
                    className="text-xs font-mono px-3 py-1.5 rounded-full bg-surface-2 border border-border text-muted hover:border-indigo-bright/60 hover:text-ink transition-all cursor-pointer"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
