import type { Tone } from "./Eyebrow";
import { TONE_TEXT } from "./Eyebrow";

const DOT: Record<Tone, string> = {
  cyan: "bg-accent-cyan",
  amber: "bg-accent-amber",
  teal: "bg-accent-teal",
};

interface StatusBadgeProps {
  label: string;
  tone?: Tone;
  pulse?: boolean;
}

export function StatusBadge({ label, tone = "cyan", pulse = false }: StatusBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-3 py-1 text-xs font-medium ${TONE_TEXT[tone]}`}
    >
      <span className={`h-2 w-2 rounded-full ${DOT[tone]} ${pulse ? "animate-pulse" : ""}`} />
      <span>{label}</span>
    </div>
  );
}
