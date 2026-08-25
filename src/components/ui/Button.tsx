import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "gold" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold-300 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  gold:
    "bg-[linear-gradient(100deg,#8a5f10_0%,#e3b23c_28%,#fbecc4_50%,#e3b23c_72%,#8a5f10_100%)] bg-[length:200%_auto] text-ink-950 shadow-[0_14px_40px_-16px_rgba(227,178,60,0.75)] hover:bg-[position:100%_center] hover:shadow-[0_18px_50px_-14px_rgba(227,178,60,0.9)] active:scale-[0.98]",
  outline:
    "border border-gold-400/45 text-gold-100 hover:border-gold-300 hover:bg-gold-400/10 active:scale-[0.98]",
  ghost: "text-mist-300 hover:text-gold-200",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[0.8rem]",
  md: "px-6 py-3 text-[0.9rem]",
  lg: "px-7 py-3.5 text-[0.95rem] sm:px-9 sm:py-4 sm:text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({
  href,
  variant = "gold",
  size = "md",
  className = "",
  children,
  ...rest
}: CommonProps & { href: string } & Omit<ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function Button({
  variant = "gold",
  size = "md",
  className = "",
  children,
  ...rest
}: CommonProps & ComponentProps<"button">) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${className}`}
    >
      <path
        d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
