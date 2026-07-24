import Link from "next/link";
import { SignalLine } from "@/components/SignalLine";

export default function NotFound() {
  return (
    <div className="min-h-[100svh] flex flex-col items-center justify-center px-6 text-center bg-grad-hero">
      <span className="eyebrow">Signal lost</span>
      <h1 className="mt-4 font-display text-6xl text-ink">404</h1>
      <p className="mt-3 text-muted max-w-sm">
        This page doesn&apos;t exist — the trace never resolved to a match.
      </p>
      <div className="mt-8 w-[min(80vw,420px)] opacity-70">
        <SignalLine className="w-full h-14" animate={false} />
      </div>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-indigo text-white px-5 py-2.5 text-sm font-medium shadow-glow hover:bg-indigo-bright transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
