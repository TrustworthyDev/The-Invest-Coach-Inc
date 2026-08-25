import Link from "next/link";
import Logo from "@/components/Logo";
import { Container, GoldRule } from "@/components/ui/Section";
import { company, pillars } from "@/data/site";

const companyLinks = [
  { label: "Our Mission", href: "/mission" },
  { label: "Our Story", href: "/our-story" },
  { label: "Our Process", href: "/process" },
  { label: "Results", href: "/results" },
  { label: "FAQ", href: "/faq" },
  { label: "Start a Project", href: "/start-a-project" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 mt-auto border-t border-gold-400/15 bg-ink-950/70 backdrop-blur-md">
      <Container className="py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-10">
          <div>
            <Link href="/" aria-label={`${company.name} — home`} className="inline-block">
              <Logo withTagline />
            </Link>
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-mist-400">
              Helping businesses grow faster, work smarter, and increase revenue — through
              consulting, websites, AI automation, expert content, and lead generation.
            </p>
            <address className="mt-6 text-[0.95rem] leading-relaxed text-mist-400 not-italic">
              <span className="block font-semibold text-mist-300">{company.name}</span>
              {company.address.line1}
              <br />
              {company.address.line2}
              <br />
              <a
                href={`mailto:${company.email}`}
                className="mt-2 inline-block text-gold-300 underline-offset-4 hover:underline"
              >
                {company.email}
              </a>
            </address>
          </div>

          <nav aria-label="Services">
            <h2 className="text-xs font-bold tracking-[0.28em] text-gold-300 uppercase">
              The 5 Pillars
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {pillars.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/services/${p.slug}`}
                    className="text-[0.95rem] font-semibold text-mist-300 transition-colors hover:text-gold-200"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="text-xs font-bold tracking-[0.28em] text-gold-300 uppercase">Company</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[0.95rem] font-semibold text-mist-300 transition-colors hover:text-gold-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <GoldRule className="mt-14 opacity-50" />

        <div className="mt-6 flex flex-col gap-3 text-[0.8rem] text-mist-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="tracking-[0.22em] uppercase">{company.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
