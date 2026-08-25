import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`section-y relative ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-[0.7rem] font-bold tracking-[0.32em] text-gold-300 uppercase sm:text-xs ${className}`}
    >
      <span className="h-px w-8 bg-gold-400/70" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const alignment =
    align === "center" ? "mx-auto items-center text-center" : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display mt-5 text-3xl leading-[1.15] font-bold text-balance text-mist-100 sm:text-4xl lg:text-[2.85rem]">
        {title}
      </h2>
      {lead && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-pretty text-mist-300 sm:text-lg">
          {lead}
        </p>
      )}
    </div>
  );
}

export function GoldRule({ className = "" }: { className?: string }) {
  return <div className={`rule-gold h-px w-full ${className}`} aria-hidden="true" />;
}
