import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import { ArrowIcon, ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { mission } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Mission",
  description: mission.headline,
};

export default function MissionPage() {
  return (
    <>
      <PageHero eyebrow="Our Mission" title={mission.headline} />

      <Section className="pt-0">
        <div className="prose-coach max-w-3xl">
          {mission.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Section>

      <Section className="border-y border-gold-400/12 bg-ink-950/45">
        <SectionHeading
          eyebrow="Our philosophy"
          title="Very Simple, and We Hold to It"
          lead="Three beliefs that decide what we recommend — and what we tell you to skip."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {mission.principles.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 110} className="h-full">
              <div className="panel h-full rounded-2xl p-7 sm:p-8">
                <span
                  aria-hidden="true"
                  className="block h-px w-12 bg-[linear-gradient(90deg,#e3b23c,transparent)]"
                />
                <h3 className="font-display mt-6 text-lg font-bold text-gold-100 sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-3.5 text-[0.95rem] leading-relaxed text-mist-400">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[0.78rem] font-bold tracking-[0.3em] text-gold-300 uppercase">
            Our success is measured by one thing
          </p>
          <p className="font-display mt-6 text-2xl leading-snug font-bold text-balance sm:text-[2rem]">
            <span className="text-gold-gradient">
              Helping your business become stronger, more profitable, and better positioned for the
              future.
            </span>
          </p>
          <ButtonLink href="/our-story" variant="outline" size="lg" className="group mt-10">
            Read Our Story
            <ArrowIcon />
          </ButtonLink>
        </Reveal>
      </Section>

      <CtaBanner />
    </>
  );
}
