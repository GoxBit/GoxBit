import { Graphics } from "pixi.js";
import { CANVAS_CONFIG } from "@/core/config";
import { palette } from "@/core/theme";

export function createGrid(): Graphics {
  const g = new Graphics();
  const ext = CANVAS_CONFIG.worldExtent;
  const step = CANVAS_CONFIG.gridSpacing;

  for (let x = -ext; x <= ext; x += step) g.moveTo(x, -ext).lineTo(x, ext);
  for (let y = -ext; y <= ext; y += step) g.moveTo(-ext, y).lineTo(ext, y);
  g.stroke({ width: 1, color: palette.grid, alpha: 0.45 });

  g.moveTo(-ext, 0)
    .lineTo(ext, 0)
    .moveTo(0, -ext)
    .lineTo(0, ext)
    .stroke({ width: 1.5, color: palette.primary, alpha: 0.12 });

  return g;
}
