import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import Reveal from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "A proven four-step framework — Discover, Strategize, Implement, Scale — for building smarter, stronger, and more profitable businesses.",
};

const promises = [
  {
    title: "No one-size-fits-all solutions",
    body: "Every business has its own vision, challenges, strengths, and opportunities. We understand your goals before recommending anything.",
  },
  {
    title: "You always know where things stand",
    body: "Clear communication and measurable progress at every stage — not a black box you check in on once a month.",
  },
  {
    title: "The partnership doesn't end at launch",
    body: "We continuously refine, optimize, and improve your strategy so your business stays ahead of the competition.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="A Proven Framework for Building Smarter, Stronger & More Profitable Businesses"
        lead="Every successful project begins with understanding your business, your goals, and your vision. That's why we don't believe in one-size-fits-all solutions."
      />

      <Section className="pt-0">
        <div className="prose-coach max-w-3xl">
          <p>
            Our process is designed to uncover opportunities, identify challenges, and build a
            customized strategy that aligns with your business objectives.
          </p>
          <p>
            Whether you&apos;re looking for Business Consulting, Website Development, AI Automation,
            Expert Content Creation, or Lead Generation, our step-by-step approach ensures every
            recommendation is built around your success.
          </p>
        </div>

        <div className="mt-16">
          <ProcessSteps detailed />
        </div>
      </Section>

      <Section className="border-y border-gold-400/12 bg-ink-950/45">
        <SectionHeading
          eyebrow="What you can count on"
          title="How We Work With You"
          lead="Three commitments that hold from the first call through every stage of growth."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {promises.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 110} className="h-full">
              <div className="panel h-full rounded-2xl p-7">
                <span className="text-gold-gradient font-display text-3xl font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-5 text-lg font-bold text-mist-100">{p.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-mist-400">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <CtaBanner
        title="Ready to Outperform Your Competition?"
        body="Every successful business starts with a conversation. Let's discover what's possible for your business and build a strategy designed for long-term success."
        cta="Schedule Your Free Strategy Session"
      />
    </>
  );
}
