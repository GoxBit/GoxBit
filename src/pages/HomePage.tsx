import { Suspense } from "react";
import { CanvasHud, CanvasStage, Minimap } from "@/features/canvas";
import { ProjectFilters, ProjectPreviewPanel } from "@/features/projects";
import { ShaderBackground } from "@/features/shaders";
import { Brand } from "@/shared/ui";

export function HomePage() {
  return (
    <main className="relative h-dvh w-screen overflow-hidden bg-bg text-text">
      <Suspense fallback={null}>
        <ShaderBackground />
      </Suspense>
      <CanvasStage />

      <header className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between p-5">
        <div className="pointer-events-auto">
          <Brand />
          <p className="mt-3 max-w-xs text-sm text-text-dim">
            An infinite canvas of game systems, shaders and tools from an indie
            studio &amp; tech art lab. Drag to explore, scroll to zoom, click a
            node to dive in.
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
