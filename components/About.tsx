"use client";

import { SectionHeading } from "./SectionHeading";
import { motion } from "framer-motion";
import { memberships } from "@/lib/data";
import Image from "next/image";

/* ─── animation helpers ───────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 sm:px-8 py-24 sm:py-32">
      <SectionHeading eyebrow="01 · About" title="Signal over noise" />

      {/*
        All 4 blocks are direct children of this grid, each with explicit
        grid-column/grid-row placement on md+ AND an order-N class for mobile.

        Desktop (md+) – 5 columns, 2 rows:
          ┌────────────────────────────┬──────────────┐
          │  Bio    (col 1-3, row 1)   │  Photo       │  ← spans rows 1-2
          ├────────────────────────────┤  (col 4-5)   │
          │  Stats  (col 1-3, row 2)   │              │
          └────────────────────────────┴──────────────┘
          Info card is in the right col, but below photo — achieved via
          a nested flex column inside the photo wrapper on desktop, while
          the card is a separate top-level grid item with order-3 on mobile.

        Mobile (single col):
          order-1  Photo
          order-2  Bio + Stats
          order-3  Info card
      */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-5 md:grid-rows-[auto_auto] gap-x-12 lg:gap-x-16 gap-y-10 items-start">

        {/* ── PHOTO (order-1 on mobile, right col spanning both rows on desktop) ── */}
        <motion.div
          {...fadeLeft(0)}
          className="
            order-1
            md:col-start-4 md:col-end-6
            md:row-start-1 md:row-end-3
            flex justify-center md:justify-end
          "
        >
          <div className="relative group w-full max-w-[260px] sm:max-w-[280px]">
            {/* Ambient glow */}
            <div
              className="absolute -inset-2 rounded-3xl opacity-35 blur-2xl
                         group-hover:opacity-65 transition-opacity duration-700 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #38bdf8 100%)",
              }}
            />
            {/* Frame */}
            <div
              className="relative rounded-2xl overflow-hidden aspect-[3/4] w-full
                         border border-white/10
                         shadow-[0_8px_48px_-8px_rgba(0,0,0,0.7)]"
            >
              <Image
                src="/profile.jpg"
                alt="Sneh Prasad — profile photo"
                fill
                sizes="(max-width: 768px) 75vw, 280px"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                priority
              />
              {/* Bottom scrim */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(8,10,18,0.6) 0%, transparent 48%)",
                }}
              />
            </div>

            {/* "Available for roles" badge */}
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.88 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="absolute -bottom-[18px] left-1/2 -translate-x-1/2
                         glass rounded-full px-3.5 py-1.5 z-10
                         flex items-center gap-2 whitespace-nowrap
                         shadow-[0_4px_20px_rgba(0,0,0,0.4)]
                         border border-white/[0.12]"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[0.68rem] text-muted font-mono tracking-wide">
                Available for roles
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* ── BIO TEXT (order-2 on mobile, left col row 1 on desktop) ── */}
        <motion.div
          {...fadeUp(0.08)}
          className="
            order-2
            md:col-start-1 md:col-end-4
            md:row-start-1
            space-y-4 text-muted leading-relaxed text-[0.965rem]
          "
        >
          <p>
            I&apos;m a{" "}
            <span className="text-ink font-medium">Computer Science student</span> at SRM
            Institute of Science and Technology, deeply passionate about building
            intelligent software and bridging the gap between cutting-edge research and
            shippable products.
          </p>
          <p>
            Whether I&apos;m architecting full-stack applications, optimising data
            structures, or designing machine-learning pipelines—including predictive
            maintenance models for aircraft engines—my focus is always on{" "}
            <span className="text-ink font-medium">robust, end-to-end solutions</span>.
            I bring the same analytical rigour to code that I apply to evaluating
            model metrics.
          </p>
          <p>
            I&apos;ve co-authored{" "}
            <span className="text-ink font-medium">four peer-reviewed papers</span> across
            IEEE Xplore, Springer Nature, and Taylor &amp; Francis, and hold{" "}
            <span className="text-ink font-medium">two filed patents</span> in crop-yield
            imaging and farm automation. I&apos;m actively seeking SWE and AI/ML roles
            where I can ship impactful systems at scale.
          </p>
        </motion.div>

        {/* ── STATS STRIP (order-2 on mobile — appears after bio; left col row 2 on desktop) ── */}
        <motion.div
          {...fadeUp(0.18)}
          className="
            order-2
            md:col-start-1 md:col-end-4
            md:row-start-2
            grid grid-cols-3 gap-3
          "
        >
          {[
            { value: "4", label: "Papers published" },
            { value: "2", label: "Patents filed" },
            { value: "10+", label: "Projects shipped" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="glass rounded-xl px-3 py-4 text-center border border-white/[0.06]
                         hover:border-indigo/40 transition-colors duration-300"
            >
              <p className="font-display text-2xl font-semibold text-ink leading-none">
                {value}
              </p>
              <p className="mt-1.5 text-[0.68rem] text-muted font-mono tracking-wide">
                {label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ── INFO CARD (order-3 on mobile, right col row 2 on desktop) ── */}
        <motion.div
          {...fadeLeft(0.14)}
          className="
            order-3
            md:col-start-4 md:col-end-6
            md:row-start-2
            flex justify-center md:justify-end
          "
        >
          <div
            className="w-full max-w-[260px] sm:max-w-[280px]
                       glass rounded-2xl p-5 space-y-5
                       border border-white/[0.07]
                       shadow-[0_4px_28px_rgba(0,0,0,0.35)]"
          >
            {/* Focused on */}
            <div>
              <p className="eyebrow mb-3">Focused on</p>
              <ul className="space-y-2">
                {[
                  "Artificial Intelligence & ML",
                  "Full-Stack Development",
                  "Data Structures & Algorithms",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-ink">
                    <span
                      className="h-1.5 w-1.5 rounded-full shrink-0"
                      style={{ background: "linear-gradient(135deg, #6366f1, #38bdf8)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-white/[0.07]" />
            {/* Memberships */}
            <div>
              <p className="eyebrow mb-3">Memberships</p>
              <div className="flex flex-wrap gap-2">
                {memberships.map((m) => (
                  <span
                    key={m}
                    className="text-[0.68rem] font-mono px-2.5 py-1 rounded-full
                               border border-border text-muted
                               hover:border-indigo hover:text-indigo-bright
                               transition-colors duration-200 cursor-default"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
