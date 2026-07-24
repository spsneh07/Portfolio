"use client";

import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 sm:px-8 py-28">
      <SectionHeading
        eyebrow="04 · Projects"
        title="Featured work"
        description="A mix of applied ML on real sensor data, and full-stack builds."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} {...p} index={i} />
        ))}
      </div>
    </section>
  );
}
