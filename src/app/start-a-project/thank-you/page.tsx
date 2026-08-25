import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { company, pillars } from "@/data/site";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your request has been received. We'll be in touch within one business day.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <span className="flex h-20 w-20 items-center justify-center rounded-full border border-gold-400/40 bg-gold-400/10 text-gold-200">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-9 w-9">
          <path
            d="m5 12.5 4.5 4.5L19 7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <h1 className="font-display mt-9 text-3xl leading-tight font-bold text-balance sm:text-5xl">
        <span className="text-gold-gradient">Thank You — We&apos;ve Got It</span>
      </h1>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-mist-300 sm:text-lg">
        Your request is on its way to our team. We reply within one business day to schedule your
        complimentary 30-minute strategy session.
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
        <ButtonLink href="/" size="lg" className="group w-full sm:w-auto">
          Back to Home
          <ArrowIcon />
        </ButtonLink>
        <ButtonLink href="/our-story" size="lg" variant="outline" className="w-full sm:w-auto">
          Read Our Story
        </ButtonLink>
      </div>

      <div className="mt-16 w-full max-w-3xl">
        <p className="text-[0.75rem] font-bold tracking-[0.3em] text-gold-300 uppercase">
          While you wait
        </p>
        <ul className="mt-6 flex flex-wrap justify-center gap-2.5">
          {pillars.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/services/${p.slug}`}
                className="inline-block rounded-full border border-gold-400/25 px-4 py-2 text-[0.85rem] font-semibold text-mist-300 transition-colors hover:border-gold-400/55 hover:text-gold-200"
              >
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-14 text-[0.85rem] text-mist-500">
        Need us sooner?{" "}
        <a
          href={`mailto:${company.email}`}
          className="font-semibold text-gold-300 underline-offset-4 hover:underline"
        >
          {company.email}
        </a>
      </p>
    </Container>
  );
}
