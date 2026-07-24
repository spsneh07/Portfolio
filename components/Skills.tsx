"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { skills } from "@/lib/data";

export function Skills() {
  const categories = Object.entries(skills);
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 sm:px-8 py-28">
      <SectionHeading eyebrow="05 · Skills" title="Toolbox" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="glass rounded-2xl p-6"
          >
            <p className="eyebrow mb-4">{category}</p>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="text-xs font-mono px-2.5 py-1 rounded-full bg-surface-2 border border-border text-ink/90 hover:border-indigo-bright/60 hover:text-ink transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
