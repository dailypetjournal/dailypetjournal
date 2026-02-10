"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Articles" },
  { href: "/tags", label: "Tags" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
  { href: "/memorial", label: "Memorial" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass =
    "text-sm font-medium text-foreground transition hover:text-primary";
  const mobileLinkClass =
    "block py-3 text-base font-medium text-foreground transition hover:text-primary border-b border-border last:border-b-0";

  return (
    <header className="border-b border-border bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        <a
          href="/"
          className="shrink-0 text-xl font-bold text-dark transition hover:text-primary"
        >
          Daily Pet Journal
        </a>

        {/* Desktop nav */}
        <nav className="hidden shrink-0 md:flex md:gap-6" aria-label="Main">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className={linkClass}>
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-theme-light text-dark transition hover:bg-border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav panel */}
      <div
        id="mobile-nav"
        className={`overflow-y-auto overflow-x-hidden border-t border-border bg-white transition-[max-height] duration-200 ease-out md:hidden ${
          menuOpen ? "max-h-[70vh]" : "max-h-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="mx-auto max-w-6xl px-4 py-2 md:px-8" aria-label="Main">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={mobileLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
