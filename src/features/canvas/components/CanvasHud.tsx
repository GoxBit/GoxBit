import { IconButton } from "@/shared/ui";
import { useCanvasStore } from "../store/canvasStore";

export function CanvasHud() {
  const controls = useCanvasStore((s) => s.controls);
  const zoom = useCanvasStore((s) => s.camera.zoom);

  return (
    <div className="flex flex-col items-center gap-2">
      <IconButton label="+" ariaLabel="Zoom in" onClick={() => controls?.zoomBy(1.25)} />
      <div className="rounded-md bg-bg-soft/80 px-2 py-1 font-mono text-[10px] text-text-dim">
        {Math.round(zoom * 100)}%
      </div>
      <IconButton label="−" ariaLabel="Zoom out" onClick={() => controls?.zoomBy(0.8)} />
      <IconButton label="⌂" ariaLabel="Reset view" onClick={() => controls?.reset()} />
    </div>
  );
}
