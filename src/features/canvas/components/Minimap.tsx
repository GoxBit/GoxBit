import { useEffect, useRef } from "react";
import { projects } from "@/data/projects";
import { CATEGORY_META } from "@/core/theme";
import { computeBounds } from "@/core/domain";
import { GlassPanel } from "@/shared/ui";
import { useCanvasStore } from "../store/canvasStore";

const MAP_W = 220;
const MAP_H = 150;
const PADDING = 900;

export function Minimap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bounds = useRef(
    computeBounds(
      projects.map((p) => p.position),
      PADDING,
    ),
  ).current;

  const toMap = (x: number, y: number) => ({
    x: ((x - bounds.minX) / (bounds.maxX - bounds.minX)) * MAP_W,
    y: ((y - bounds.minY) / (bounds.maxY - bounds.minY)) * MAP_H,
  });

  useEffect(() => {
    const draw = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;

      const { camera, viewport, focusedId } = useCanvasStore.getState();
      ctx.clearRect(0, 0, MAP_W, MAP_H);

      for (const project of projects) {
        const p = toMap(project.position.x, project.position.y);
        ctx.fillStyle = CATEGORY_META[project.category].hex;
        ctx.globalAlpha = focusedId === project.id ? 1 : 0.75;
        ctx.beginPath();
        ctx.arc(p.x, p.y, focusedId === project.id ? 4 : 2.6, 0, Math.PI * 2);
        ctx.fill();
      }

      const halfW = viewport.width / 2 / camera.zoom;
      const halfH = viewport.height / 2 / camera.zoom;
      const tl = toMap(camera.x - halfW, camera.y - halfH);
      const br = toMap(camera.x + halfW, camera.y + halfH);
      ctx.globalAlpha = 1;
      ctx.strokeStyle = "#00D4FF";
      ctx.lineWidth = 1;
      ctx.strokeRect(tl.x, tl.y, br.x - tl.x, br.y - tl.y);
    };

    let raf = 0;
    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, [bounds]);

  const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mx = event.clientX - rect.left;
    const my = event.clientY - rect.top;
    const worldX = bounds.minX + (mx / MAP_W) * (bounds.maxX - bounds.minX);
    const worldY = bounds.minY + (my / MAP_H) * (bounds.maxY - bounds.minY);
    useCanvasStore.getState().controls?.centerOn(worldX, worldY);
  };

  return (
    <GlassPanel className="p-2">
      <div className="mb-1.5 px-1 font-mono text-[10px] uppercase tracking-widest text-text-dim">
        Star Map
      </div>
      <canvas
        ref={canvasRef}
        width={MAP_W}
        height={MAP_H}
        onClick={handleClick}
        className="cursor-pointer rounded-lg"
        style={{ width: MAP_W, height: MAP_H }}
      />
    </GlassPanel>
  );
}
