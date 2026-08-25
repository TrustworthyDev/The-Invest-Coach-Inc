import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui/Section";

export default function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden pt-16 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
      <Container>
        <div className="max-w-4xl">
          {eyebrow && <Eyebrow className="animate-rise">{eyebrow}</Eyebrow>}
          <h1 className="font-display animate-rise mt-6 text-[2.1rem] leading-[1.1] font-bold text-balance sm:text-5xl lg:text-[3.5rem]">
            <span className="text-gold-gradient">{title}</span>
          </h1>
          {lead && (
            <p className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-pretty text-mist-300 sm:text-lg lg:text-xl">
              {lead}
            </p>
          )}
          {children && <div className="animate-rise mt-9">{children}</div>}
        </div>
      </Container>
    </div>
  );
}
