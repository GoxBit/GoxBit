import { Container, Graphics, Text } from "pixi.js";
import gsap from "gsap";
import { CANVAS_CONFIG } from "@/core/config";
import { CATEGORY_META, palette, type CategoryMeta } from "@/core/theme";
import type { NodeState, Project } from "@/core/types";

export interface NodeCallbacks {
  onOver: () => void;
  onOut: () => void;
  onTap: () => void;
}

const hexToNumber = (hex: string): number =>
  parseInt(hex.replace("#", ""), 16);

export class NodeView extends Container {
  private readonly glow = new Graphics();
  private readonly meta: CategoryMeta;
  private nodeState: NodeState = "idle";

  constructor(
    private readonly project: Project,
    callbacks: NodeCallbacks,
  ) {
    super();
    this.meta = CATEGORY_META[project.category];
    this.build();

    this.eventMode = "static";
    this.cursor = "pointer";
    this.on("pointerover", callbacks.onOver);
    this.on("pointerout", callbacks.onOut);
    this.on("pointertap", callbacks.onTap);

    this.setState("idle");
  }

  private build(): void {
    const { width: w, height: h, radius: r } = CANVAS_CONFIG.node;

    this.addChild(this.glow);

    const bg = new Graphics();
    bg.roundRect(-w / 2, -h / 2, w, h, r)
      .fill(palette.bgRaised)
      .stroke({ width: 1.5, color: 0x223042 });
    this.addChild(bg);

    const thumb = new Graphics();
    thumb
      .roundRect(-w / 2 + 16, -h / 2 + 16, w - 32, 70, 10)
      .fill(hexToNumber(this.project.thumbnail));
    thumb.alpha = 0.85;
    this.addChild(thumb);

    const accent = new Graphics();
    accent.roundRect(-w / 2, -h / 2, 6, h, 3).fill(this.meta.color);
    this.addChild(accent);

    const category = new Text({
      text: this.meta.label.toUpperCase(),
      style: {
        fill: this.meta.color,
        fontSize: 11,
        fontFamily: "JetBrains Mono, monospace",
        letterSpacing: 2,
      },
    });
    category.position.set(-w / 2 + 16, -h / 2 + 100);
    this.addChild(category);

    const title = new Text({
      text: this.project.title,
      style: {
        fill: palette.text,
        fontSize: 22,
        fontFamily: "Inter, sans-serif",
        fontWeight: "700",
      },
    });
    title.position.set(-w / 2 + 16, -h / 2 + 118);
    this.addChild(title);

    const tags = new Text({
      text: this.project.tags
        .slice(0, 3)
        .map((t) => `#${t}`)
        .join("   "),
      style: {
        fill: palette.textDim,
        fontSize: 12,
        fontFamily: "JetBrains Mono, monospace",
      },
    });
    tags.position.set(-w / 2 + 16, h / 2 - 30);
    this.addChild(tags);
  }

  setState(state: NodeState): void {
    this.nodeState = state;
    const { width: w, height: h, radius: r } = CANVAS_CONFIG.node;
    const active = state === "hover" || state === "focused";

    this.glow.clear();
    if (active) {
      const pad = state === "focused" ? 14 : 8;
      this.glow
        .roundRect(-w / 2 - pad, -h / 2 - pad, w + pad * 2, h + pad * 2, r + pad)
        .stroke({
          width: 2,
          color: this.meta.color,
          alpha: state === "focused" ? 0.9 : 0.5,
        });
    }

    const scale = state === "focused" ? 1.06 : state === "hover" ? 1.03 : 1;
    gsap.to(this.scale, { x: scale, y: scale, duration: 0.25, ease: "power2.out" });
  }

  get state(): NodeState {
    return this.nodeState;
  }

  get id(): string {
    return this.project.id;
  }
}
