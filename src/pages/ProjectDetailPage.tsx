import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { projectById } from "@/data/projects";
import { CATEGORY_META } from "@/core/theme";
import { CategoryBadge } from "@/shared/ui/CategoryBadge";
import { Tag } from "@/shared/ui/Tag";
import type { GameDesignFacet } from "@/core/types";

const fade = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const GAME_DESIGN_FIELDS: { key: keyof GameDesignFacet; label: string }[] = [
  { key: "coreLoop", label: "Core Loop" },
  { key: "playerMotivation", label: "Player Motivation" },
  { key: "riskReward", label: "Risk / Reward" },
  { key: "progression", label: "Progression" },
  { key: "replayability", label: "Replayability" },
  { key: "technicalChallenges", label: "Technical Challenges" },
];

function Section({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      variants={fade}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-white/10 py-8"
    >
      <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

export function ProjectDetailPage() {
  const { id } = useParams();
  const project = id ? projectById(id) : undefined;

  if (!project) {
    return (
      <div className="grid h-dvh place-items-center bg-bg text-text">
        <div className="text-center">
          <p className="mb-4 text-text-dim">Project not found.</p>
          <Link to="/" className="text-primary underline">
            Back to the canvas
          </Link>
        </div>
      </div>
    );
  }

  const accent = CATEGORY_META[project.category].hex;

  return (
    <main className="min-h-dvh bg-bg text-text">
      <div
        className="relative overflow-hidden"
        style={{
          background: `radial-gradient(1200px 400px at 20% -10%, ${accent}22, transparent 70%)`,
        }}
      >
        <div className="mx-auto max-w-4xl px-6 pb-10 pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-text-dim transition hover:text-primary"
          >
            ← Back to canvas
          </Link>

          <motion.div
            variants={fade}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <CategoryBadge category={project.category} />
            <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-dim">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Tag key={tag} label={tag} accent={accent} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 pb-24">
        <Section title="The Problem">
          <p className="text-lg leading-relaxed text-text/90">
            {project.caseStudy.problem}
          </p>
        </Section>

        <Section title="The Solution" delay={0.05}>
          <p className="text-lg leading-relaxed text-text/90">
            {project.caseStudy.solution}
          </p>
        </Section>

        {project.gameDesign && (
          <Section title="Design Pillars" delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {GAME_DESIGN_FIELDS.map(({ key, label }) =>
                project.gameDesign?.[key] ? (
                  <div
                    key={key}
                    className="rounded-xl border border-white/10 bg-bg-raised/60 p-4"
                  >
                    <div className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-text-dim">
                      {label}
                    </div>
                    <p className="text-sm leading-relaxed text-text/90">
                      {project.gameDesign?.[key]}
                    </p>
                  </div>
                ) : null,
              )}
            </div>
          </Section>
        )}

        <Section title="Challenges" delay={0.1}>
          <ul className="space-y-3">
            {project.caseStudy.challenges.map((item) => (
              <li key={item} className="flex gap-3 text-text/90">
                <span style={{ color: accent }}>▹</span>
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Learnings" delay={0.1}>
          <ul className="space-y-3">
            {project.caseStudy.learnings.map((item) => (
              <li key={item} className="flex gap-3 text-text/90">
                <span className="text-success">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Media" delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.media.map((item) => (
              <figure key={item.caption ?? item.src}>
                <div
                  className="grid h-44 place-items-center rounded-xl border border-white/10 font-mono text-xs text-bg"
                  style={{ background: item.src }}
                >
                  {item.type === "video" ? "▶ VIDEO" : "IMAGE"}
                </div>
                {item.caption && (
                  <figcaption className="mt-2 text-xs text-text-dim">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </Section>

        <Section title="Toolchain" delay={0.1}>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-lg border border-white/10 bg-bg-raised/60 px-3 py-1.5 text-sm text-text/90"
              >
                {tool}
              </span>
            ))}
          </div>
        </Section>

        {project.links.length > 0 && (
          <Section title="Links" delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="rounded-lg px-4 py-2 text-sm font-semibold text-bg transition hover:shadow-glow"
                  style={{ background: accent }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Section>
        )}
      </div>
    </main>
  );
}
