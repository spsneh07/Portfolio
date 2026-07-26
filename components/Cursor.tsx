"use client";

import { useCursor } from "@/hooks/useCursor";
import { useEffect, useState } from "react";

export function Cursor() {
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Check if the device has a fine pointer (mouse/trackpad)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsFinePointer(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setIsFinePointer(e.matches);
    mediaQuery.addEventListener("change", listener);
    
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  // Don't render the cursor at all on touch devices
  if (!isFinePointer) return null;

  return <CursorInner />;
}

function CursorInner() {
  const { dotRef, ringRef } = useCursor();

  return (
    <>
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[99999] rounded-full border border-indigo-500/50 transition-colors duration-300 ease-out origin-center flex items-center justify-center opacity-0 mix-blend-screen"
        style={{ willChange: "transform, opacity" }}
      />
      
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[99999] rounded-full bg-white shadow-glow transition-colors duration-300 ease-out origin-center opacity-0"
        style={{ willChange: "transform, opacity" }}
      />
    </>
  );
}
