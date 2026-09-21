import type { Vec2 } from "./project";

export const computeCentroid = (points: Vec2[]): Vec2 => {
  if (points.length === 0) return { x: 0, y: 0 };
  const sum = points.reduce(
    (acc, p) => ({ x: acc.x + p.x, y: acc.y + p.y }),
    { x: 0, y: 0 },
  );
  return { x: sum.x / points.length, y: sum.y / points.length };
};

export interface Bounds {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

export const computeBounds = (points: Vec2[], padding = 0): Bounds => {
  if (points.length === 0) {
    return { minX: -padding, maxX: padding, minY: -padding, maxY: padding };
  }
  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  return {
    minX: Math.min(...xs) - padding,
    maxX: Math.max(...xs) + padding,
    minY: Math.min(...ys) - padding,
    maxY: Math.max(...ys) + padding,
  };
};
