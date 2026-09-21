# GOXBIT — Indie Studio & Tech Art Lab

An interactive portfolio for **Technical Design, Game Design & Technical Art**, built as an **infinite, explorable canvas** of project nodes. Inspired by the spatial navigation of Stitch / Figma / Miro — you pan, zoom and dive into a universe of projects instead of scrolling a landing page.

> Rebuilt from the ground up with Vite + React + TypeScript. No backend, deploy-ready for Vercel / Netlify.

## Tech Stack

| Concern | Choice |
| --- | --- |
| Framework | React 18 + TypeScript |
| Bundler | Vite 5 |
| Canvas | PixiJS 8 |
| Animation | GSAP + Motion |
| 3D | React Three Fiber + Three.js |
| Styling | TailwindCSS |
| State | Zustand |
| Routing | React Router |
| Data | Static JSON |

## Getting Started

```bash
npm install     # install dependencies
npm run dev     # start the dev server (http://localhost:5173)
npm run build   # type-check + production build to dist/
npm run preview # preview the production build
```

Node 18+ is recommended.

## Architecture

Feature-based structure with a light **Clean Architecture / DDD** core: the domain
owns the model and contracts, infrastructure implements them, and features consume
them through the `ProjectRepository` abstraction (never the JSON directly).

```
src/
  core/
    domain/        Domain model (Project, Category, value objects),
                   ProjectRepository contract, spatial services
    theme.ts       Design tokens + category metadata
    config.ts      Canvas tuning constants
  shared/
    ui/            Reusable primitives (Brand, GlassPanel, IconButton, Tag, CategoryBadge)
    lib/           Framework-agnostic helpers
  features/
    canvas/        PixiJS engine (InfiniteCanvas, NodeView, grid) + store + React mounts
    projects/      Preview panel, filters, projects store
    shaders/       React Three Fiber ambient background
  pages/           HomePage, ProjectDetailPage, NotFoundPage
  data/            projects.json + StaticProjectRepository (infrastructure)
```

### Principles

- **Dependency rule**: `features` and `pages` depend on `core/domain`; infrastructure
  (`data`) implements domain contracts. UI never imports raw JSON.
- **Decoupling**: the imperative Pixi engine and React communicate only through a
  Zustand bridge (`canvasStore`) and a small `CanvasControls` command interface.
- **Composition over inheritance**, SOLID, and reusable components everywhere they apply.

## The Experience

- **Infinite canvas** — free pan, pointer-anchored zoom, inertial scrolling, world grid.
- **Project nodes** — `idle / hover / focused` states, category color-coding, tags.
- **Cinematic focus** — GSAP camera tweens center a node; a Motion preview panel slides in.
- **Star map minimap** — live viewport rectangle and click-to-navigate.
- **HUD** — zoom controls with live zoom %, reset view.
- **Category filters** — spotlight / dim nodes by discipline.
- **AAA case studies** — problem, solution, design pillars, challenges, learnings, media, toolchain.

## Visual Identity

| Token | Value |
| --- | --- |
| Background | `#0B0F14` |
| Primary | `#00D4FF` |
| Accent | `#6E56CF` |
| Success | `#00FFA3` |
| Text | `#F5F7FA` |

Dark by default, high contrast, technical/mono accents.

## Adding a Project

Append an entry to `src/data/projects.json` (typed by `core/domain`). `position`
places its node on the canvas; `category` drives its color. No code changes needed.

## Performance

- Route-level code splitting (lazy detail / 404 pages).
- Vendor chunks split (`pixi`, `three`, `motion`).
- Transparent Pixi layer composited over a lightweight R3F background.
- rAF-driven canvas rendering.

## Roadmap

- [ ] Viewport-based **node virtualization** (render only visible nodes) for large datasets.
- [ ] Node **clustering** by category at low zoom levels.
- [ ] Keyboard / gamepad navigation and focus trapping for accessibility.
- [ ] Deep-linking to a focused node (`/?focus=<id>`) and shareable camera state.
- [ ] Real media (images / video) in case studies with lazy loading and blur-up.
- [ ] Custom **GLSL shaders** for the ambient background and node hover effects.
- [ ] LCP < 2.5s budget enforcement and Lighthouse CI.
- [ ] Unit tests (domain + store) and Playwright e2e for canvas interactions.
- [ ] CMS or MDX-backed content pipeline to replace static JSON.

## Deployment

Static output in `dist/` — deploy to Vercel or Netlify (SPA fallback to `index.html`).
