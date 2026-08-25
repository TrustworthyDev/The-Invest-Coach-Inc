import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";
import Reveal from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Results",
  description:
    "What working with The Invest Coach looks like — measurable outcomes across consulting, websites, automation, content, and lead generation.",
};

const outcomes = [
  {
    metric: "Time back",
    title: "Operations that run without babysitting",
    body: "Automated workflows and follow-ups replace the manual steps that quietly consumed a day of every week.",
  },
  {
    metric: "Better leads",
    title: "A pipeline you can plan around",
    body: "Multi-channel campaigns and optimized landing pages bring in prospects who match who you actually serve.",
  },
  {
    metric: "Clarity",
    title: "Decisions backed by numbers",
    body: "Performance analysis shows which marketing pays for itself and which spend to stop defending.",
  },
  {
    metric: "Credibility",
    title: "A presence that matches the business",
    body: "Fast, modern websites and expert content that build trust before the first conversation happens.",
  },
];

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Growth You Can Measure, Not Just Describe"
        lead="Our success is measured by one thing: helping your business become stronger, more profitable, and better positioned for the future."
      />

      <Section className="pt-0">
        <ul className="grid gap-6 sm:grid-cols-2">
          {outcomes.map((o, i) => (
            <Reveal as="li" key={o.title} delay={i * 100} className="h-full">
              <div className="panel panel-hover h-full rounded-2xl p-7 hover:-translate-y-1.5 hover:border-gold-400/45 sm:p-8">
                <span className="text-[0.72rem] font-bold tracking-[0.28em] text-gold-300 uppercase">
                  {o.metric}
                </span>
                <h2 className="font-display mt-5 text-xl font-bold text-mist-100">{o.title}</h2>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-mist-400">{o.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="border-y border-gold-400/12 bg-ink-950/45">
        <SectionHeading
          eyebrow="Testimonials"
          title="In Their Words"
          lead="Replace these with real client quotes as they come in — the layout holds any length."
        />
        <div className="mt-14">
          <Testimonials />
        </div>
      </Section>

      <CtaBanner
        title="Want Results Like These?"
        body="Book a complimentary strategy session and we'll map the fastest path to measurable growth for your business."
        cta="Book My Free Session"
      />
    </>
  );
}
