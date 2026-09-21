import { create } from "zustand";
import { CANVAS_CONFIG } from "@/core/config";

export interface Camera {
  x: number;
  y: number;
  zoom: number;
}

export interface CanvasControls {
  focusProject: (id: string) => void;
  openProject: (id: string) => void;
  zoomBy: (factor: number) => void;
  reset: () => void;
  centerOn: (x: number, y: number, zoom?: number) => void;
}

interface CanvasState {
  camera: Camera;
  viewport: { width: number; height: number };
  hoveredId: string | null;
  focusedId: string | null;
  controls: CanvasControls | null;
  setCamera: (camera: Camera) => void;
  setViewport: (width: number, height: number) => void;
  setHovered: (id: string | null) => void;
  setFocused: (id: string | null) => void;
  setControls: (controls: CanvasControls | null) => void;
}

export const useCanvasStore = create<CanvasState>((set) => ({
  camera: { x: 0, y: 0, zoom: CANVAS_CONFIG.defaultZoom },
  viewport: { width: 1, height: 1 },
  hoveredId: null,
  focusedId: null,
  controls: null,
  setCamera: (camera) => set({ camera }),
  setViewport: (width, height) => set({ viewport: { width, height } }),
  setHovered: (hoveredId) => set({ hoveredId }),
  setFocused: (focusedId) => set({ focusedId }),
  setControls: (controls) => set({ controls }),
}));
