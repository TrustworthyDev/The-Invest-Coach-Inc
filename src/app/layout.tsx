import type { Metadata, Viewport } from "next";
import { Cinzel, Inter } from "next/font/google";
import BackgroundTheme from "@/components/BackgroundTheme";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { company } from "@/data/site";
import { resolveLogoSrc } from "@/lib/logo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://theinvestcoach.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description:
    "Helping businesses grow faster, work smarter, and increase revenue through business consulting, website development, AI automation, expert content creation, and lead generation.",
  keywords: [
    "business consulting",
    "AI automation",
    "website development",
    "content creation",
    "lead generation",
    "North Miami",
  ],
  openGraph: {
    type: "website",
    siteName: company.name,
    url: siteUrl,
    title: `${company.name} | ${company.tagline}`,
    description:
      "Strategy, innovation, and growth — one integrated system for consulting, websites, AI automation, content, and lead generation.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | ${company.tagline}`,
    description:
      "Helping businesses grow faster, work smarter, and increase revenue.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#07080c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: company.name,
  slogan: company.tagline,
  url: siteUrl,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.line1,
    addressLocality: "North Miami",
    addressRegion: "FL",
    postalCode: "33181",
    addressCountry: "US",
  },
  areaServed: "US",
  description:
    "Business consulting, website development, AI automation, expert content creation, and lead generation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const logoSrc = resolveLogoSrc();

  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-gold-300 focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-ink-950"
        >
          Skip to content
        </a>

        <BackgroundTheme />
        <Header logoSrc={logoSrc} />

        <main id="main" className="relative z-10 flex-1 pt-[var(--header-h)]">
          {children}
        </main>

        <Footer logoSrc={logoSrc} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
