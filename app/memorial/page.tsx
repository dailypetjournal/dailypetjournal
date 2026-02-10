import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const MemorialView = dynamic(() => import("./MemorialView").then((m) => ({ default: m.MemorialView })), {
  ssr: true,
});

export const metadata: Metadata = {
  title: "Light a Candle | Memorial | Daily Pet Journal",
  description:
    "Light a candle in memory of your beloved pet. A simple way to honor and remember them.",
};

function MemorialFallback() {
  return (
    <div className="mt-8 flex justify-center">
      <div className="h-24 w-12 animate-pulse rounded-md bg-amber-100/80" />
    </div>
  );
}

export default function MemorialPage() {
  return (
    <div className="bg-background">
      <article className="mx-auto max-w-2xl px-4 py-10 sm:px-6 md:px-8 md:py-16">
        <h1 className="text-center text-2xl font-bold text-dark sm:text-3xl md:text-4xl">
          Light a Candle
        </h1>
        <p className="mt-4 text-center text-foreground leading-relaxed">
          In memory of a beloved pet. May their memory be a blessing.
        </p>

        <Suspense fallback={<MemorialFallback />}>
          <MemorialView />
        </Suspense>

        <p className="mt-12 text-center text-sm text-light">
          <a href="/blog" className="text-primary hover:underline">
            Find comfort in our articles
          </a>
        </p>
      </article>
    </div>
  );
}
