import Image from "next/image";
import { company } from "@/data/site";

/**
 * Brand mark.
 *
 * By default this renders a vector recreation of the gold roofline + whistle mark
 * so the site ships with no missing-asset placeholders. To use the real artwork,
 * drop the supplied PNG at `public/logo.png` and set NEXT_PUBLIC_LOGO_SRC=/logo.png
 * (or pass `src` directly) — everything else about the layout stays the same.
 */
const LOGO_SRC = process.env.NEXT_PUBLIC_LOGO_SRC;

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 128 74"
      role="img"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <defs>
        <linearGradient id="tic-gold" x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0%" stopColor="#fdf6e3" />
          <stop offset="22%" stopColor="#f0c96a" />
          <stop offset="52%" stopColor="#d19a1e" />
          <stop offset="78%" stopColor="#f7dc94" />
          <stop offset="100%" stopColor="#8a5f10" />
        </linearGradient>
        <linearGradient id="tic-gold-soft" x1="0" y1="0" x2="1" y2="0.6">
          <stop offset="0%" stopColor="#ad7a14" />
          <stop offset="45%" stopColor="#fbecc4" />
          <stop offset="100%" stopColor="#ad7a14" />
        </linearGradient>
      </defs>

      <g fill="url(#tic-gold)">
        {/* Rear gable + chimney */}
        <path d="M50 52 L86 8 L122 52 L109 52 L86 20.5 L63 52 Z" />
        <path d="M100 15 h10 v16 l-10 -12 Z" />
        {/* Front gable */}
        <path d="M6 52 L38 14 L70 52 L57.5 52 L38 27 L18.5 52 Z" />
        {/* Window */}
        <path d="M26 34 h7 v7 h-7 Z M36 34 h7 v7 h-7 Z M26 44 h7 v7 h-7 Z M36 44 h7 v7 h-7 Z" />
      </g>

      {/* Sweeping baseline */}
      <path
        d="M2 62 Q64 48 126 58 L126 63.5 Q64 53.5 2 67.5 Z"
        fill="url(#tic-gold-soft)"
      />
    </svg>
  );
}

type LogoProps = {
  /** `lockup` = mark + wordmark (header). `mark` = symbol only. */
  variant?: "lockup" | "mark";
  /** Show the "Strategy. Innovation. Growth." line under the wordmark. */
  withTagline?: boolean;
  className?: string;
};

export default function Logo({
  variant = "lockup",
  withTagline = false,
  className = "",
}: LogoProps) {
  const mark = LOGO_SRC ? (
    <Image
      src={LOGO_SRC}
      alt=""
      width={128}
      height={74}
      priority
      className="h-full w-auto object-contain"
    />
  ) : (
    <LogoMark className="h-full w-auto" />
  );

  if (variant === "mark") {
    return (
      <span className={`block ${className}`}>
        {mark}
        <span className="sr-only">{company.name}</span>
      </span>
    );
  }

  return (
    <span className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <span className="h-9 shrink-0 sm:h-11 lg:h-12">{mark}</span>
      <span className="flex min-w-0 flex-col leading-none">
        {/* Company name sits directly after the mark, in the logo's gold. */}
        <span className="text-gold-gradient font-display text-[0.95rem] font-bold tracking-[0.02em] whitespace-nowrap sm:text-lg lg:text-xl">
          {company.name}
        </span>
        {withTagline && (
          <span className="mt-1 text-[0.55rem] font-semibold tracking-[0.34em] text-mist-400 uppercase sm:text-[0.6rem]">
            {company.tagline}
          </span>
        )}
      </span>
    </span>
  );
}
