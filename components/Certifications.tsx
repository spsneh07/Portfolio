"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink, CheckCircle2 } from "lucide-react";
import { SiSap } from "react-icons/si";
import { BsMicrosoft } from "react-icons/bs";
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
            className="glass rounded-2xl p-6 flex flex-col justify-between gap-4 group transition-all duration-300 hover:border-signal/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-signal/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                {c.issuer === "SAP" ? (
                  <SiSap className="text-signal" size={24} />
                ) : c.issuer === "Microsoft" ? (
                  <BsMicrosoft className="text-signal" size={20} />
                ) : (
                  <BadgeCheck className="text-signal" size={24} />
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-ink text-base font-semibold leading-tight">{c.name}</h3>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span className="text-xs font-mono text-muted bg-surface px-2 py-1 rounded-md border border-border">
                    {c.issuer}
                  </span>
                  {c.issued && (
                    <span className="text-xs font-mono text-muted bg-surface px-2 py-1 rounded-md border border-border">
                      Issued {c.issued}
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            {(c.url || c.issued) && (
              <div className="pt-4 mt-2 border-t border-border/50 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-400">
                  <CheckCircle2 size={14} />
                  <span>Verified Credential</span>
                </div>
                {c.url && (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium bg-signal/10 text-signal px-3 py-1.5 rounded-full hover:bg-signal hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-background"
                    aria-label={`Verify ${c.name} Credential`}
                  >
                    Verify Credential <ExternalLink size={12} />
                  </a>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

