"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { experience } from "@/lib/data";
import { Briefcase, Building2, MapPin, Code2, BrainCircuit, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 sm:px-8 py-28">
      <SectionHeading
        eyebrow="03 · Experience"
        title="Where I've worked"
        description="Building intelligent pipelines and shipping full-stack products."
      />
      <div className="grid lg:grid-cols-2 gap-8">
        {experience.map((e, i) => {
          const isAI = e.role.includes("AI") || e.role.includes("Machine");
          const RoleIcon = isAI ? BrainCircuit : Code2;

          return (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:border-white/10 transition-colors"
            >
              {/* Decorative background glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo/10 blur-[60px] rounded-full group-hover:bg-indigo/20 transition-colors pointer-events-none" />

              <div className="flex items-start justify-between mb-6 relative">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 rounded-xl bg-surface-2 border border-border group-hover:border-indigo/30 transition-colors">
                      <RoleIcon size={20} className="text-signal" />
                    </div>
                    <h3 className="font-display text-xl text-ink font-medium leading-tight">
                      {e.role}
                    </h3>
                  </div>
                  
                  <div className="ml-14 flex flex-col gap-1.5 mt-2">
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <Building2 size={14} className="text-muted/60" />
                      <span>{e.org}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted/70">
                      <MapPin size={14} className="text-muted/50" />
                      <span>{e.location}</span>
                      <span className="text-muted/30 px-1">•</span>
                      <span className="font-mono text-signal">{e.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 mb-8">
                <ul className="space-y-3">
                  {e.points.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-indigo/50 mt-0.5 shrink-0" />
                      <span className="text-sm text-muted/90 leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-surface-2 border border-border text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
