import { useCanvasStore } from "../store/canvasStore";

function HudButton({
  label,
  onClick,
  ariaLabel,
}: {
  label: string;
  onClick: () => void;
  ariaLabel: string;
}) {
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

export function CanvasHud() {
  const controls = useCanvasStore((s) => s.controls);
  const zoom = useCanvasStore((s) => s.camera.zoom);

  return (
    <div className="flex flex-col items-center gap-2">
      <HudButton
        label="+"
        ariaLabel="Zoom in"
        onClick={() => controls?.zoomBy(1.25)}
      />
      <div className="rounded-md bg-bg-soft/80 px-2 py-1 font-mono text-[10px] text-text-dim">
        {Math.round(zoom * 100)}%
      </div>
      <HudButton
        label="−"
        ariaLabel="Zoom out"
        onClick={() => controls?.zoomBy(0.8)}
      />
      <HudButton
        label="⌂"
        ariaLabel="Reset view"
        onClick={() => controls?.reset()}
      />
    </div>
  );
}
