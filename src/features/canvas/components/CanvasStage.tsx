import { useEffect, useRef } from "react";
import { Application } from "pixi.js";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { InfiniteCanvas } from "../pixi/InfiniteCanvas";
import { useCanvasStore } from "../store/canvasStore";
import { useProjectsStore } from "@/features/projects/store/projectsStore";

export function CanvasStage() {
  const hostRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<InfiniteCanvas | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let destroyed = false;
    let app: Application | null = null;
    const store = useCanvasStore.getState();

    const boot = async () => {
      const instance = new Application();
      await instance.init({
        resizeTo: host,
        antialias: true,
        backgroundAlpha: 0,
        resolution: Math.min(window.devicePixelRatio, 2),
        autoDensity: true,
      });
      if (destroyed) {
        instance.destroy(true);
        return;
      }
      app = instance;
      host.appendChild(instance.canvas);
      store.setViewport(instance.screen.width, instance.screen.height);

      const engine = new InfiniteCanvas(instance, projects, {
        onHover: (id) => useCanvasStore.getState().setHovered(id),
        onSelect: (id) => {
          engine.focusProject(id);
          useCanvasStore.getState().setFocused(id);
        },
        onCamera: (camera) => useCanvasStore.getState().setCamera(camera),
      });
      engineRef.current = engine;
      engine.setActiveCategories(useProjectsStore.getState().activeCategories);

      store.setControls({
        focusProject: (id) => {
          engine.focusProject(id);
          useCanvasStore.getState().setFocused(id);
        },
        openProject: (id) => navigate(`/project/${id}`),
        zoomBy: (factor) => engine.zoomBy(factor),
        reset: () => {
          engine.reset();
          useCanvasStore.getState().setFocused(null);
        },
        centerOn: (x, y, zoom) => engine.centerOn(x, y, zoom),
      });

      instance.renderer.on("resize", () => {
        engine.resize();
        useCanvasStore
          .getState()
          .setViewport(instance.screen.width, instance.screen.height);
      });
    };

    void boot();

    return () => {
      destroyed = true;
      useCanvasStore.getState().setControls(null);
      engineRef.current?.destroy();
      engineRef.current = null;
      if (app) app.destroy(true, { children: true });
    };
  }, [navigate]);

  const activeCategories = useProjectsStore((s) => s.activeCategories);
  useEffect(() => {
    engineRef.current?.setActiveCategories(activeCategories);
  }, [activeCategories]);

  return <div ref={hostRef} className="absolute inset-0 touch-none" />;
}
