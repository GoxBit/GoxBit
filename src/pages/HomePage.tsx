import { Suspense } from "react";
import { CanvasHud, CanvasStage, Minimap } from "@/features/canvas";
import { ProjectFilters, ProjectPreviewPanel } from "@/features/projects";
import { ShaderBackground } from "@/features/shaders";

export function HomePage() {
  return (
    <main className="relative h-dvh w-screen overflow-hidden bg-bg text-text">
      <Suspense fallback={null}>
        <ShaderBackground />
      </Suspense>
      <CanvasStage />

      <header className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between p-5">
        <div className="pointer-events-auto">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary font-mono text-lg font-bold text-bg shadow-glow">
              G
            </span>
            <div>
              <h1 className="text-lg font-bold leading-none tracking-tight">
                GOXBIT
              </h1>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-dim">
                Technical · Game Design
              </p>
            </div>
          </div>
          <p className="mt-3 max-w-xs text-sm text-text-dim">
            An infinite canvas of game systems, shaders and tools. Drag to
            explore, scroll to zoom, click a node to dive in.
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
