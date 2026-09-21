import { Suspense } from "react";
import { Link } from "react-router-dom";
import { CanvasHud, CanvasStage, Minimap } from "@/features/canvas";
import { ProjectFilters, ProjectPreviewPanel } from "@/features/projects";
import { ShaderBackground } from "@/features/shaders";
import { Icon } from "@/shared/ui";

export function LabPage() {
  return (
    <main className="relative h-dvh w-screen overflow-hidden bg-canvas text-ink-text">
      <Suspense fallback={null}>
        <ShaderBackground />
      </Suspense>
      <CanvasStage />

      <header className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between p-5">
        <div className="pointer-events-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg border border-card-border bg-canvas-alt/80 px-3 py-2 font-mono text-xs uppercase tracking-widest text-ink-muted backdrop-blur transition hover:text-accent-cyan"
          >
            <Icon name="arrow_back" className="text-[16px]" />
            Back to studio
          </Link>
          <p className="mt-3 max-w-xs text-sm text-ink-muted">
            Interactive Lab — an infinite canvas of gameplay systems, shaders and
            tools. Drag to explore, scroll to zoom, click a node to dive in.
          </p>
        </div>
        <div className="pointer-events-auto max-w-md">
          <ProjectFilters />
        </div>
      </header>

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex items-center p-5">
        <ProjectPreviewPanel />
      </div>
      <div className="absolute bottom-5 left-5 z-10">
        <Minimap />
      </div>
      <div className="absolute bottom-5 right-5 z-10">
        <CanvasHud />
      </div>
    </main>
  );
}
