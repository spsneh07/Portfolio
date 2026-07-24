"use client";

import { motion } from "framer-motion";

/**
 * The recurring visual signature of the site: a noisy raw sensor trace
 * on the left resolving into a smooth predicted curve on the right —
 * a nod to the RUL-prediction work that anchors the projects section.
 */
export function SignalLine({
  className = "",
  animate = true,
}: {
  className?: string;
  animate?: boolean;
}) {
  const noisy =
    "M0,40 L20,44 L34,28 L48,50 L62,22 L76,46 L90,30 L104,42 L118,20 L132,44 L146,26 L160,40 L174,32";
  const smooth =
    "M160,40 C220,40 260,40 320,40 C380,40 420,40 480,40 C560,40 620,40 700,40";

  return (
    <svg
      viewBox="0 0 700 80"
      fill="none"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d={noisy}
        stroke="#38BDF8"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={animate ? { pathLength: 0, opacity: 0 } : undefined}
        whileInView={animate ? { pathLength: 1, opacity: 0.9 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      />
      <motion.path
        d={smooth}
        stroke="url(#signal-grad)"
        strokeWidth="1.6"
        strokeLinecap="round"
        initial={animate ? { pathLength: 0, opacity: 0 } : undefined}
        whileInView={animate ? { pathLength: 1, opacity: 1 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay: 0.5, ease: "easeOut" }}
      />
      <defs>
        <linearGradient id="signal-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
