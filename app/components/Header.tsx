export function Header() {
  const linkClass =
    "text-sm font-medium text-foreground transition hover:text-primary";
  return (
    <header className="border-b border-border bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <a
          href="/"
          className="text-xl font-bold text-dark transition hover:text-primary"
        >
          Daily Pet Journal
        </a>
        <nav className="flex gap-6">
          <a href="/" className={linkClass}>
            Home
          </a>
          <a href="/blog" className={linkClass}>
            Articles
          </a>
          <a href="/tags" className={linkClass}>
            Tags
          </a>
          <a href="/about" className={linkClass}>
            About
          </a>
          <a href="/contact" className={linkClass}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
