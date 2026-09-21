import { AnimatePresence, motion } from "motion/react";
import { projectById } from "@/data/projects";
import { CategoryBadge } from "@/shared/ui/CategoryBadge";
import { Tag } from "@/shared/ui/Tag";
import { CATEGORY_META } from "@/core/theme";
import { useCanvasStore } from "@/features/canvas/store/canvasStore";

export function ProjectPreviewPanel() {
  const focusedId = useCanvasStore((s) => s.focusedId);
  const controls = useCanvasStore((s) => s.controls);
  const project = focusedId ? projectById(focusedId) : undefined;

  return (
    <AnimatePresence mode="wait">
      {project && (
        <motion.aside
          key={project.id}
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 32 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto w-[340px] overflow-hidden rounded-2xl border border-white/10 bg-bg-soft/90 backdrop-blur-xl"
        >
          <div
            className="h-1.5 w-full"
            style={{ background: CATEGORY_META[project.category].hex }}
          />
          <div className="p-5">
            <CategoryBadge category={project.category} />
            <h2 className="mt-3 text-2xl font-bold text-text">
              {project.title}
            </h2>
            <p className="mt-1 font-mono text-xs text-text-dim">
              {project.year}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-dim">
              {project.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Tag
                  key={tag}
                  label={tag}
                  accent={CATEGORY_META[project.category].hex}
                />
              ))}
            </div>
            <div className="mt-5 flex gap-2">
              <button
                type="button"
                onClick={() => controls?.openProject(project.id)}
                className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-bg transition hover:shadow-glow"
              >
                Open case study
              </button>
              <button
                type="button"
                onClick={() => {
                  useCanvasStore.getState().setFocused(null);
                  controls?.reset();
                }}
                className="rounded-lg border border-white/10 px-4 py-2.5 text-sm text-text-dim transition hover:text-text"
              >
                Close
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
