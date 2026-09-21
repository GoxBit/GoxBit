import type { Category } from "./types";

export const palette = {
  bg: 0x0b0f14,
  bgSoft: 0x0f151c,
  bgRaised: 0x141c26,
  primary: 0x00d4ff,
  accent: 0x6e56cf,
  success: 0x00ffa3,
  text: 0xf5f7fa,
  textDim: 0x9ba7b4,
  grid: 0x1b2733,
} as const;

export interface CategoryMeta {
  label: string;
  color: number;
  hex: string;
}

export const CATEGORY_META: Record<Category, CategoryMeta> = {
  "game-design": { label: "Game Design", color: 0x00d4ff, hex: "#00D4FF" },
  "technical-design": { label: "Technical Design", color: 0x00ffa3, hex: "#00FFA3" },
  "systems-design": { label: "Systems Design", color: 0x6e56cf, hex: "#6E56CF" },
  "gameplay-design": { label: "Gameplay Design", color: 0x00d4ff, hex: "#00D4FF" },
  "technical-art": { label: "Technical Art", color: 0xff7edb, hex: "#FF7EDB" },
  "shader-experiments": { label: "Shader Experiments", color: 0xffd166, hex: "#FFD166" },
  "unreal-engine": { label: "Unreal Engine", color: 0x8ab4ff, hex: "#8AB4FF" },
  "ai-tooling": { label: "AI Tooling", color: 0x4dffdf, hex: "#4DFFDF" },
};

export const categoryList = Object.keys(CATEGORY_META) as Category[];

export function toHex(color: number): string {
  return `#${color.toString(16).padStart(6, "0")}`;
}
