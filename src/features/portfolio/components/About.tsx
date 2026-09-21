import { Eyebrow, Pill, Reveal } from "@/shared/ui";
import { ABOUT } from "../content";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
      <Reveal>
        <div className="rounded-2xl border border-card-border bg-card p-8 shadow-xl sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="space-y-4 text-center sm:text-left lg:col-span-4">
              <div className="relative mx-auto h-32 w-32 rounded-2xl bg-gradient-to-tr from-accent-cyan via-accent-amber to-amber-500 p-1 shadow-lg sm:mx-0 sm:h-40 sm:w-40">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-[14px] bg-canvas-alt p-4">
                  <span className="font-display text-4xl font-bold text-accent-amber sm:text-5xl">
                    LD
                  </span>
                  <span className="mt-1 text-xs font-semibold tracking-wider text-accent-cyan">
                    LUIS DURÁN
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-ink-text">
                  Luis Durán
                </h3>
                <p className="text-sm font-medium text-accent-amber">
                  Technical Designer &amp; Technical Artist
                </p>
                <p className="mt-0.5 text-xs text-ink-subtle">
                  GoxBit
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg border border-card-border bg-canvas px-3 py-1.5 text-xs text-ink-muted">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Open to AAA &amp; Indie roles</span>
              </div>
            </div>

            <div className="space-y-6 lg:col-span-8">
              <div className="space-y-3">
                <Eyebrow icon="person" label="Behind the Workshop" tone="cyan" />
                <h2 className="font-display text-3xl font-bold text-ink-text">
                  Crafting games that feel as good to play as they are to engineer.
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                {ABOUT.bio1}
              </p>
              <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                {ABOUT.bio2}
              </p>
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-text">
                  Core Tools &amp; Capabilities
                </span>
                <div className="flex flex-wrap gap-2">
                  {ABOUT.skills.map((skill) => (
                    <Pill key={skill} label={skill} variant="solid" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
