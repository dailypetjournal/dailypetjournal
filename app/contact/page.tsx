import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/app/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Daily Pet Journal",
  description: "Get in touch with Daily Pet Journal.",
};

export default function ContactPage() {
  return (
    <div className="bg-background">
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 md:px-8 md:py-16">
        <h1 className="text-2xl font-bold text-dark sm:text-3xl md:text-4xl">Contact</h1>
        <p className="mt-4 text-foreground leading-relaxed">
          We&apos;d love to hear from you. If you have a question, a prayer request, or
          feedback about Daily Pet Journal, send a message below.
        </p>

        <ContactForm />

        <p className="mt-8 text-sm text-light">
          We do our best to respond within a few days. Thank you for your patience.
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className="text-primary font-medium hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </article>
    </div>
  );
}
