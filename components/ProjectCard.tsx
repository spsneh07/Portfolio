"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { SignalLine } from "./SignalLine";

export function ProjectCard({
  title,
  description,
  tech,
  highlight,
  github,
  demo,
  featured,
  index,
}: {
  title: string;
  description: string;
  tech: string[];
  highlight?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="glass rounded-2xl overflow-hidden flex flex-col group"
    >
      <div className="h-28 relative flex items-center justify-center bg-surface-2/60 border-b border-border overflow-hidden">
        <SignalLine className="w-[110%] h-14 opacity-60 group-hover:opacity-100 transition-opacity" animate={false} />
        {featured && (
          <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider text-signal">
            Featured
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-lg text-ink">{title}</h3>
        <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
          {description}
        </p>
        {highlight && (
          <p className="mt-3 text-xs text-signal font-mono">{highlight}</p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-2 py-0.5 rounded-full border border-border text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 text-sm">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted hover:text-ink transition-colors"
            >
              <Github size={15} /> Code
            </a>
          )}
          {demo ? (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted hover:text-ink transition-colors"
            >
              <ExternalLink size={15} /> Live Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-muted/40 cursor-default">
              <ArrowUpRight size={15} /> Write-up soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
