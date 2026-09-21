interface BrandProps {
  tagline?: string;
}

export function Brand({ tagline = "Technical Designer · Technical Artist" }: BrandProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary font-mono text-lg font-bold text-bg shadow-glow">
        G
      </span>
      <div>
        <h1 className="text-lg font-bold leading-none tracking-tight">GOXBIT</h1>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-dim">
          {tagline}
        </p>
      </div>
    </div>
  );
}
