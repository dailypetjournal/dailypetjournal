"use client";

import { useState } from "react";

function CandleIcon() {
  return (
    <div className="flex flex-col items-center justify-center" aria-hidden>
      <div className="h-4 w-1 rounded-full bg-amber-200/80" />
      <div className="-mt-0.5 h-3 w-2 rounded-sm bg-amber-100 shadow-sm" style={{ clipPath: "ellipse(50% 40% at 50% 50%)" }} />
      <div className="h-12 w-6 rounded-b-md border border-amber-200/60 bg-linear-to-b from-amber-50 to-amber-100/90 shadow-inner" />
    </div>
  );
}

export function MemorialForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedMessage = message.trim();
    if (!trimmedName) return;

    setSubmitting(true);
    const params = new URLSearchParams();
    params.set("name", trimmedName);
    if (trimmedMessage) params.set("message", trimmedMessage);
    window.location.href = `/memorial?${params.toString()}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="flex justify-center">
        <div className="scale-150">
          <CandleIcon />
        </div>
      </div>
      <p className="text-center text-foreground">
        Share your pet&apos;s name and, if you wish, a short message. You&apos;ll get a link to share with family and friends.
      </p>
      <div>
        <label htmlFor="memorial-name" className="block text-sm font-medium text-dark">
          Pet&apos;s name
        </label>
        <input
          id="memorial-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Buddy, Luna"
          className="mt-1 block w-full rounded-lg border border-border bg-white px-4 py-2.5 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          maxLength={100}
        />
      </div>
      <div>
        <label htmlFor="memorial-message" className="block text-sm font-medium text-dark">
          Optional message
        </label>
        <textarea
          id="memorial-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="In loving memory..."
          rows={3}
          className="mt-1 block w-full rounded-lg border border-border bg-white px-4 py-2.5 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          maxLength={300}
        />
        <p className="mt-1 text-xs text-light">{message.length} / 300</p>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={submitting}
          className="min-h-[48px] w-full rounded-lg bg-primary px-8 py-3 text-base font-semibold text-white shadow-md transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-70 sm:w-auto"
        >
          {submitting ? "Lighting…" : "Light a candle"}
        </button>
      </div>
    </form>
  );
}
