import { Icon, Reveal, SectionHeader, TONE_TEXT } from "@/shared/ui";
import { DEVLOG, type DevlogEntry } from "../content";

const HOVER_TITLE: Record<DevlogEntry["tone"], string> = {
  cyan: "group-hover:text-accent-cyan",
  amber: "group-hover:text-accent-amber",
  teal: "group-hover:text-accent-teal",
};

function DevlogCard({ entry }: { entry: DevlogEntry }) {
  return (
    <article className="group flex flex-col justify-between space-y-5 rounded-2xl border border-card-border bg-card p-6 transition-all hover:border-card-border/90 sm:p-7">
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-ink-subtle">
          <span>{entry.entry}</span>
          <span>{entry.label}</span>
        </div>
        <h3
          className={`cursor-pointer font-display text-xl font-bold text-ink-text transition-colors ${HOVER_TITLE[entry.tone]}`}
        >
          {entry.title}
        </h3>
        <p className="text-xs leading-relaxed text-ink-muted sm:text-sm">
          {entry.body}
        </p>
      </div>
      <div
        className={`flex items-center gap-2 border-t border-card-border pt-3 text-xs font-medium ${TONE_TEXT[entry.tone]}`}
      >
        <span>Read reflection</span>
        <Icon name="arrow_forward" className="text-[14px]" />
      </div>
    </article>
  );
}

export function Devlog() {
  return (
    <section id="devlog" className="border-y border-card-border bg-canvas-alt px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <SectionHeader
          icon="edit_note"
          eyebrow="Devlog & Notes"
          title="Notes from the Workbench"
          subtitle="Casual reflections on game feel, shader discoveries, and lessons learned while developing indie games."
          tone="cyan"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {DEVLOG.map((entry, i) => (
            <Reveal key={entry.entry} delay={i * 0.05}>
              <DevlogCard entry={entry} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
