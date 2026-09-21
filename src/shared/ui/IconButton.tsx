interface IconButtonProps {
  label: string;
  ariaLabel: string;
  onClick: () => void;
}

export function IconButton({ label, ariaLabel, onClick }: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-bg-soft/80 text-lg text-text transition hover:border-primary/60 hover:text-primary"
    >
      {label}
    </button>
  );
}
