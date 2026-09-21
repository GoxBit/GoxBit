interface PillProps {
  label: string;
  variant?: "default" | "solid";
}

export function Pill({ label, variant = "default" }: PillProps) {
  if (variant === "solid") {
    return (
      <span className="rounded-xl border border-card-border bg-canvas px-3 py-1.5 text-xs font-medium text-ink-text">
        {label}
      </span>
    );
  }
  return (
    <span className="rounded-md border border-card-border bg-canvas px-2.5 py-1 text-xs font-medium text-ink-muted">
      {label}
    </span>
  );
}
