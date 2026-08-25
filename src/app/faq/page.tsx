import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import FaqAccordion from "@/components/FaqAccordion";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { faqs } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about working with The Invest Coach — services, timelines, pricing, and what happens on the free strategy session.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions, Answered Before You Ask"
        lead="If something isn't covered here, the free strategy session is the fastest way to get a straight answer."
      />

      <Section className="pt-0">
        <FaqAccordion />
      </Section>

      <CtaBanner
        title="Still Have a Question?"
        body="Bring it to the complimentary session. In about 30 minutes we'll identify opportunities to grow your business and answer whatever's on your list."
        cta="Schedule Your Free Strategy Session"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
