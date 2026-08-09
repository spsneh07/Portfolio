"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Code2 } from "lucide-react";
import { AnimatedButton } from "./AnimatedButton";
import { SignalLine } from "./SignalLine";
import { profile } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-center pt-28 pb-10 overflow-hidden bg-grad-hero"
    >
      {/* ambient particles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {Array.from({ length: 22 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-indigo-bright/40"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              animation: `float ${6 + (i % 5)}s ease-in-out ${i * 0.3}s infinite`,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-4xl px-6 sm:px-8 text-center"
      >
        <motion.span variants={item} className="eyebrow">
          B.Tech CSE (AI &amp; ML) &middot; Available for SWE and AI/ML roles
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-6 font-display text-5xl sm:text-7xl font-medium tracking-tight text-ink"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 text-lg sm:text-xl text-gradient font-display"
        >
          {profile.title}
        </motion.p>

        <motion.p variants={item} className="mt-2 text-muted">
          {profile.subtitle}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl mx-auto text-muted leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <AnimatedButton href="#projects" variant="primary">
            View Projects
          </AnimatedButton>
          <AnimatedButton href="/resume.pdf" variant="ghost" target="_blank">
            Download Resume
          </AnimatedButton>
          <AnimatedButton href="#contact" variant="ghost">
            Contact
          </AnimatedButton>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-8 flex items-center justify-center gap-5 text-muted relative z-10"
        >
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-ink transition-colors">
            <Github size={20} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-ink transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="hover:text-ink transition-colors">
            <Code2 size={20} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-ink transition-colors">
            <Mail size={20} />
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[min(90vw,700px)] opacity-70 pointer-events-none">
        <SignalLine className="w-full h-16" />
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted hover:text-ink"
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
