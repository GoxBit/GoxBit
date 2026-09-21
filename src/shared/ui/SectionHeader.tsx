import type { ReactNode } from "react";
import { Eyebrow, type Tone } from "./Eyebrow";

interface SectionHeaderProps {
  icon: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  tone?: Tone;
  right?: ReactNode;
  bordered?: boolean;
}

export function SectionHeader({
  icon,
  eyebrow,
  title,
  subtitle,
  tone = "cyan",
  right,
  bordered = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col gap-4 md:flex-row md:items-end md:justify-between ${
        bordered ? "border-b border-card-border pb-8" : ""
      }`}
    >
      <div className="space-y-2">
        <Eyebrow icon={icon} label={eyebrow} tone={tone} />
        <h2 className="font-display text-3xl font-bold text-ink-text sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="max-w-2xl text-base text-ink-muted">{subtitle}</p>
        )}
      </div>
      {right}
    </div>
  );
}
