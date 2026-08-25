import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectForm from "@/components/ProjectForm";
import { Container, Section } from "@/components/ui/Section";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Book a complimentary 30-minute strategy session. We'll identify opportunities to grow your business, improve your online presence, and build a plan around your goals.",
};

const expectations = [
  {
    title: "A conversation, not a pitch",
    body: "We start by learning your business, your goals, and the challenges you're trying to solve.",
  },
  {
    title: "Opportunities you can act on",
    body: "In about 30 minutes we'll identify where growth is being left on the table right now.",
  },
  {
    title: "A strategy tailored to you",
    body: "One service or several — you'll leave knowing what we'd recommend and why.",
  },
];

export default function StartAProjectPage() {
  return (
    <>
      <PageHero
        eyebrow="Start a Project"
        title="Let's Build Your Growth Strategy"
        lead="Every successful business starts with a conversation. Tell us where you're headed and we'll show you the fastest sensible route — at no cost and no obligation."
      />

      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <aside className="lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start">
            <h2 className="text-[0.78rem] font-bold tracking-[0.3em] text-gold-300 uppercase">
              What to expect
            </h2>
            <ul className="mt-7 flex flex-col gap-6">
              {expectations.map((item, i) => (
                <li key={item.title} className="flex gap-4">
                  <span className="font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-400/35 text-[0.85rem] font-bold text-gold-300">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-[1rem] font-bold text-mist-100">{item.title}</h3>
                    <p className="mt-1.5 text-[0.92rem] leading-relaxed text-mist-400">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="panel mt-10 rounded-2xl p-6">
              <h3 className="text-[0.78rem] font-bold tracking-[0.28em] text-gold-300 uppercase">
                Prefer email?
              </h3>
              <a
                href={`mailto:${company.email}`}
                className="mt-3 block text-[0.98rem] font-semibold text-mist-100 underline-offset-4 hover:text-gold-200 hover:underline"
              >
                {company.email}
              </a>
              <address className="mt-5 text-[0.9rem] leading-relaxed text-mist-400 not-italic">
                {company.name}
                <br />
                {company.address.line1}
                <br />
                {company.address.line2}
              </address>
            </div>
          </aside>

          <div>
            <ProjectForm />
          </div>
        </div>
      </Section>

      <Container className="pb-20">
        <div className="rule-gold h-px w-full opacity-40" aria-hidden="true" />
      </Container>
    </>
  );
}
