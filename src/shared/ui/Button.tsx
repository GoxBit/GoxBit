import type { ReactNode } from "react";
import { Icon } from "./Icon";

type Variant = "cyan" | "amber" | "ghost";

const VARIANTS: Record<Variant, string> = {
  cyan: "bg-accent-cyan text-canvas hover:bg-cyan-300 shadow-lg shadow-accent-cyan/25 hover:shadow-accent-cyan/40 hover:scale-[1.02]",
  amber:
    "bg-accent-amber text-canvas hover:bg-accent-amber-light shadow-lg shadow-accent-amber/20 hover:scale-[1.02]",
  ghost:
    "bg-card border border-card-border text-ink-text hover:border-accent-cyan hover:text-accent-cyan hover:bg-card-hover",
};

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  to?: string;
  onClick?: () => void;
  icon?: string;
  iconRight?: string;
  target?: string;
  className?: string;
  navigate?: (to: string) => void;
}

export function Button({
  children,
  variant = "cyan",
  href,
  to,
  onClick,
  icon,
  iconRight,
  target,
  className = "",
  navigate,
}: ButtonProps) {
  const classes = `inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${VARIANTS[variant]} ${className}`;
  const content = (
    <>
      {icon && <Icon name={icon} className="text-[18px]" />}
      <span>{children}</span>
      {iconRight && <Icon name={iconRight} className="text-[18px]" />}
    </>
  );

  if (to) {
    return (
      <button type="button" className={classes} onClick={() => navigate?.(to)}>
        {content}
      </button>
    );
  }
  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target={target}
        rel={target === "_blank" ? "noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
