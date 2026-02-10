import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Daily Pet Journal",
  description:
    "Learn about Daily Pet Journal—comfort, guidance, and hope for Christian pet owners navigating grief and loss.",
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 md:px-8 md:py-16">
        <h1 className="text-2xl font-bold text-dark sm:text-3xl md:text-4xl">About Daily Pet Journal</h1>
        <p className="mt-4 text-base text-foreground leading-relaxed sm:text-lg">
          Daily Pet Journal exists to offer comfort, guidance, and hope to Christian pet owners
          who are grieving the loss of a beloved companion—or walking through the difficult
          decisions that come with a pet&apos;s end of life.
        </p>
        <p className="mt-6 text-foreground leading-relaxed">
          We believe that the bond between people and their pets is real and God-given, and that
          Scripture, prayer, and the wisdom of the church can speak into the pain of pet loss.
          Our articles draw on the Bible, ancient Jewish and Christian texts, and pastoral
          reflection to offer honest, biblically grounded comfort.
        </p>
        <p className="mt-6 text-foreground leading-relaxed">
          Whether you&apos;re looking for Bible verses for grief, guidance on memorials and
          remembrance, or hope about pets and eternity, we hope you find something here that
          helps. You are not alone—and your grief matters to God.
        </p>
        <div className="mt-10">
          <Link
            href="/blog"
            className="btn-primary inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold shadow-md transition hover:opacity-90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Read Articles
          </Link>
        </div>
      </article>
    </div>
  );
}
