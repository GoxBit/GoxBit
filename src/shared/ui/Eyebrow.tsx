import { Icon } from "./Icon";

export type Tone = "cyan" | "amber" | "teal";

export const TONE_TEXT: Record<Tone, string> = {
  cyan: "text-accent-cyan",
  amber: "text-accent-amber",
  teal: "text-accent-teal",
};

interface EyebrowProps {
  icon: string;
  label: string;
  tone?: Tone;
}

export function Eyebrow({ icon, label, tone = "cyan" }: EyebrowProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${TONE_TEXT[tone]}`}
    >
      <Icon name={icon} className="text-[16px]" />
      <span>{label}</span>
    </div>
  );
}
