"use client";

import { motion } from "framer-motion";
import { BookOpen, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { publications, patents } from "@/lib/data";

export function Publications() {
  return (
    <section id="publications" className="mx-auto max-w-6xl px-6 sm:px-8 py-28">
      <SectionHeading
        eyebrow="07 · Research"
        title="Publications & patents"
        description="Four co-authored papers across IEEE Xplore, Springer Nature, and Taylor & Francis, plus two filed patents."
      />

      <div className="space-y-4 mb-10">
        {publications.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="glass rounded-2xl p-6 flex items-start gap-4"
          >
            <BookOpen className="text-indigo-bright shrink-0 mt-1" size={20} />
            <div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink font-medium hover:text-signal transition-colors underline decoration-border underline-offset-4 hover:decoration-signal"
              >
                {p.title}
              </a>
              <p className="text-sm text-muted mt-1">
                {p.venue} · {p.role} · {p.year}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="eyebrow mb-4">Patents</p>
      <div className="grid sm:grid-cols-2 gap-5">
        {patents.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="glass rounded-2xl p-5 flex items-start gap-4"
          >
            <ShieldCheck className="text-violet shrink-0 mt-0.5" size={20} />
            <div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink text-sm font-medium hover:text-signal transition-colors underline decoration-border underline-offset-4 hover:decoration-signal"
              >
                {p.title}
              </a>
              <p className="text-xs text-muted mt-1 font-mono">
                App. No. {p.app} · Filed {p.year}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
