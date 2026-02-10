import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thanks for signing up | Daily Pet Journal",
  description: "Check your inbox to confirm your subscription.",
};

export default function SubscribeThanksPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-xl px-4 py-16 text-center sm:px-6">
        <h1 className="text-2xl font-bold text-dark sm:text-3xl">
          Thanks for signing up
        </h1>
        <p className="mt-4 text-foreground">
          Check your inbox and click the confirmation link. Then you&apos;ll start receiving comfort in your inbox.
        </p>
        <p className="mt-8">
          <a href="/" className="text-primary font-medium hover:underline">
            ← Back to home
          </a>
        </p>
      </div>
    </div>
  );
}
