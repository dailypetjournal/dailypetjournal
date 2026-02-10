"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { MemorialForm } from "./MemorialForm";

function CandleIcon() {
  return (
    <div className="flex flex-col items-center justify-center" aria-hidden>
      <div className="h-4 w-1 rounded-full bg-amber-200/80" />
      <div
        className="-mt-0.5 h-3 w-2 rounded-sm bg-amber-100 shadow-sm"
        style={{ clipPath: "ellipse(50% 40% at 50% 50%)" }}
      />
      <div className="h-12 w-6 rounded-b-md border border-amber-200/60 bg-linear-to-b from-amber-50 to-amber-100/90 shadow-inner" />
    </div>
  );
}

const MEMORIAL_VERSE =
  "The Lord is close to the brokenhearted and saves those who are crushed in spirit. — Psalm 34:18";

export function MemorialView() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name")?.trim() || null;
  const message = searchParams.get("message")?.trim() || null;
  const [copied, setCopied] = useState(false);

  const copyShareLink = useCallback(() => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  if (name) {
    return (
      <div className="mt-8 space-y-8">
        <div className="flex justify-center">
          <div className="scale-150">
            <CandleIcon />
          </div>
        </div>
        <div className="rounded-xl border border-border bg-theme-light/50 p-6 text-center">
          <p className="text-2xl font-semibold text-dark">
            A candle has been lit for <span className="text-primary">{name}</span>
          </p>
          {message && (
            <p className="mt-3 text-foreground italic">&ldquo;{message}&rdquo;</p>
          )}
          <p className="mt-6 text-foreground">{MEMORIAL_VERSE}</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-light">Share this page so others can remember them too.</p>
          <button
            type="button"
            onClick={copyShareLink}
            className="min-h-[48px] w-full rounded-lg border border-border bg-white px-6 py-3 text-sm font-medium text-foreground shadow-sm transition hover:bg-theme-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto"
          >
            {copied ? "Link copied" : "Copy link"}
          </button>
        </div>
        <p className="text-center">
          <a href="/memorial" className="text-primary font-medium hover:underline">
            Light another candle
          </a>
        </p>
      </div>
    );
  }

  return <MemorialForm />;
}
