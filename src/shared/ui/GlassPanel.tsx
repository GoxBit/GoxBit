import type { ReactNode } from "react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
}

export function GlassPanel({ children, className = "" }: GlassPanelProps) {
  return (
    <div
      className={`rounded-xl border border-white/10 bg-bg-soft/80 backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}
