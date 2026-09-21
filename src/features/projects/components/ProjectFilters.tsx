import { categoryList, CATEGORY_META } from "@/core/theme";
import { useProjectsStore } from "../store/projectsStore";

export function ProjectFilters() {
  const activeCategories = useProjectsStore((s) => s.activeCategories);
  const toggleCategory = useProjectsStore((s) => s.toggleCategory);

  return (
    <div className="flex flex-wrap gap-1.5">
      {categoryList.map((category) => {
        const meta = CATEGORY_META[category];
        const active =
          activeCategories.size === 0 || activeCategories.has(category);
        return (
          <button
            key={category}
            type="button"
            onClick={() => toggleCategory(category)}
            className="flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest transition"
            style={{
              borderColor: active ? `${meta.hex}66` : "#ffffff14",
              color: active ? meta.hex : "#9BA7B4",
              background: active ? `${meta.hex}12` : "transparent",
              opacity: active ? 1 : 0.6,
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: meta.hex }}
            />
            {meta.label}
          </button>
        );
      })}
    </div>
  );
}
