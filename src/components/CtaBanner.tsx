import { ArrowIcon, ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";

export default function CtaBanner({
  title = "Ready to Outperform Your Competition?",
  body = "In just 30 minutes, we'll help identify opportunities to grow your business, improve your online presence, and develop a strategy tailored to your goals.",
  cta = "Schedule Your Free Strategy Session",
  href = "/start-a-project",
}: {
  title?: string;
  body?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="relative py-14 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-gold-400/35 bg-[linear-gradient(120deg,rgba(133,91,18,0.35)_0%,rgba(227,178,60,0.16)_45%,rgba(11,13,19,0.9)_100%)] px-6 py-12 text-center shadow-[0_30px_80px_-40px_rgba(227,178,60,0.6)] sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(251,236,196,0.16),transparent_70%)]"
          />
          <div className="relative">
            <h2 className="font-display text-2xl leading-tight font-bold text-balance sm:text-4xl">
              <span className="text-gold-gradient">{title}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-pretty text-mist-200 sm:text-lg">
              {body}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <ButtonLink href={href} size="lg" className="group w-full sm:w-auto">
                {cta}
                <ArrowIcon />
              </ButtonLink>
              <ButtonLink
                href="/process"
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
              >
                See How It Works
              </ButtonLink>
            </div>
            <p className="mt-6 text-[0.8rem] tracking-[0.18em] text-mist-400 uppercase">
              Complimentary &middot; No obligation &middot; 30 minutes
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
