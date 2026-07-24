"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SignalLine } from "./SignalLine";

export function ProjectCard({
  title,
  description,
  problemSolved,
  features,
  outcome,
  tech,
  github,
  demo,
  featured,
  status,
  image,
  index,
}: {
  title: string;
  description: string;
  problemSolved?: string;
  features?: string[];
  outcome?: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  status?: string;
  image?: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="glass rounded-2xl overflow-hidden flex flex-col group border border-border hover:border-white/20 transition-all duration-300"
    >
      <div className="h-36 relative flex items-center justify-center bg-gradient-to-br from-surface-2 to-surface border-b border-border overflow-hidden">
        {/* Stylized placeholder gradient if no real image */}
        <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent" />
        
        <SignalLine className="w-[110%] h-14 opacity-60 group-hover:opacity-100 transition-opacity" animate={false} />
        
        {featured && (
          <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-wider text-signal bg-surface-2/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-border">
            Featured
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display text-xl text-ink font-medium">{title}</h3>
          {status && (
            <span className="text-[10px] font-mono text-muted px-2 py-0.5 rounded-full border border-border whitespace-nowrap">
              {status}
            </span>
          )}
        </div>
        
        <p className="mt-2 text-sm text-muted leading-relaxed">
          {description}
        </p>

        {problemSolved && (
          <div className="mt-4 p-3 rounded-lg bg-surface-2/50 border border-border/50">
            <span className="text-xs font-mono text-signal mb-1 block">The Problem</span>
            <p className="text-xs text-muted/90 leading-relaxed">{problemSolved}</p>
          </div>
        )}

        {features && features.length > 0 && (
          <div className="mt-4">
             <span className="text-xs font-mono text-signal mb-2 block">Key Features</span>
             <ul className="space-y-1.5">
               {features.map((f, i) => (
                 <li key={i} className="text-xs text-muted/80 flex items-start gap-2">
                   <CheckCircle2 size={12} className="text-indigo/70 mt-0.5 shrink-0" />
                   <span>{f}</span>
                 </li>
               ))}
             </ul>
          </div>
        )}

        {outcome && (
          <p className="mt-4 text-xs font-medium text-ink/80 italic border-l-2 border-indigo/40 pl-3 py-1">
            {outcome}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-surface-2 border border-border text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 pt-5 border-t border-border/50 flex items-center gap-4 text-sm mt-auto">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted hover:text-ink transition-colors group/link"
            >
              <Github size={16} className="group-hover/link:text-signal transition-colors" /> Code
            </a>
          )}
          {demo ? (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted hover:text-ink transition-colors group/link"
            >
              <ExternalLink size={16} className="group-hover/link:text-signal transition-colors" /> Live Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-muted/40 cursor-default">
              <ArrowUpRight size={16} /> Write-up soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
