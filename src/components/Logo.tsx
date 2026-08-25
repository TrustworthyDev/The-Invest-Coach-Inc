import Image from "next/image";
import { company } from "@/data/site";

/**
 * Brand mark — the gold roofline.
 *
 * Renders a vector build of the mark by default so the lockup stays crisp at any
 * size. If the supplied raster artwork is present at `public/logo.png` (or .svg /
 * .webp) it is used instead — see `src/lib/logo.ts`, which detects the file and
 * passes it down through the layout.
 */

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 199 83"
      role="img"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <defs>
        {/* Front faces: light falls from the upper left, deepening down-right. */}
        <linearGradient id="tic-face" x1="0.1" y1="0" x2="0.75" y2="1">
          <stop offset="0%" stopColor="#fff4cd" />
          <stop offset="16%" stopColor="#f2cd64" />
          <stop offset="46%" stopColor="#d9a520" />
          <stop offset="74%" stopColor="#bd8712" />
          <stop offset="100%" stopColor="#e0b13b" />
        </linearGradient>
        {/* Receding plane sits a shade deeper so the valley between roofs reads. */}
        <linearGradient id="tic-face-back" x1="0.15" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#f0cd7a" />
          <stop offset="40%" stopColor="#c28d16" />
          <stop offset="100%" stopColor="#8f620f" />
        </linearGradient>
        <linearGradient id="tic-sweep" x1="0" y1="0" x2="1" y2="0.35">
          <stop offset="0%" stopColor="#a9760f" />
          <stop offset="20%" stopColor="#f2d178" />
          <stop offset="46%" stopColor="#fff6d5" />
          <stop offset="72%" stopColor="#e0af33" />
          <stop offset="100%" stopColor="#8a5f10" />
        </linearGradient>
      </defs>

      {/* Painted back to front so the roofs overlap the way the artwork does. */}
      {/* Right roof plane */}
      <path d="M127 24 L170 66 L156 66 L113 36 Z" fill="url(#tic-face-back)" />
      {/* Chimney, seated on the right plane */}
      <path d="M133 12 L144 12 L144 41 L133 30 Z" fill="url(#tic-face)" />
      {/* Centre roof plane */}
      <path d="M96 13 L131 66 L119 66 L84 28 Z" fill="url(#tic-face)" />
      {/* Left gable — hollow chevron */}
      <path d="M18 68 L65 17 L112 68 L98 68 L65 31 L32 68 Z" fill="url(#tic-face)" />
      {/* Four-pane window */}
      <g fill="url(#tic-face)">
        <rect x="55" y="42" width="8" height="8" rx="1.2" />
        <rect x="65.5" y="42" width="8" height="8" rx="1.2" />
        <rect x="55" y="52.5" width="8" height="8" rx="1.2" />
        <rect x="65.5" y="52.5" width="8" height="8" rx="1.2" />
      </g>
      {/* Sweeping baseline, crossing in front of the roof feet */}
      <path
        d="M2 77 C60 68, 130 64.5, 197 70 C130 68.5, 60 73.5, 2 83 Z"
        fill="url(#tic-sweep)"
      />
    </svg>
  );
}

type LogoProps = {
  /** `lockup` = mark + wordmark (header). `mark` = symbol only. */
  variant?: "lockup" | "mark";
  /** Show the "Strategy. Innovation. Growth." line under the wordmark. */
  withTagline?: boolean;
  /** Path to raster artwork in /public. Falls back to the vector mark when absent. */
  src?: string | null;
  className?: string;
};

export default function Logo({
  variant = "lockup",
  withTagline = false,
  src = null,
  className = "",
}: LogoProps) {
  const mark = src ? (
    <Image
      src={src}
      alt=""
      width={398}
      height={166}
      priority
      sizes="(max-width: 640px) 90px, 130px"
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
      <span className="h-8 shrink-0 sm:h-10 lg:h-11">{mark}</span>
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
