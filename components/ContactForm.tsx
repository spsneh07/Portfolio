"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, MapPin, Code2 } from "lucide-react";
import { profile } from "@/lib/data";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 sm:px-8 py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-12 max-w-2xl"
      >
        <span className="eyebrow">09 · Contact</span>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink">
          Let&apos;s talk
        </h2>
        <p className="mt-4 text-muted leading-relaxed">
          Open to AI/ML and full-stack roles, internships, and research
          collaborations. The fastest way to reach me is email.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-8">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="md:col-span-3 glass rounded-2xl p-7 space-y-4"
        >
          <div>
            <label htmlFor="name" className="text-xs font-mono text-muted">
              Name
            </label>
            <input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1.5 w-full rounded-lg bg-surface-2 border border-border px-3.5 py-2.5 text-sm text-ink outline-none focus:border-indigo-bright/70"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-xs font-mono text-muted">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1.5 w-full rounded-lg bg-surface-2 border border-border px-3.5 py-2.5 text-sm text-ink outline-none focus:border-indigo-bright/70"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-xs font-mono text-muted">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1.5 w-full rounded-lg bg-surface-2 border border-border px-3.5 py-2.5 text-sm text-ink outline-none focus:border-indigo-bright/70 resize-none"
              placeholder="What's on your mind?"
            />
          </div>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-indigo text-white px-5 py-2.5 text-sm font-medium shadow-glow hover:bg-indigo-bright transition-colors"
          >
            Send message <Send size={15} />
          </motion.button>
          {sent && (
            <p className="text-xs text-signal">
              Opening your email client — send when you&apos;re ready.
            </p>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-2 glass rounded-2xl p-7 space-y-5"
        >
          <div className="flex items-center gap-3 text-sm text-muted">
            <Mail size={16} className="text-signal" /> {profile.email}
          </div>
          <div className="flex items-center gap-3 text-sm text-muted">
            <MapPin size={16} className="text-signal" /> {profile.location}
          </div>
          <div className="flex items-center gap-3 text-sm text-muted">
            <Github size={16} className="text-signal" />
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              github.com/spsneh07
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted">
            <Linkedin size={16} className="text-signal" />
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted">
            <Code2 size={16} className="text-signal" />
            <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              LeetCode
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
