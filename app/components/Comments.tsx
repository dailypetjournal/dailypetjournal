"use client";

import Script from "next/script";

type CommentsProps = {
  /** Cusdis app id (from dashboard). If missing, section is hidden. */
  appId: string | undefined;
  /** Stable id for this page (e.g. post slug). */
  pageId: string;
  /** Canonical URL of this page. */
  pageUrl: string;
  /** Page title for the thread. */
  pageTitle: string;
};

export function Comments({ appId, pageId, pageUrl, pageTitle }: CommentsProps) {
  if (!appId?.trim()) {
    return null;
  }

  return (
    <section
      className="mt-16 border-t border-border pt-12"
      aria-label="Comments"
    >
      <h2 className="text-2xl font-semibold text-dark">Comments</h2>
      <p className="mt-1 text-sm text-foreground">
        No account needed—leave your name, email, and comment below.
      </p>
      <div className="cusdis-container mt-6">
        <div
          id="cusdis_thread"
          data-host="https://cusdis.com"
          data-app-id={appId}
          data-page-id={pageId}
          data-page-url={pageUrl}
          data-page-title={pageTitle}
        />
        <Script
          src="https://cusdis.com/js/cusdis.es.js"
          strategy="afterInteractive"
        />
      </div>
    </section>
  );
}
