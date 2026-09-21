import { useState } from "react";
import { Icon, StatusBadge } from "@/shared/ui";
import { CONTACT } from "../content";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
    } catch {
      /* clipboard may be unavailable; ignore */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl space-y-8 px-6 py-20 text-center sm:px-8"
    >
      <div className="flex justify-center">
        <StatusBadge label="Let's Build Something Memorable" tone="amber" pulse />
      </div>
      <div className="mx-auto max-w-2xl space-y-4">
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink-text sm:text-5xl">
          Have a project, game, or role in mind?
        </h2>
        <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
          Whether you're looking for a Lead/Senior Technical Designer, a Technical
          Artist to bring stylized shaders to life, or an experienced hand for your
          indie game prototype, let's talk.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex items-center gap-2.5 rounded-xl bg-accent-cyan px-6 py-3.5 text-sm font-semibold text-canvas shadow-lg shadow-accent-cyan/20 transition-all hover:scale-[1.02] hover:bg-cyan-300"
        >
          <Icon name="mail" className="text-[20px]" />
          <span>{copied ? "Copied to Clipboard!" : "Copy Email Address"}</span>
        </button>
        <a
          href={CONTACT.artstation}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-card-border bg-card px-5 py-3.5 text-sm font-semibold text-ink-text transition-all hover:border-accent-amber hover:text-accent-amber"
        >
          <Icon name="palette" className="text-[18px]" />
          <span>ArtStation</span>
        </a>
        <a
          href={CONTACT.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-card-border bg-card px-5 py-3.5 text-sm font-semibold text-ink-text transition-all hover:border-accent-cyan hover:text-accent-cyan"
        >
          <Icon name="code" className="text-[18px]" />
          <span>GitHub</span>
        </a>
      </div>
      <div className="pt-2 text-xs text-ink-subtle">
        Direct contact:{" "}
        <a
          className="text-ink-muted underline hover:text-accent-cyan"
          href={`mailto:${CONTACT.email}`}
        >
          {CONTACT.email}
        </a>
      </div>
    </section>
  );
}
