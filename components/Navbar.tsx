"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BrainCircuit } from "lucide-react";
import { useMagnetic } from "@/hooks/useMagnetic";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
];

function MagneticLink({ href, children, className, ariaLabel }: { href: string; children: React.ReactNode; className?: string; ariaLabel?: string }) {
  const ref = useMagnetic<HTMLAnchorElement>();
  return (
    <a ref={ref} href={href} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}

function MagneticButton({ onClick, children, className, ariaLabel, ariaExpanded }: { onClick: () => void; children: React.ReactNode; className?: string; ariaLabel?: string; ariaExpanded?: boolean }) {
  const ref = useMagnetic<HTMLButtonElement>();
  return (
    <button ref={ref} onClick={onClick} className={className} aria-label={ariaLabel} aria-expanded={ariaExpanded}>
      {children}
    </button>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-6xl px-6 sm:px-8 mt-4">
        <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
          <MagneticLink href="#top" className="flex items-center text-ink hover:text-signal transition-colors p-1" ariaLabel="Home">
            <BrainCircuit size={24} className="text-signal" />
          </MagneticLink>

          <div className="hidden md:flex items-center gap-7">
            {LINKS.map((l) => (
              <MagneticLink
                key={l.href}
                href={l.href}
                className="text-sm text-muted hover:text-ink transition-colors px-2 py-1"
              >
                {l.label}
              </MagneticLink>
            ))}
          </div>

          <MagneticButton
            className="md:hidden text-ink p-1"
            onClick={() => setOpen((v) => !v)}
            ariaLabel="Toggle menu"
            ariaExpanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </MagneticButton>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="glass mt-2 rounded-2xl px-5 py-4 flex flex-col gap-4">
                {LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-sm text-muted hover:text-ink transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
