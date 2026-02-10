import dynamic from "next/dynamic";
import Link from "next/link";

const EmailSignup = dynamic(
  () => import("@/app/components/EmailSignup").then((m) => ({ default: m.EmailSignup })),
  { ssr: true }
);

export default function Home() {
  return (
    <div className="bg-background">
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl md:text-5xl">
            Daily Pet Journal
          </h1>
          <p className="mt-4 text-lg text-foreground sm:text-xl">
            Comfort, guidance, and hope for Christian pet owners navigating grief and loss.
          </p>
          <p className="mt-2 text-foreground">
            Biblical wisdom and compassionate guidance when you need it most.
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6">
          <Link
            href="/blog"
            className="btn-primary inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold shadow-md transition hover:opacity-90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Read Articles
          </Link>
          <p className="text-center text-sm text-light">
            Scripture, prayers, and practical comfort for pet loss grief.
          </p>
        </div>

        <div className="mt-20 rounded-xl border border-border bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold text-dark">
            Finding comfort in faith
          </h2>
          <p className="mt-3 text-foreground leading-relaxed">
            When you lose a beloved pet, the grief is real. Daily Pet Journal offers biblical guidance, comforting Scripture, and hope from ancient and modern Christian tradition—so you don&apos;t have to walk through it alone.
          </p>
        </div>

        <EmailSignup />
      </section>
    </div>
  );
}
