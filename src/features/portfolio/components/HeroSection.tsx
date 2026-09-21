import { useNavigate } from "react-router-dom";
import { Button, Icon, StatusBadge } from "@/shared/ui";
import { HERO } from "../content";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-canvas via-canvas-alt to-canvas px-6 pb-20 pt-12 sm:px-8">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[26rem] w-[42rem] -translate-x-1/2 bg-gradient-to-tr from-accent-cyan/10 via-accent-amber/10 to-transparent blur-[120px]" />
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="max-w-3xl space-y-5">
          <StatusBadge label={HERO.badge} tone="cyan" />
          <div className="space-y-3">
            <h1 className="font-display text-4xl font-bold tracking-tight text-ink-text sm:text-6xl lg:text-7xl">
              GOXBIT <span className="font-light text-accent-amber">/</span>{" "}
              <span className="bg-gradient-to-r from-accent-cyan to-accent-amber bg-clip-text text-transparent">
                Luis Durán
              </span>
            </h1>
            <p className="font-display text-xl font-medium text-ink-muted sm:text-2xl">
              {HERO.roles}
            </p>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {HERO.description}
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button variant="cyan" href="#featured-projects" iconRight="sports_esports">
              View Projects
            </Button>
            <Button
              variant="ghost"
              to="/lab"
              navigate={navigate}
              icon="science"
            >
              Explore Experiments
            </Button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-card-border bg-card shadow-2xl">
          <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[21/9] lg:h-[480px]">
            <img
              alt="Creative game developer workshop: material test balls, animated rigging in Maya, particle spell, and visual blueprint nodes"
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              src={HERO.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/40 to-transparent" />
          </div>
          <div className="absolute inset-x-6 bottom-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 rounded-xl border border-card-border bg-canvas/90 px-4 py-2.5 backdrop-blur-md">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-accent-amber" />
              <span className="text-xs font-medium text-ink-text sm:text-sm">
                Currently crafting:{" "}
                <strong className="font-semibold text-accent-amber">
                  {HERO.crafting}
                </strong>
                {HERO.craftingSuffix}
              </span>
            </div>
            <div className="hidden items-center gap-2 rounded-xl border border-card-border bg-canvas/80 px-3.5 py-2 text-xs font-medium text-ink-muted backdrop-blur-md sm:flex">
              <Icon name="palette" className="text-[16px] text-accent-cyan" />
              <span>{HERO.toolchain}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
