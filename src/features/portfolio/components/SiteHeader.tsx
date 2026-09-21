import { useState } from "react";
import { Icon } from "@/shared/ui";
import { CONTACT, NAV_ITEMS } from "../content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-card-border/60 bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6 sm:px-8">
        <a href="#top" className="group flex items-center gap-3.5">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-accent-cyan via-accent-amber to-amber-500 p-0.5 shadow-md shadow-accent-cyan/10 transition-transform duration-200 group-hover:scale-105">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-canvas-alt">
              <span className="font-display text-lg font-bold text-accent-cyan transition-colors group-hover:text-accent-amber">
                G
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display text-lg font-bold tracking-tight text-ink-text transition-colors group-hover:text-accent-cyan">
                GOXBIT
              </span>
              <span className="rounded-full border border-card-border bg-card px-2 py-0.5 text-xs text-ink-muted">
                Luis Durán
              </span>
            </div>
            <span className="text-xs font-medium tracking-wide text-accent-amber">
              Technical Designer &amp; Technical Artist
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-1 rounded-xl border border-card-border/80 bg-canvas-alt/90 p-1.5 lg:flex">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.label + i}
              href={item.href}
              className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all hover:bg-card ${
                i === 0
                  ? "text-ink-text hover:text-accent-cyan"
                  : "text-ink-muted hover:text-ink-text"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-xl border border-card-border bg-card px-4 py-2 text-sm font-semibold text-ink-text transition-all hover:border-accent-cyan hover:text-accent-cyan sm:inline-flex"
          >
            <Icon name="chat_bubble" className="text-[18px]" />
            <span>Get in Touch</span>
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-accent-amber px-4 py-2 text-sm font-semibold text-canvas shadow-lg shadow-accent-amber/20 transition-all hover:scale-[1.02] hover:bg-accent-amber-light"
          >
            <Icon name="description" className="text-[18px]" />
            <span>Resume</span>
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-card-border bg-card text-ink-text lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="text-[20px]" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-card-border/60 bg-canvas/95 px-6 py-3 lg:hidden">
          <div className="flex flex-col">
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.label + i}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-muted hover:bg-card hover:text-ink-text"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
