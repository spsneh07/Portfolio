"use client";

import { SectionHeading } from "./SectionHeading";
import { Timeline } from "./Timeline";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 sm:px-8 py-28">
      <SectionHeading eyebrow="02 · Education" title="Grounding" />
      <Timeline
        entries={[
          {
            period: education.period,
            title: education.degree,
            subtitle: `${education.school}, ${education.campus}`,
            description: `CGPA: ${education.cgpa} / 10`,
          },
        ]}
      />
    </section>
  );
}
