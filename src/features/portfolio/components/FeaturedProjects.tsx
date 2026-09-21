import { Button, Icon, Pill, Reveal, SectionHeader, TONE_TEXT } from "@/shared/ui";
import { FLAGSHIP, SIDE_PROJECTS, type SideProject } from "../content";

function FlagshipCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-card-border bg-card shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="relative min-h-[320px] overflow-hidden bg-canvas-alt lg:col-span-7 lg:min-h-full">
          <img
            alt="Meownster — stylized action-adventure with an agile cat warrior in lush ancient ruins"
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
            src={FLAGSHIP.image}
          />
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-lg border border-card-border bg-canvas/90 px-3 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-accent-amber" />
            <span className="font-display text-xs font-medium tracking-wide text-ink-text">
              {FLAGSHIP.badge}
            </span>
          </div>
          <div className="absolute bottom-4 right-4 rounded-md bg-canvas/80 px-3 py-1 text-xs text-ink-muted backdrop-blur-md">
            {FLAGSHIP.engineTag}
          </div>
        </div>

        <div className="flex flex-col justify-between space-y-6 p-8 lg:col-span-5 lg:p-10">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">
                {FLAGSHIP.eyebrow}
              </span>
              <h3 className="mt-1 font-display text-3xl font-bold text-ink-text">
                {FLAGSHIP.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-ink-muted">
                {FLAGSHIP.subtitle}
              </p>
            </div>
            <div className="space-y-3.5 pt-2 text-sm leading-relaxed text-ink-muted">
              {FLAGSHIP.blocks.map((block) => (
                <div
                  key={block.title}
                  className="rounded-xl border border-card-border/60 bg-canvas-alt/70 p-3.5"
                >
                  <h4 className="mb-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink-text">
                    <Icon
                      name={block.icon}
                      className={`text-[16px] ${TONE_TEXT[block.tone]}`}
                    />
                    {block.title}
                  </h4>
                  <p>{block.body}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {FLAGSHIP.pills.map((pill) => (
                <Pill key={pill} label={pill} />
              ))}
            </div>
          </div>
          <div className="pt-2">
            <Button variant="amber" href="#contact" iconRight="arrow_forward">
              {FLAGSHIP.cta}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SideProjectCard({ project }: { project: SideProject }) {
  return (
    <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-card-border bg-card shadow-lg transition-all hover:border-card-border/90">
      <div className="space-y-5">
        <div
          className="relative h-64 overflow-hidden bg-canvas-alt sm:h-72"
          style={{ background: project.gradient }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          <div className="absolute inset-0 grid place-items-center">
            <Icon name="image" className={`text-[40px] ${TONE_TEXT[project.tagTone]} opacity-40`} />
          </div>
          <div
            className={`absolute left-4 top-4 rounded-lg border border-card-border bg-canvas/90 px-3 py-1 text-xs font-medium backdrop-blur-md ${TONE_TEXT[project.tagTone]}`}
          >
            {project.tag}
          </div>
        </div>
        <div className="space-y-3 px-7 sm:px-8">
          <h3 className="font-display text-2xl font-bold text-ink-text">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-ink-muted">
            {project.description}
          </p>
          <div className="space-y-2.5 pt-2 text-xs text-ink-muted">
            {project.bullets.map((bullet) => (
              <div key={bullet.text} className="flex items-start gap-2">
                <Icon
                  name={bullet.icon}
                  className={`mt-0.5 shrink-0 text-[16px] ${TONE_TEXT[bullet.tone]}`}
                />
                <span>{bullet.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-7 pt-6 sm:p-8">
        <div className="flex flex-wrap gap-2 border-t border-card-border/80 pt-4">
          {project.pills.map((pill) => (
            <Pill key={pill} label={pill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function FeaturedProjects() {
  return (
    <section
      id="featured-projects"
      className="mx-auto max-w-7xl space-y-16 px-6 py-20 sm:px-8"
    >
      <SectionHeader
        icon="swords"
        eyebrow="Featured Case Studies"
        title="Games & Interactive Worlds"
        subtitle="A look into active game productions, procedural worlds, and real-time rendering pipelines crafted with attention to game feel and visual harmony."
        tone="amber"
        bordered
        right={
          <div className="font-mono text-xs text-ink-subtle">03 SELECT PROJECTS</div>
        }
      />
      <Reveal>
        <FlagshipCard />
      </Reveal>
      <div id="art-study" className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {SIDE_PROJECTS.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.05}>
            <SideProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
