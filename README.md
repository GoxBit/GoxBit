# GOXBIT — Indie Studio & Tech Art Lab

The portfolio of **Luis Durán** — Technical Designer, Technical Artist & Game Developer. A polished dark studio site (hero, featured case studies, creative tools, devlog, about, contact) with an **interactive infinite canvas** Lab as a bonus experience.

The visual design faithfully follows the GOXBIT Stitch reference ("GOXBIT — Indie Studio & Tech Art Lab").

> Built from the ground up with Vite + React + TypeScript. No backend, deploy-ready for Vercel / Netlify.

## Routes

- `/` — the studio portfolio (single-page, section-anchored navigation).
- `/lab` — the interactive **infinite canvas** of projects (PixiJS: pan, zoom, inertia, minimap), reachable from the hero "Explore Experiments" button and the Lab section.
- `/project/:id` — case-study detail page for a canvas project.

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
    portfolio/     Studio site sections (Header, Hero, FeaturedProjects, CreativeTools,
                   CreativeLab, Devlog, AboutStudio, Contact, Footer) + typed content
    canvas/        PixiJS engine (InfiniteCanvas, NodeView, grid) + store + React mounts
    projects/      Preview panel, filters, projects store
    shaders/       React Three Fiber ambient background
  pages/           HomePage (studio), LabPage (canvas), ProjectDetailPage, NotFoundPage
  data/            projects.json + StaticProjectRepository (infrastructure)
```

The studio sections are composed from small **reusable primitives** in `shared/ui`
(`Button`, `Icon`, `Pill`, `SectionHeader`, `Eyebrow`, `StatusBadge`, `Reveal`) and are
driven by a typed `features/portfolio/content.ts` module, keeping copy separate from layout.

### Principles

- **Dependency rule**: `features` and `pages` depend on `core/domain`; infrastructure
  (`data`) implements domain contracts. UI never imports raw JSON.
- **Decoupling**: the imperative Pixi engine and React communicate only through a
  Zustand bridge (`canvasStore`) and a small `CanvasControls` command interface.
- **Composition over inheritance**, SOLID, and reusable components everywhere they apply.

## The Experience

**Studio site (`/`)**

- Fixed header with anchored navigation and a mobile menu.
- Hero with gradient wordmark, workshop visual and "currently crafting" chips.
- Featured case studies led by the **Meownster** flagship card.
- Creative tools, a lab/experiments grid, a devlog, an about card and a contact section (copy-email).
- Scroll-reveal animations via Motion.

**Interactive Lab (`/lab`)**

- **Infinite canvas** — free pan, pointer-anchored zoom, inertial scrolling, world grid.
- **Project nodes** — `idle / hover / focused` states, category color-coding, tags.
- **Cinematic focus** — GSAP camera tweens; a Motion preview panel slides in.
- **Star map minimap** and a **HUD** with live zoom %, plus category filters.

## Visual Identity (Stitch reference)

| Token | Value |
| --- | --- |
| Canvas | `#0e1117` |
| Card | `#181e2a` |
| Accent · Cyan | `#00d4ff` |
| Accent · Amber | `#ff8a3d` |
| Accent · Teal | `#2dd4bf` |
| Ink (text) | `#e6ebf5` |

Fonts: **Space Grotesk** (display), **Plus Jakarta Sans** (body), **JetBrains Mono** (mono),
with Material Symbols icons. Dark by default, high contrast.

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
