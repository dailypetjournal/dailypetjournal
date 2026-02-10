import type { Metadata } from "next";
import { Geist_Mono, Mulish } from "next/font/google";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dailypetjournal.com";
const SITE_NAME = "Daily Pet Journal";
const SITE_DESCRIPTION =
  "Comfort, guidance, and hope for Christian pet owners navigating grief and loss. Biblical wisdom and compassionate guidance.";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Comfort in Faith for Pet Loss`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Comfort in Faith for Pet Loss`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Comfort in Faith for Pet Loss`,
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${mulish.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Header />
        <main className="min-w-0 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
