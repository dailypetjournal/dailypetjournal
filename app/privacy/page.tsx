import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Daily Pet Journal",
  description: "Privacy policy for Daily Pet Journal.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-background">
      <article className="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16">
        <h1 className="text-4xl font-bold text-dark">Privacy Policy</h1>
        <p className="mt-2 text-sm text-light">Last updated: {new Date().toLocaleDateString("en-US")}</p>

        <section className="mt-8 space-y-6 text-foreground leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-dark">Information we collect</h2>
            <p className="mt-2">
              Daily Pet Journal may collect information you provide when you contact us (e.g., email
              address and the content of your message). We do not sell your information to third
              parties.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-dark">How we use your information</h2>
            <p className="mt-2">
              We use the information you provide only to respond to your inquiries and to improve
              our site and content. We do not use your information for marketing without your
              consent.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-dark">Cookies and analytics</h2>
            <p className="mt-2">
              If we use cookies or analytics in the future, we will update this policy and describe
              how they are used. You can typically disable cookies in your browser settings.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-dark">Third-party links</h2>
            <p className="mt-2">
              Our site may link to other websites. We are not responsible for the privacy
              practices of those sites. We encourage you to read their privacy policies.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-dark">Changes</h2>
            <p className="mt-2">
              We may update this privacy policy from time to time. The &quot;Last updated&quot; date at the
              top will reflect the most recent changes.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-dark">Contact</h2>
            <p className="mt-2">
              If you have questions about this privacy policy, please{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact us
              </Link>
              .
            </p>
          </div>
        </section>

        <div className="mt-10">
          <Link href="/" className="text-primary font-medium hover:underline">
            ← Back to Home
          </Link>
        </div>
      </article>
    </div>
  );
}
