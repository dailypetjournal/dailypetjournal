import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-theme-light">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <Link
            href="/"
            className="font-semibold text-dark transition hover:text-primary"
          >
            Daily Pet Journal
          </Link>
          <p className="text-sm text-foreground">
            Comfort in faith for pet loss. © {year}
          </p>
        </div>
        <p className="mt-4 text-center text-xs text-light sm:text-left">
          Biblical wisdom and hope for grieving pet owners.
        </p>
        <div className="mt-4 flex justify-center gap-4 sm:justify-start">
          <Link
            href="/privacy"
            className="text-xs text-foreground transition hover:text-primary"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
