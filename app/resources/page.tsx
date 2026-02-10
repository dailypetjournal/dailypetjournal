import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Pet Loss Support | Daily Pet Journal",
  description:
    "Pet loss hotlines, support groups, and comfort resources. Find help and community when grieving a beloved pet.",
};

const HOTLINES = [
  {
    name: "ASPCA Pet Loss Hotline",
    phone: "877-474-3310",
    hours: "24/7",
    note: "Staffed by trained volunteers.",
  },
  {
    name: "Cornell University Pet Loss Support Hotline",
    phone: "607-218-7457",
    hours: "Mon & Wed, 6–9 p.m. EST",
    url: "https://vet.cornell.edu/about-us/outreach/pet-loss-support-hotline",
  },
  {
    name: "Tufts Pet Loss Support Hotline",
    phone: "508-839-7966",
    hours: "Check website for current hours",
    url: "https://vet.tufts.edu/pet-loss-support-helpline",
  },
  {
    name: "University of Pennsylvania",
    phone: "215-746-8247",
    hours: "Check website for hours",
  },
  {
    name: "Washington State University",
    phone: "509-335-5704",
    hours: "Check website for hours",
  },
  {
    name: "The Lams Pet Loss Support Center",
    phone: "888-332-7738",
    hours: "Mon–Fri, 9 a.m.–5 p.m. EST",
  },
];

const ONLINE = [
  {
    name: "Association for Pet Loss and Bereavement",
    description: "Free online chat rooms and resources for pet loss grief.",
    url: "https://www.aplb.org/",
  },
  {
    name: "Pet Loss Support (UK)",
    description: "Blue Cross UK pet loss support helpline and webchat.",
    url: "https://www.bluecross.org.uk/pet-loss-support",
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-background">
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 md:px-8 md:py-16">
        <h1 className="text-2xl font-bold text-dark sm:text-3xl md:text-4xl">
          Resources for Pet Loss
        </h1>
        <p className="mt-4 text-foreground leading-relaxed">
          When grief is heavy, talking with someone who understands can help.
          Below are pet loss hotlines, support groups, and other resources. We
          also link to our own articles for comfort from a faith perspective.
        </p>

        <section className="mt-10" aria-labelledby="hotlines-heading">
          <h2 id="hotlines-heading" className="text-xl font-semibold text-dark">
            Pet loss hotlines (phone)
          </h2>
          <p className="mt-2 text-sm text-light">
            Many are staffed by trained volunteers or veterinary students. Hours
            may change; check the provider’s website when possible.
          </p>
          <ul className="mt-4 space-y-4" role="list">
            {HOTLINES.map((item) => (
              <li
                key={item.name}
                className="rounded-lg border border-border bg-theme-light/40 p-4 shadow-sm"
              >
                <p className="font-semibold text-dark">{item.name}</p>
                <p className="mt-1">
                  <a
                    href={`tel:${item.phone.replace(/\D/g, "")}`}
                    className="text-primary font-medium hover:underline"
                  >
                    {item.phone}
                  </a>
                  {item.hours && (
                    <span className="ml-2 text-sm text-light">
                      ({item.hours})
                    </span>
                  )}
                </p>
                {item.note && (
                  <p className="mt-1 text-sm text-foreground">{item.note}</p>
                )}
                {item.url && (
                  <p className="mt-2">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      More info →
                    </a>
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10" aria-labelledby="online-heading">
          <h2 id="online-heading" className="text-xl font-semibold text-dark">
            Online support
          </h2>
          <ul className="mt-4 space-y-4" role="list">
            {ONLINE.map((item) => (
              <li
                key={item.name}
                className="rounded-lg border border-border bg-theme-light/40 p-4 shadow-sm"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:underline"
                >
                  {item.name} →
                </a>
                <p className="mt-1 text-sm text-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10" aria-labelledby="faith-heading">
          <h2 id="faith-heading" className="text-xl font-semibold text-dark">
            Comfort from Scripture and faith
          </h2>
          <p className="mt-2 text-foreground">
            Articles and reflections from Daily Pet Journal:
          </p>
          <ul className="mt-4 space-y-2 text-foreground" role="list">
            <li>
              <a href="/print/verses" className="text-primary hover:underline">
                Printable: Bible verses for pet loss
              </a>
              <span className="ml-1 text-light">(print or save as PDF)</span>
            </li>
            <li>
              <a href="/blog/bible-verses-for-pet-loss-grief" className="text-primary hover:underline">
                Bible verses for pet loss and grief
              </a>
            </li>
            <li>
              <a href="/blog/christian-pet-loss-finding-comfort-in-scripture" className="text-primary hover:underline">
                Christian pet loss: finding comfort in Scripture
              </a>
            </li>
            <li>
              <a href="/blog/do-dogs-go-to-heaven-what-the-bible-really-says" className="text-primary hover:underline">
                Do dogs go to heaven? What the Bible really says
              </a>
            </li>
            <li>
              <a href="/blog/praying-for-a-dying-pet-biblical-guidance" className="text-primary hover:underline">
                Praying for a dying pet: biblical guidance
              </a>
            </li>
            <li>
              <a href="/blog/pet-memorial-ideas-for-christian-families" className="text-primary hover:underline">
                Pet memorial ideas for Christian families
              </a>
            </li>
            <li>
              <a href="/faq" className="text-primary hover:underline">
                FAQ: pets, faith, and grief
              </a>
            </li>
          </ul>
        </section>

        <p className="mt-10 text-sm text-light">
          If you are in crisis or having thoughts of self-harm, please reach out
          to a crisis line (e.g. 988 in the US). You matter.
        </p>

        <p className="mt-6">
          <a href="/" className="text-primary font-medium hover:underline">
            ← Back to home
          </a>
        </p>
      </article>
    </div>
  );
}
