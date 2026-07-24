"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 sm:px-8 py-28">
      <SectionHeading
        eyebrow="03 · Experience"
        title="Where I've worked"
        description="Time spent on the applied end of ML, and on shipping full-stack features."
      />
      <div className="grid md:grid-cols-2 gap-6">
        {experience.map((e, i) => (
          <motion.div
            key={e.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-7 flex flex-col"
          >
            <span className="text-xs font-mono text-signal">{e.period}</span>
            <h3 className="mt-2 font-display text-xl text-ink">{e.role}</h3>
            <p className="text-sm text-muted">{e.org}</p>
            <p className="text-xs text-muted/70 mb-4">{e.location}</p>
            <ul className="space-y-2 text-sm text-muted leading-relaxed list-disc list-inside">
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {e.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2.5 py-1 rounded-full border border-border text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
