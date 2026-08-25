import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/ui/Reveal";
import { GoldRule, Section } from "@/components/ui/Section";
import { company, story } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Built on years of experience, driven by purpose — how The Invest Coach, Inc. came to be, and the philosophy behind the work.",
};

const milestones = [
  {
    label: "The foundation",
    body: "Decades of building businesses, leading teams, and solving problems on the owner's side of the table.",
  },
  {
    label: "The realization",
    body: "Success isn't working harder. It's the right strategy, systems, technology, and the ability to adapt.",
  },
  {
    label: "The company",
    body: "The Invest Coach, Inc. — created to simplify a landscape that changes faster than most owners can track.",
  },
];

export default function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={story.headline}
        lead={`${company.yearsExperience} years across multiple industries — including the setbacks that taught us what actually drives long-term growth.`}
      />

      <Section className="pt-0">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div className="prose-coach">
            {story.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <Reveal delay={120}>
            <ol className="relative flex flex-col gap-8 border-l border-gold-400/25 pl-7">
              {milestones.map((m) => (
                <li key={m.label} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute top-1.5 -left-[2.05rem] block h-3 w-3 rounded-full border-2 border-gold-300 bg-ink-950"
                  />
                  <h2 className="text-[0.72rem] font-bold tracking-[0.28em] text-gold-300 uppercase">
                    {m.label}
                  </h2>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-mist-300">{m.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      <Section className="border-y border-gold-400/12 bg-ink-950/45">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-mist-100 sm:text-3xl">
            Our philosophy is very simple
          </h2>
          <ul className="mt-9 flex flex-col gap-4">
            {[
              "Technology should empower people — not replace them.",
              "Marketing should generate measurable business results — not just clicks and impressions.",
              "Every investment should contribute to long-term growth, stronger customer relationships, and sustainable success.",
            ].map((line) => (
              <li key={line} className="panel flex items-start gap-4 rounded-2xl p-6">
                <svg
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  className="mt-1 h-4 w-4 shrink-0 text-gold-300"
                  fill="none"
                >
                  <path
                    d="m3.5 8.4 3 3 6-6.8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[0.98rem] leading-relaxed text-mist-200">{line}</span>
              </li>
            ))}
          </ul>

          <div className="prose-coach mt-12">
            {story.closing.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <GoldRule className="mt-14 opacity-60" />

          <div className="mt-10 text-center">
            <p className="text-[0.78rem] font-bold tracking-[0.3em] text-gold-300 uppercase">
              Our success is measured by one thing
            </p>
            <p className="font-display mt-5 text-xl leading-snug font-bold text-balance text-mist-100 sm:text-2xl">
              {story.measure}
            </p>
            <p className="font-display mt-10 flex flex-col gap-1.5 text-lg font-bold sm:text-xl">
              {story.signOff.map((line) => (
                <span key={line} className="text-gold-gradient">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>
      </Section>

      <CtaBanner
        title="Let's Build Something That Lasts"
        body="Whether you're launching your first business, expanding into new markets, modernizing operations, or preparing for the next stage of growth — we're here to help."
        cta="Start the Conversation"
      />
    </>
  );
}
