"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export function AnimatedButton({
  href,
  children,
  variant = "primary",
  icon,
  target,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  icon?: ReactNode;
  target?: string;
}) {
  return (
    <motion.a
      href={href}
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={clsx(
        "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
        variant === "primary" &&
          "bg-indigo text-white shadow-glow hover:bg-indigo-bright",
        variant === "ghost" &&
          "glass text-ink hover:border-indigo-bright/60"
      )}
    >
      {children}
      {icon}
    </motion.a>
  );
}
