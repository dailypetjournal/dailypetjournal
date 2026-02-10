"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      Print / Save as PDF
    </button>
  );
}
