export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-theme-light">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <a
            href="/"
            className="font-semibold text-dark transition hover:text-primary"
          >
            Daily Pet Journal
          </a>
          <p className="text-sm text-foreground">
            Comfort in faith for pet loss. © {year}
          </p>
        </div>
        <p className="mt-4 text-center text-xs text-foreground sm:text-left">
          Biblical wisdom and hope for grieving pet owners.
        </p>
        <div className="mt-4 flex justify-center gap-4 sm:justify-start">
          <a
            href="/resources"
            className="text-xs text-foreground transition hover:text-primary"
          >
            Resources
          </a>
          <a
            href="/faq"
            className="text-xs text-foreground transition hover:text-primary"
          >
            FAQ
          </a>
          <a
            href="/memorial"
            className="text-xs text-foreground transition hover:text-primary"
          >
            Memorial
          </a>
          <a
            href="/privacy"
            className="text-xs text-foreground transition hover:text-primary"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
