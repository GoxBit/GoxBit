import { Application, Container, FederatedPointerEvent } from "pixi.js";
import gsap from "gsap";
import { CANVAS_CONFIG } from "@/core/config";
import type { Category, Project } from "@/core/types";
import { clamp } from "@/shared/lib/math";
import { createGrid } from "./grid";
import { NodeView } from "./NodeView";

export interface EngineCallbacks {
  onHover: (id: string | null) => void;
  onSelect: (id: string) => void;
  onCamera: (camera: { x: number; y: number; zoom: number }) => void;
}

const DRAG_THRESHOLD = 6;

export class InfiniteCanvas {
  private readonly world = new Container();
  private readonly nodesLayer = new Container();
  private readonly nodes = new Map<string, NodeView>();

  private readonly categoryLookup = new Map<string, Category>();

  private camX = 0;
  private camY = 0;
  private zoom: number = CANVAS_CONFIG.defaultZoom;

  private velX = 0;
  private velY = 0;
  private isDown = false;
  private dragDist = 0;
  private lastPointerX = 0;
  private lastPointerY = 0;
  private focusedId: string | null = null;

  constructor(
    private readonly app: Application,
    projects: Project[],
    private readonly cb: EngineCallbacks,
  ) {
    app.stage.addChild(this.world);
    this.world.addChild(createGrid());
    this.world.addChild(this.nodesLayer);

    for (const project of projects) {
      const node = new NodeView(project, {
        onOver: () => {
          if (this.isDragging()) return;
          if (node.state !== "focused") node.setState("hover");
          this.cb.onHover(project.id);
        },
        onOut: () => {
          node.setState(this.focusedId === project.id ? "focused" : "idle");
          this.cb.onHover(null);
        },
        onTap: () => {
          if (this.isDragging()) return;
          this.cb.onSelect(project.id);
        },
      });
      node.position.set(project.position.x, project.position.y);
      this.nodesLayer.addChild(node);
      this.nodes.set(project.id, node);
      this.categoryLookup.set(project.id, project.category);
    }

    const centroid = this.centroid(projects);
    this.camX = centroid.x;
    this.camY = centroid.y;

    app.stage.eventMode = "static";
    app.stage.hitArea = app.screen;
    app.stage.on("pointerdown", this.onPointerDown);
    app.stage.on("pointermove", this.onPointerMove);
    app.stage.on("pointerup", this.onPointerUp);
    app.stage.on("pointerupoutside", this.onPointerUp);
    app.canvas.addEventListener("wheel", this.onWheel, { passive: false });

    app.ticker.add(this.tick);
    this.applyCamera();
  }

  private centroid(projects: Project[]): { x: number; y: number } {
    if (projects.length === 0) return { x: 0, y: 0 };
    const sum = projects.reduce(
      (acc, p) => ({ x: acc.x + p.position.x, y: acc.y + p.position.y }),
      { x: 0, y: 0 },
    );
    return { x: sum.x / projects.length, y: sum.y / projects.length };
  }

  private isDragging(): boolean {
    return this.dragDist > DRAG_THRESHOLD;
  }

  private onPointerDown = (event: FederatedPointerEvent): void => {
    this.isDown = true;
    this.dragDist = 0;
    this.velX = 0;
    this.velY = 0;
    this.lastPointerX = event.globalX;
    this.lastPointerY = event.globalY;
  };

  private onPointerMove = (event: FederatedPointerEvent): void => {
    if (!this.isDown) return;
    const dx = event.globalX - this.lastPointerX;
    const dy = event.globalY - this.lastPointerY;
    this.lastPointerX = event.globalX;
    this.lastPointerY = event.globalY;
    this.dragDist += Math.hypot(dx, dy);

    this.camX -= dx / this.zoom;
    this.camY -= dy / this.zoom;
    this.velX = dx;
    this.velY = dy;
    this.applyCamera();
  };

  private onPointerUp = (): void => {
    this.isDown = false;
  };

