import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import PillarCard from "@/components/PillarCard";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/Testimonials";
import { ArrowIcon, ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { Container, Eyebrow, GoldRule, Section, SectionHeading } from "@/components/ui/Section";
import { company, mission, pillars } from "@/data/site";

const heroStats = [
  { value: "35+", label: "Years of business experience" },
  { value: "5", label: "Pillars under one roof" },
  { value: "1", label: "Integrated growth system" },
];

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
        <Container>
          <div className="max-w-4xl">
            <Eyebrow className="animate-rise">{company.tagline}</Eyebrow>

            <h1 className="font-display animate-rise mt-6 text-[2.15rem] leading-[1.08] font-bold text-balance sm:text-[3.2rem] lg:text-[4rem]">
              <span className="text-gold-gradient">Helping Businesses Grow Faster,</span>
              <br className="hidden sm:block" />{" "}
              <span className="text-gold-gradient">Work Smarter, and Increase Revenue</span>
            </h1>

            <p
              className="animate-rise mt-7 max-w-2xl text-base leading-relaxed text-pretty text-mist-300 sm:text-lg lg:text-xl"
              style={{ animationDelay: "90ms" }}
            >
              The Invest Coach helps businesses grow faster, work smarter, and increase
              productivity — through AI automation, business consulting, website development,
              expert content creation, and lead generation.
            </p>

            <div
              className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
              style={{ animationDelay: "180ms" }}
            >
              <ButtonLink href="/start-a-project" size="lg" className="group w-full sm:w-auto">
                Start a Project
                <ArrowIcon />
              </ButtonLink>
              <ButtonLink href="/services" size="lg" variant="outline" className="w-full sm:w-auto">
                Explore the 5 Pillars
              </ButtonLink>
            </div>
          </div>

          <dl
            className="animate-rise mt-16 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-gold-400/20 bg-gold-400/15 sm:grid-cols-3"
            style={{ animationDelay: "260ms" }}
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="bg-ink-950/80 px-6 py-6 text-center sm:py-7">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="text-gold-gradient font-display block text-3xl font-bold sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-[0.8rem] leading-snug tracking-wide text-mist-400">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ------------------------------------------------------- AI positioning */}
      <Section className="border-y border-gold-400/12 bg-ink-950/45">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>The shift is already here</Eyebrow>
            <h2 className="font-display mt-6 text-3xl leading-[1.12] font-bold text-balance sm:text-4xl lg:text-[3rem]">
              <span className="text-gold-gradient">AI Has Changed Every Industry Worldwide</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-pretty text-mist-300 sm:text-lg">
              Businesses that fail to adopt Artificial Intelligence alongside human ingenuity will
              soon lose their competitive edge.
            </p>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-mist-400">
              We help you adopt it the practical way — automations that remove busywork, systems
              that follow up without being asked, and a strategy that keeps your team focused on
              the work only people can do.
            </p>
            <ButtonLink
              href="/services/ai-automation"
              variant="outline"
              size="md"
              className="group mt-9"
            >
              See AI Automation
              <ArrowIcon />
            </ButtonLink>
          </Reveal>

          <Reveal delay={140}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Put busywork on autopilot",
                  body: "Repetitive tasks handled by workflows that run whether or not anyone remembers.",
                },
                {
                  title: "Answer leads instantly",
                  body: "AI assistants respond around the clock and hand your team qualified conversations.",
                },
                {
                  title: "One connected system",
                  body: "CRM, email, content, and your website working together instead of in silos.",
                },
                {
                  title: "Measurable results",
                  body: "Every automation is tied to time saved, cost reduced, or revenue gained.",
                },
              ].map((item) => (
                <li key={item.title} className="panel rounded-2xl p-6">
                  <h3 className="text-[1rem] font-bold text-gold-100">{item.title}</h3>
                  <p className="mt-2.5 text-[0.9rem] leading-relaxed text-mist-400">{item.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* -------------------------------------------------------- The 5 pillars */}
      <Section id="pillars">
        <SectionHeading
          eyebrow="The 5 Pillars"
          title="Everything Your Growth Needs, Under One Roof"
          lead="Five services built to work as one system. Start with the pillar you need most — or combine them into a complete growth engine."
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal as="li" key={pillar.slug} delay={i * 90} className="h-full">
              <PillarCard pillar={pillar} />
            </Reveal>
          ))}

          <Reveal as="li" delay={pillars.length * 90} className="h-full">
            <Link
              href="/services"
              className="group flex h-full flex-col justify-between rounded-2xl border border-dashed border-gold-400/35 bg-gold-400/5 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-300/60 hover:bg-gold-400/10"
            >
              <div>
                <h3 className="font-display text-xl font-bold text-gold-100">
                  Not sure where to start?
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-mist-400">
                  Compare all five pillars side by side and see which combination fits your goals.
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-[0.85rem] font-bold text-gold-300">
                Compare all services
                <ArrowIcon />
              </span>
            </Link>
          </Reveal>
        </ul>
      </Section>

      {/* ------------------------------------------------------------- Process */}
      <Section className="border-y border-gold-400/12 bg-ink-950/45">
        <SectionHeading
          eyebrow="Our Process"
          title="A Proven Framework for Building Smarter, Stronger & More Profitable Businesses"
          lead="Every successful project begins with understanding your business, your goals, and your vision — which is why we don't believe in one-size-fits-all solutions."
        />
        <div className="mt-16">
          <ProcessSteps />
        </div>
        <div className="mt-12 flex justify-center">
          <ButtonLink href="/process" variant="outline" size="md" className="group">
            See the full process
            <ArrowIcon />
          </ButtonLink>
        </div>
      </Section>

      {/* ---------------------------------------------------------- Mission cut */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Our Mission</Eyebrow>
            <h2 className="font-display mt-6 text-3xl leading-[1.15] font-bold text-balance sm:text-4xl">
              {mission.headline}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-mist-300">{mission.body[0]}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/mission" variant="outline" size="md">
                Read Our Mission
              </ButtonLink>
              <ButtonLink href="/our-story" variant="ghost" size="md" className="group">
                Our Story
                <ArrowIcon />
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <ul className="flex flex-col gap-4">
              {mission.principles.map((p) => (
                <li key={p.title} className="panel rounded-2xl p-6 sm:p-7">
                  <h3 className="font-display text-lg font-bold text-gold-100">{p.title}</h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-mist-400">{p.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* --------------------------------------------------------- Testimonials */}
      <Section className="border-t border-gold-400/12 bg-ink-950/45">
        <SectionHeading
          eyebrow="Results"
          title="What Working Together Looks Like"
          lead="Real outcomes from owners who wanted a system, not a stack of disconnected tactics."
        />
        <div className="mt-14">
          <Testimonials />
        </div>
        <GoldRule className="mt-16 opacity-40" />
      </Section>

      <CtaBanner />
    </>
  );
}
