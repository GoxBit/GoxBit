interface TagProps {
  label: string;
  accent?: string;
}

export function Tag({ label, accent }: TagProps) {
  return (
    <span
      className="rounded-full border px-2.5 py-0.5 text-xs font-mono tracking-wide text-text-dim"
      style={{ borderColor: accent ? `${accent}55` : "#1b2733" }}
    >
      {label}
    </span>
  );
}
