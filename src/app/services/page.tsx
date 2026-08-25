import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import PillarCard from "@/components/PillarCard";
import Reveal from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { pillars } from "@/data/site";

export const metadata: Metadata = {
  title: "Services — The 5 Pillars",
  description:
    "AI Automation, Business Consulting, Website Development, Expert Content Creation, and Lead Generation — five services built to work as one growth system.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="The 5 Pillars"
        title="Everything Your Growth Needs, Under One Roof"
        lead="Choose the pillar you need most, or combine several into one integrated growth system. Every engagement starts with your goals — never a template."
      />

      <Section className="pt-0">
        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal as="li" key={pillar.slug} delay={i * 90} className="h-full">
              <PillarCard pillar={pillar} />
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-gold-400/12 bg-ink-950/45 pt-0">
        <div className="pt-16 lg:pt-20">
          <h2 className="font-display text-2xl font-bold text-mist-100 sm:text-3xl">
            Compare the pillars
          </h2>
          <p className="mt-3 max-w-2xl text-[0.98rem] leading-relaxed text-mist-400">
            A quick look at what each pillar delivers, so you can see where your business would
            gain the most first.
          </p>

          <div className="mt-10 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <caption className="sr-only">Services included in each of the five pillars</caption>
              <thead>
                <tr className="border-b border-gold-400/25">
                  <th scope="col" className="py-4 pr-6 text-[0.78rem] font-bold tracking-[0.18em] text-gold-300 uppercase">
                    Pillar
                  </th>
                  <th scope="col" className="py-4 pr-6 text-[0.78rem] font-bold tracking-[0.18em] text-gold-300 uppercase">
                    Best for
                  </th>
                  <th scope="col" className="py-4 text-[0.78rem] font-bold tracking-[0.18em] text-gold-300 uppercase">
                    What&apos;s included
                  </th>
                </tr>
              </thead>
              <tbody>
                {pillars.map((p) => (
                  <tr key={p.slug} className="border-b border-gold-400/10 align-top">
                    <th scope="row" className="py-5 pr-6 text-[0.95rem] font-bold text-mist-100">
                      <span className="mr-2 text-gold-400/60">{p.number}</span>
                      {p.name}
                    </th>
                    <td className="py-5 pr-6 text-[0.9rem] leading-relaxed text-mist-400">
                      {p.navBlurb}
                    </td>
                    <td className="py-5 text-[0.9rem] leading-relaxed text-mist-400">
                      {p.services.join(" · ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <CtaBanner
        title="Not Sure Which Pillar Comes First?"
        body="Book a complimentary session and we'll tell you where your business would gain the most — even if the answer is only one service."
        cta="Book My Free Session"
      />
    </>
  );
}
