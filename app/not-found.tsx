import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-background flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-dark">Page not found</h1>
      <p className="mt-2 text-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="btn-primary mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold shadow-md transition hover:opacity-90 hover:shadow-lg"
      >
        Back to Home
      </Link>
    </div>
  );
}
