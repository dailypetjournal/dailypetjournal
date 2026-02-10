import type { Metadata } from "next";
import { PrintButton } from "./PrintButton";

export const metadata: Metadata = {
  title: "Printable: Bible Verses for Pet Loss | Daily Pet Journal",
  description:
    "Print or save as PDF: comforting Bible verses for pet loss grief. Free to download and share.",
};

const VERSES: { ref: string; text: string; why: string }[] = [
  { ref: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", why: "God draws near in your darkest moments." },
  { ref: "Matthew 5:4", text: "Blessed are those who mourn, for they will be comforted.", why: "Jesus blesses mourning; He promises comfort will come." },
  { ref: "Psalm 147:3", text: "He heals the brokenhearted and binds up their wounds.", why: "Healing is God's work, and He is gentle with broken hearts." },
  { ref: "Genesis 1:25", text: "God made the wild animals according to their kinds... And God saw that it was good.", why: "Your pet was part of God's good design." },
  { ref: "Psalm 50:10-11", text: "For every animal of the forest is mine... I know every bird in the mountains.", why: "God knows every creature He made—including your pet." },
  { ref: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain.", why: "This grief will not last forever; a day is coming when God wipes away every tear." },
  { ref: "2 Corinthians 1:3-4", text: "Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort.", why: "God actively comforts you in your troubles." },
  { ref: "1 Thessalonians 4:13", text: "We do not want you to grieve like the rest of mankind, who have no hope.", why: "As Christians, our grief is woven through with hope." },
];

export default function PrintVersesPage() {
  return (
    <div className="print-verses bg-background">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 md:px-8 md:py-16">
        <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-4">
          <a href="/blog/bible-verses-for-pet-loss-grief" className="text-primary font-medium hover:underline">
            ← Full article
          </a>
          <PrintButton />
        </div>

        <header className="print:mb-8">
          <h1 className="text-2xl font-bold text-dark print:text-xl">
            Bible Verses for Pet Loss
          </h1>
          <p className="mt-2 text-foreground print:text-sm">
            Comfort from Scripture when grieving a beloved pet. — Daily Pet Journal
          </p>
        </header>

        <ul className="space-y-6 print:space-y-4" role="list">
          {VERSES.map((v) => (
            <li key={v.ref} className="break-inside-avoid">
              <p className="font-semibold text-dark print:text-sm">{v.ref}</p>
              <p className="mt-1 italic text-foreground print:text-sm">
                &ldquo;{v.text}&rdquo;
              </p>
              <p className="mt-1 text-sm text-light print:text-xs">{v.why}</p>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-xs text-light print:mt-8">
          dailypetjournal.com · Free to print and share
        </p>
      </div>
    </div>
  );
}