  private onWheel = (event: WheelEvent): void => {
    event.preventDefault();
    const rect = this.app.canvas.getBoundingClientRect();
    const sx = event.clientX - rect.left;
    const sy = event.clientY - rect.top;
    const worldX = this.camX + (sx - this.app.screen.width / 2) / this.zoom;
    const worldY = this.camY + (sy - this.app.screen.height / 2) / this.zoom;

    const nextZoom = clamp(
      this.zoom * (1 - event.deltaY * CANVAS_CONFIG.zoomSpeed),
      CANVAS_CONFIG.minZoom,
      CANVAS_CONFIG.maxZoom,
    );
    this.zoom = nextZoom;
    this.camX = worldX - (sx - this.app.screen.width / 2) / nextZoom;
    this.camY = worldY - (sy - this.app.screen.height / 2) / nextZoom;
    this.applyCamera();
  };

  private tick = (): void => {
    if (!this.isDown && (Math.abs(this.velX) > 0.05 || Math.abs(this.velY) > 0.05)) {
      this.camX -= this.velX / this.zoom;
      this.camY -= this.velY / this.zoom;
      this.velX *= CANVAS_CONFIG.inertiaDamping;
      this.velY *= CANVAS_CONFIG.inertiaDamping;
      if (Math.abs(this.velX) < CANVAS_CONFIG.inertiaCutoff) this.velX = 0;
      if (Math.abs(this.velY) < CANVAS_CONFIG.inertiaCutoff) this.velY = 0;
      this.applyCamera();
    }
  };

  private applyCamera(): void {
    this.world.scale.set(this.zoom);
    this.world.position.set(
      -this.camX * this.zoom + this.app.screen.width / 2,
      -this.camY * this.zoom + this.app.screen.height / 2,
    );
    this.cb.onCamera({ x: this.camX, y: this.camY, zoom: this.zoom });
  }

  focusProject(id: string): void {
    const node = this.nodes.get(id);
    if (!node) return;

    if (this.focusedId && this.focusedId !== id) {
      this.nodes.get(this.focusedId)?.setState("idle");
    }
    this.focusedId = id;
    node.setState("focused");

    const target = { x: node.x, y: node.y, zoom: CANVAS_CONFIG.focusZoom };
    this.tweenCamera(target);
  }

  centerOn(x: number, y: number, zoom?: number): void {
    this.tweenCamera({ x, y, zoom: zoom ?? this.zoom });
  }

  zoomBy(factor: number): void {
    const nextZoom = clamp(
      this.zoom * factor,
      CANVAS_CONFIG.minZoom,
      CANVAS_CONFIG.maxZoom,
    );
    gsap.to(this, {
      zoom: nextZoom,
      duration: 0.3,
      ease: "power2.out",
      onUpdate: () => this.applyCamera(),
    });
  }

  reset(): void {
    if (this.focusedId) {
      this.nodes.get(this.focusedId)?.setState("idle");
      this.focusedId = null;
    }
    const values = [...this.nodes.values()];
    const centroid = values.reduce(
      (acc, n) => ({ x: acc.x + n.x / values.length, y: acc.y + n.y / values.length }),
      { x: 0, y: 0 },
    );
    this.tweenCamera({ ...centroid, zoom: CANVAS_CONFIG.defaultZoom });
  }

  private tweenCamera(target: { x: number; y: number; zoom: number }): void {
    this.velX = 0;
    this.velY = 0;
    gsap.to(this, {
      camX: target.x,
      camY: target.y,
      zoom: target.zoom,
      duration: 0.9,
      ease: "power3.inOut",
      onUpdate: () => this.applyCamera(),
    });
  }

  setActiveCategories(categories: Set<Category>): void {
    for (const node of this.nodes.values()) {
      const visible =
        categories.size === 0 ||
        categories.has(this.nodeCategory(node.id));
      gsap.to(node, {
        alpha: visible ? 1 : 0.12,
        duration: 0.3,
        ease: "power2.out",
      });
      node.eventMode = visible ? "static" : "none";
    }
  }

  private nodeCategory(id: string): Category {
    return this.categoryLookup.get(id) as Category;
  }

  resize(): void {
    this.app.stage.hitArea = this.app.screen;
    this.applyCamera();
  }

  destroy(): void {
    this.app.ticker.remove(this.tick);
    this.app.canvas.removeEventListener("wheel", this.onWheel);
    gsap.killTweensOf(this);
  }
}
