import { useNavigate } from "react-router-dom";
import { Icon, Reveal, SectionHeader, TONE_TEXT, type Tone } from "@/shared/ui";
import { EXPERIMENTS, type Experiment } from "../content";

const HOVER_BORDER: Record<Tone, string> = {
  cyan: "hover:border-accent-cyan/50",
  amber: "hover:border-accent-amber/50",
  teal: "hover:border-accent-teal/50",
};

const TAG_BG: Record<Tone, string> = {
  cyan: "bg-accent-cyan/10 text-accent-cyan",
  amber: "bg-accent-amber/10 text-accent-amber",
  teal: "bg-accent-teal/10 text-accent-teal",
};

function ExperimentCard({ experiment }: { experiment: Experiment }) {
  return (
    <div
      className={`space-y-4 rounded-2xl border border-card-border bg-card p-6 transition-all hover:bg-card-hover ${HOVER_BORDER[experiment.tone]}`}
    >
      <div className="flex items-center justify-between">
        <span className={`font-mono text-xs font-semibold ${TONE_TEXT[experiment.tone]}`}>
          {experiment.code}
        </span>
        <span className={`rounded-full px-2 py-0.5 text-xs ${TAG_BG[experiment.tone]}`}>
          {experiment.tag}
        </span>
      </div>
      <h3 className="font-display text-lg font-bold text-ink-text">
        {experiment.title}
      </h3>
      <p className="text-xs leading-relaxed text-ink-muted">{experiment.body}</p>
      <div className="font-mono text-[11px] text-ink-subtle">{experiment.focus}</div>
    </div>
  );
}

export function CreativeLab() {
  const navigate = useNavigate();

  return (
    <section id="game-lab" className="mx-auto max-w-7xl space-y-12 px-6 py-20 sm:px-8">
      <SectionHeader
        icon="science"
        eyebrow="The Workshop Playground"
        title="Creative Lab & Experiments"
        subtitle="Where gameplay mechanics, visual math, and game feel prototypes get tested before making their way into full productions."
        tone="amber"
        right={
          <button
            type="button"
            onClick={() => navigate("/lab")}
            className="inline-flex items-center gap-2 rounded-xl border border-card-border bg-card px-4 py-2.5 text-sm font-semibold text-ink-text transition-all hover:border-accent-cyan hover:text-accent-cyan"
          >
            <Icon name="explore" className="text-[18px]" />
            <span>Open interactive canvas</span>
          </button>
        }
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {EXPERIMENTS.map((experiment, i) => (
          <Reveal key={experiment.code} delay={(i % 3) * 0.05}>
            <ExperimentCard experiment={experiment} />
          </Reveal>
        ))}
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col justify-between space-y-4 rounded-2xl border border-card-border bg-gradient-to-br from-card via-card to-canvas-alt p-6">
            <div className="space-y-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-amber/10 text-accent-amber">
                <Icon name="lightbulb" className="text-[20px]" />
              </div>
              <h3 className="font-display text-lg font-bold text-ink-text">
                Have a Mechanic in Mind?
              </h3>
              <p className="text-xs leading-relaxed text-ink-muted">
                I frequently build bespoke gameplay-feel spikes and shader
                prototypes for fellow indie teams.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-xs font-semibold text-accent-amber hover:underline"
            >
              <span>Collaborate on an idea</span>
              <Icon name="arrow_forward" className="text-[14px]" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
