"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 sm:px-8 py-28">
      <SectionHeading eyebrow="06 · Certifications" title="Credentials" />
      <div className="grid sm:grid-cols-2 gap-5">
        {certifications.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="glass rounded-2xl p-5 flex items-start gap-4"
          >
            <BadgeCheck className="text-signal shrink-0 mt-0.5" size={20} />
            <div>
              {c.url ? (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink text-sm font-medium hover:text-signal transition-colors underline decoration-border underline-offset-4 hover:decoration-signal"
                >
                  {c.name}
                </a>
              ) : (
                <h3 className="text-ink text-sm font-medium">{c.name}</h3>
              )}
              <p className="text-xs text-muted mt-1 font-mono">{c.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
