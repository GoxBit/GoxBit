import { Icon, Reveal, SectionHeader, TONE_TEXT } from "@/shared/ui";
import { TOOLS, type Tool } from "../content";

const HOVER_BORDER: Record<Tool["tone"], string> = {
  cyan: "hover:border-accent-cyan/60",
  amber: "hover:border-accent-amber/60",
  teal: "hover:border-accent-teal/60",
};

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div
      className={`flex flex-col justify-between space-y-6 rounded-2xl border border-card-border bg-card p-6 transition-all sm:p-8 ${HOVER_BORDER[tool.tone]}`}
    >
      <div className="space-y-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-card-border bg-canvas">
          <Icon name={tool.icon} className={`text-[24px] ${TONE_TEXT[tool.tone]}`} />
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-ink-text">
            {tool.name}
          </h3>
          <p className={`mt-0.5 text-xs font-medium ${TONE_TEXT[tool.tone]}`}>
            {tool.subtitle}
          </p>
        </div>
        <p className="text-xs leading-relaxed text-ink-muted">{tool.problem}</p>
        <div className="space-y-2 rounded-xl border border-card-border bg-canvas/80 p-3.5 text-xs">
          <div className="font-semibold text-ink-text">Creative Solution:</div>
          <p className="leading-relaxed text-ink-muted">{tool.solution}</p>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-card-border pt-2 text-xs text-ink-muted">
        <span>{tool.benefit}</span>
        <span className={`font-medium ${TONE_TEXT[tool.tone]}`}>{tool.tech}</span>
      </div>
    </div>
  );
}

export function CreativeTools() {
  return (
    <section
      id="creative-tools"
      className="border-y border-card-border bg-canvas-alt px-6 py-20 sm:px-8"
    >
      <div className="mx-auto max-w-7xl space-y-12">
        <SectionHeader
          icon="construction"
          eyebrow="Developer Toolchains"
          title="Creative Tools & Artist Plugins"
          subtitle="Software built for human artists: eliminating tedious manual friction, accelerating DCC iteration, and making game art creation delightful."
          tone="cyan"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TOOLS.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 0.05}>
              <ToolCard tool={tool} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
