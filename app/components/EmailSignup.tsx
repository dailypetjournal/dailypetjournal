"use client";

const formAction = process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ACTION;
const isMailerLite = formAction?.includes("mailerlite.com");

export function EmailSignup() {
  if (!formAction) return null;

  return (
    <section
      className="mt-20 rounded-xl border border-border bg-theme-light/50 p-6 shadow-sm sm:p-8"
      aria-labelledby="email-signup-heading"
    >
      <h2 id="email-signup-heading" className="text-xl font-semibold text-dark">
        Comfort in your inbox
      </h2>
      <p className="mt-2 text-foreground">
        Get a short Scripture or reflection by email—no spam, just gentle comfort when you need it.
      </p>
      <form
        action={formAction}
        method="post"
        target="_self"
        className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end"
      >
        {isMailerLite && <input type="hidden" name="ml-submit" value="1" />}
        <div className="min-w-0 flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            name={isMailerLite ? "fields[email]" : "EMAIL"}
            required
            placeholder="you@example.com"
            className="block w-full rounded-lg border border-border bg-white px-4 py-2.5 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <button
          type="submit"
          className="min-h-[44px] shrink-0 rounded-lg bg-primary px-6 py-2.5 text-base font-semibold text-white shadow-md transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Sign up
        </button>
      </form>
      <p className="mt-3 text-xs text-light">
        We&apos;ll send a confirmation email first. Unsubscribe anytime.
      </p>
    </section>
  );
}
