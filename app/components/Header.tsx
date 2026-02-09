import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-border bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link
          href="/"
          className="text-xl font-bold text-dark transition hover:text-primary"
        >
          Daily Pet Journal
        </Link>
        <nav className="flex gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-foreground transition hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-foreground transition hover:text-primary"
          >
            Articles
          </Link>
          <Link
            href="/tags"
            className="text-sm font-medium text-foreground transition hover:text-primary"
          >
            Tags
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-foreground transition hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-foreground transition hover:text-primary"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
