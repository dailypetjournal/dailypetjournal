import type { Metadata } from "next";

const faqs: { question: string; answer: string; articleHref?: string; articleLabel?: string }[] = [
  {
    question: "Do dogs (or pets) go to heaven?",
    answer:
      "The Bible doesn't explicitly say 'yes' or 'no,' but it does show that God created animals and called them good, that creation will be restored, and that His love extends to all He made. Many Christians find hope in the possibility that God's new creation includes the creatures we loved—while trusting Him with what we cannot know for certain.",
    articleHref: "/blog/do-dogs-go-to-heaven-what-the-bible-really-says",
    articleLabel: "Do dogs go to heaven? What the Bible really says",
  },
  {
    question: "What does the Bible say about animals?",
    answer:
      "Scripture shows that God created animals, called them good, included them in His covenant with Noah, and uses them as examples of trust and care. The Bible doesn't give a full 'theology of pets,' but it consistently portrays animals as part of God's good creation and under His care.",
    articleHref: "/blog/what-ancient-texts-reveal-about-pets-souls-heaven",
    articleLabel: "What ancient texts reveal about pets, souls, and heaven",
  },
  {
    question: "Are there Bible verses for pet loss grief?",
    answer:
      "Yes. Verses about God's comfort, His nearness to the brokenhearted, and His care for creation can bring real comfort when you're grieving a pet. Passages like Psalm 34:18, Matthew 10:29–31, and Revelation 21:4 are often held close by grieving pet owners.",
    articleHref: "/blog/bible-verses-for-pet-loss-grief",
    articleLabel: "Bible verses for pet loss and grief",
  },
  {
    question: "How can I pray for a dying or sick pet?",
    answer:
      "Praying for a dying pet is a natural and faithful response. You can ask God for peace for your pet, wisdom for decisions, strength for yourself, and the grace to trust Him with the outcome—whether healing or a peaceful passing. There is no single 'right' formula; God hears the heart behind the words.",
    articleHref: "/blog/praying-for-a-dying-pet-biblical-guidance",
    articleLabel: "Praying for a dying pet: biblical guidance",
  },
  {
    question: "What are some Christian pet memorial ideas?",
    answer:
      "Christian families often remember their pets through a small memorial service or prayer, a garden stone or plaque with a verse, a donation to a shelter in the pet's name, or a framed photo with a favorite Scripture. The goal is to honor the bond and entrust your pet to God's care.",
    articleHref: "/blog/pet-memorial-ideas-for-christian-families",
    articleLabel: "Pet memorial ideas for Christian families",
  },
  {
    question: "Do pets have souls?",
    answer:
      "The Bible doesn't define 'soul' the same way for animals as for humans, and it doesn't spell out whether animals have an afterlife. What it does show is that animals are valuable to God and part of His creation. Many believers find comfort leaving the details to God while resting in His goodness.",
    articleHref: "/blog/do-pets-have-souls-what-2-enoch-reveals",
    articleLabel: "Do pets have souls? What 2 Enoch reveals",
  },
  {
    question: "Is it okay to grieve a pet as a Christian?",
    answer:
      "Yes. Grieving a pet doesn't mean you love God less or that your pet mattered more than people. The bond you had was real and God-given. Scripture invites us to bring our sorrows to God and to receive His comfort. Your grief matters to Him.",
    articleHref: "/blog/christian-pet-loss-finding-comfort-in-scripture",
    articleLabel: "Christian pet loss: finding comfort in Scripture",
  },
  {
    question: "Where can I find more comfort and resources for pet loss?",
    answer:
      "Daily Pet Journal offers articles on Bible verses, prayer, memorials, and what Scripture and tradition say about pets and hope. We also recommend speaking with a pastor or counselor if grief is overwhelming, and connecting with others who understand the loss of a beloved pet.",
    articleHref: "/blog",
    articleLabel: "Browse all articles",
  },
];

function buildFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export const metadata: Metadata = {
  title: "FAQ | Daily Pet Journal",
  description:
    "Common questions about pets and faith: Do pets go to heaven? What does the Bible say about animals? Bible verses and comfort for pet loss grief.",
};

export default function FaqPage() {
  const schema = buildFaqSchema();

  return (
    <div className="bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 md:px-8 md:py-16">
        <h1 className="text-2xl font-bold text-dark sm:text-3xl md:text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-foreground leading-relaxed">
          Answers to common questions about faith, pets, and grief—with links to
          deeper articles when you want to read more.
        </p>

        <dl className="mt-10 space-y-8">
          {faqs.map((faq, index) => (
            <div key={index}>
              <dt className="text-base font-semibold text-dark sm:text-lg">
                {faq.question}
              </dt>
              <dd className="mt-2 text-foreground leading-relaxed">
                <span>{faq.answer}</span>
                {faq.articleHref && faq.articleLabel && (
                  <span className="mt-3 block">
                    <a
                      href={faq.articleHref}
                      className="text-primary font-medium hover:underline"
                    >
                      Read more: {faq.articleLabel} →
                    </a>
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="/blog"
            className="text-primary font-medium hover:underline"
          >
            Browse all articles
          </a>
          <a
            href="/contact"
            className="text-primary font-medium hover:underline"
          >
            Contact us
          </a>
        </div>
      </article>
    </div>
  );
}
