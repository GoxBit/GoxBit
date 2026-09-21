import { CATEGORY_META } from "@/core/theme";
import type { Category } from "@/core/types";

interface CategoryBadgeProps {
  category: Category;
  size?: "sm" | "md";
}

export function CategoryBadge({ category, size = "md" }: CategoryBadgeProps) {
  const meta = CATEGORY_META[category];
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full font-mono uppercase tracking-widest ${
        size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-3 py-1 text-xs"
      }`}
      style={{ background: `${meta.hex}14`, color: meta.hex }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: meta.hex, boxShadow: `0 0 8px ${meta.hex}` }}
      />
      {meta.label}
    </span>
  );
}
