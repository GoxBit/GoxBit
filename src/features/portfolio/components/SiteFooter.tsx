import { NAV_ITEMS, CONTACT } from "../content";

export function SiteFooter() {
  return (
    <footer className="mt-12 w-full border-t border-card-border bg-canvas-alt">
      <div className="mx-auto max-w-7xl space-y-8 px-6 py-12 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-card-border bg-card">
              <span className="font-display font-bold text-accent-cyan">G</span>
            </div>
            <div>
              <div className="font-display font-bold text-ink-text">
                GOXBIT // Luis Durán
              </div>
              <div className="text-xs text-ink-muted">
                Handcrafted Games, Tools, Systems &amp; Workflows
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-ink-muted">
            {NAV_ITEMS.filter((n) => n.label !== "Games").map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-accent-cyan"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="transition-colors hover:text-accent-cyan">
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-card-border/60 pt-6 text-xs text-ink-subtle sm:flex-row">
          <p>
            © 2026 GoxBit. Built with passion for game craft, Unreal Engine &amp;
            stylized worlds.
          </p>
          <div className="flex items-center gap-4">
            <a href={CONTACT.artstation} target="_blank" rel="noreferrer" className="hover:text-accent-amber">
              ArtStation
            </a>
            <span>·</span>
            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="hover:text-accent-cyan">
              GitHub
            </a>
            <span>·</span>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent-amber">
              LinkedIn
            </a>
            <span>·</span>
            <a href={CONTACT.twitter} target="_blank" rel="noreferrer" className="hover:text-accent-amber">
              X
            </a>
            <span>·</span>
            <a href={`mailto:${CONTACT.email}`} className="hover:text-ink-text">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
