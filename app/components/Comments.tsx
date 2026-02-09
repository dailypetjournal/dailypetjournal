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
  const hasAppId = !!appId?.trim();

  return (
    <section
      className="mt-16 border-t border-border pt-12"
      aria-label="Comments"
    >
      <h2 className="text-2xl font-semibold text-dark">Comments</h2>
      <p className="mt-1 text-sm text-foreground">
        No account needed—leave your name, email, and comment below.
      </p>
      {!hasAppId ? (
        <p className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
          Comments not loaded: <code>NEXT_PUBLIC_CUSDIS_APP_ID</code> is not set
          for this build. Add it in Cloudflare Pages → Settings → Environment
          variables, then redeploy.
        </p>
      ) : (
        <div className="cusdis-container mt-6">
          <div
            id="cusdis_thread"
            data-host="https://cusdis.com"
            data-app-id={appId}
            data-page-id={pageId}
            data-page-url={pageUrl}
            data-page-title={pageTitle}
            data-theme="auto"
          />
          <Script
            src="https://cusdis.com/js/cusdis.es.js"
            strategy="afterInteractive"
          />
        </div>
      )}
    </section>
  );
}
