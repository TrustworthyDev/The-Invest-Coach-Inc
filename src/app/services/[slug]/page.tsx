import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import PillarIcon from "@/components/PillarIcon";
import { ArrowIcon, ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { pillars } from "@/data/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return pillars.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const pillar = pillars.find((p) => p.slug === slug);
  if (!pillar) return { title: "Service not found" };

  return {
    title: pillar.name,
    description: pillar.headline,
    openGraph: { title: pillar.name, description: pillar.headline },
  };
}

export default async function PillarPage({ params }: Params) {
  const { slug } = await params;
  const index = pillars.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const pillar = pillars[index];
  const next = pillars[(index + 1) % pillars.length];

  return (
    <>
      <PageHero
        eyebrow={`Pillar ${pillar.number} — ${pillar.name}`}
        title={pillar.headline}
        lead={pillar.intro[0]}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <ButtonLink href="/start-a-project" size="lg" className="group w-full sm:w-auto">
            Start a Project
            <ArrowIcon />
          </ButtonLink>
          <ButtonLink href="/services" size="lg" variant="outline" className="w-full sm:w-auto">
            All 5 Pillars
          </ButtonLink>
        </div>
      </PageHero>

      {/* Outcome strip */}
      <Container>
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-gold-400/20 bg-gold-400/15 sm:grid-cols-3">
          {pillar.outcomes.map((o) => (
            <li key={o.label} className="bg-ink-950/80 px-6 py-7">
              <span className="text-gold-gradient font-display block text-2xl font-bold sm:text-3xl">
                {o.stat}
              </span>
              <span className="mt-2 block text-[0.85rem] leading-snug text-mist-400">
                {o.label}
              </span>
            </li>
          ))}
        </ul>
      </Container>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Overview</Eyebrow>
            <div className="prose-coach mt-7">
              {pillar.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={130}>
            <div className="panel rounded-2xl p-7 sm:p-8">
              <div className="flex items-center gap-4">
                <span className="flex h-13 w-13 items-center justify-center rounded-xl border border-gold-400/30 bg-gold-400/8 text-gold-300">
                  <PillarIcon slug={pillar.slug} className="h-6 w-6" />
                </span>
                <h2 className="font-display text-xl font-bold text-gold-100">Services Include</h2>
              </div>

              <ul className="mt-7 flex flex-col divide-y divide-gold-400/12">
                {pillar.services.map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-3 py-3.5 text-[0.95rem] font-semibold text-mist-200"
                  >
                    <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 shrink-0 text-gold-300" fill="none">
                      <path
                        d="m3.5 8.4 3 3 6-6.8"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>

              <ButtonLink href="/start-a-project" size="md" className="group mt-8 w-full">
                Discuss {pillar.name}
                <ArrowIcon />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Next pillar */}
      <Section className="border-t border-gold-400/12 bg-ink-950/45">
        <Link
          href={`/services/${next.slug}`}
          className="group flex flex-col gap-4 rounded-2xl border border-gold-400/20 px-7 py-8 transition-colors duration-300 hover:border-gold-400/50 hover:bg-gold-400/6 sm:flex-row sm:items-center sm:justify-between sm:px-9"
        >
          <div>
            <span className="text-[0.72rem] font-bold tracking-[0.28em] text-gold-300 uppercase">
              Next pillar — {next.number}
            </span>
            <h2 className="font-display mt-2.5 text-xl font-bold text-mist-100 transition-colors group-hover:text-gold-100 sm:text-2xl">
              {next.name}
            </h2>
            <p className="mt-2 max-w-xl text-[0.92rem] text-mist-400">{next.navBlurb}</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 text-[0.85rem] font-bold text-gold-300">
            Continue
            <ArrowIcon />
          </span>
        </Link>
      </Section>

      <CtaBanner />
    </>
  );
}
