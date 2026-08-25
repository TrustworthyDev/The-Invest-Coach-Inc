import Link from "next/link";
import { ArrowIcon, ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { navigation } from "@/data/site";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <span className="text-gold-gradient font-display text-6xl font-bold sm:text-8xl">404</span>
      <h1 className="font-display mt-6 text-2xl font-bold text-balance text-mist-100 sm:text-4xl">
        That page moved, or never existed
      </h1>
      <p className="mt-5 max-w-lg text-base leading-relaxed text-mist-400">
        Let&apos;s get you back to something useful.
      </p>

      <ButtonLink href="/" size="lg" className="group mt-9">
        Back to Home
        <ArrowIcon />
      </ButtonLink>

      <ul className="mt-14 flex flex-wrap justify-center gap-2.5">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="inline-block rounded-full border border-gold-400/25 px-4 py-2 text-[0.85rem] font-semibold text-mist-300 transition-colors hover:border-gold-400/55 hover:text-gold-200"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
