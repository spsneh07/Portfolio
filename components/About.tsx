"use client";

import { SectionHeading } from "./SectionHeading";
import { motion } from "framer-motion";
import { memberships } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 sm:px-8 py-28">
      <SectionHeading eyebrow="01 · About" title="Signal over noise" />
      <div className="grid md:grid-cols-3 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 space-y-4 text-muted leading-relaxed"
        >
          <p>
            I&apos;m a Computer Science student at SRM Institute of Science and
            Technology, deeply passionate about building intelligent software
            and bridging the gap between cutting-edge research and shippable
            products.
          </p>
          <p>
            Whether I&apos;m architecting full-stack applications, optimizing data 
            structures, or designing machine learning models—such as my work in 
            predictive maintenance for aircraft engines—my focus is always on 
            creating robust, end-to-end solutions. I approach software engineering 
            with the same analytical rigor and attention to correctness that I apply 
            to evaluating a model&apos;s metrics.
          </p>
          <p>
            Outside of coursework, I&apos;ve co-authored four papers across IEEE
            Xplore, Springer Nature, and Taylor &amp; Francis, and hold two
            filed patents in the domains of crop-yield imaging and farm
            automation. I&apos;m actively seeking versatile roles where I can
            leverage my combined expertise in AI and software development to
            build impactful systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-2xl p-6 space-y-5 h-fit"
        >
          <div>
            <p className="eyebrow mb-2">Focused on</p>
            <ul className="text-sm text-ink space-y-1.5">
              <li>Artificial Intelligence &amp; Machine Learning</li>
              <li>Full-Stack Software Development</li>
              <li>Data Structures &amp; Algorithms</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-2">Memberships</p>
            <div className="flex flex-wrap gap-2">
              {memberships.map((m) => (
                <span
                  key={m}
                  className="text-xs font-mono px-2.5 py-1 rounded-full border border-border text-muted"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
