"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "@/components/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { navigation } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Route change closes anything left open.
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  // Lock body scroll behind the mobile drawer.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMobileOpen(false);
      setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 140);
  };
  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled || mobileOpen
          ? "border-b border-gold-400/20 bg-ink-950/88 shadow-[0_10px_40px_-24px_rgba(0,0,0,0.95)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[var(--header-h)] w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        {/* Mark + company name, pinned top-left */}
        <Link href="/" aria-label={`${"The Invest Coach, Inc."} — home`} className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
          {navigation.map((item) => {
            const active = isActive(item.href);

            if (!item.children) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-3.5 py-2 text-[0.95rem] font-bold tracking-wide transition-colors duration-200 ${
                    active ? "text-gold-200" : "text-mist-100 hover:text-gold-200"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            const open = openMenu === item.label;
            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => {
                  cancelClose();
                  setOpenMenu(item.label);
                }}
                onMouseLeave={scheduleClose}
                onFocus={() => setOpenMenu(item.label)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenMenu(null);
                }}
              >
                <Link
                  href={item.href}
                  aria-expanded={open}
                  aria-haspopup="true"
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[0.95rem] font-bold tracking-wide transition-colors duration-200 ${
                    active || open ? "text-gold-200" : "text-mist-100 hover:text-gold-200"
                  }`}
                >
                  {item.label}
                  <svg
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                    className={`h-3 w-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                  >
                    <path
                      d="M2.5 4.5 6 8l3.5-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                <div
                  className={`absolute top-full left-1/2 w-[22rem] -translate-x-1/2 pt-3 transition-all duration-200 ${
                    open
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0"
                  }`}
                >
                  <ul className="panel overflow-hidden rounded-2xl p-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="group flex flex-col gap-0.5 rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-gold-400/10"
                        >
                          <span className="text-[0.95rem] font-bold text-mist-100 transition-colors group-hover:text-gold-200">
                            {child.label}
                          </span>
                          {child.blurb && (
                            <span className="text-[0.8rem] leading-snug text-mist-400">
                              {child.blurb}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ButtonLink href="/start-a-project" size="sm" className="hidden sm:inline-flex">
            Start a Project
          </ButtonLink>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/35 text-gold-200 transition-colors hover:bg-gold-400/10 xl:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded bg-current transition-transform duration-300 ${
                  mobileOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute top-1/2 left-0 block h-0.5 w-5 -translate-y-1/2 rounded bg-current transition-opacity duration-200 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded bg-current transition-transform duration-300 ${
                  mobileOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-gold-400/15 bg-ink-950/97 backdrop-blur-xl transition-[max-height,opacity] duration-400 xl:hidden ${
          mobileOpen ? "max-h-[calc(100dvh-var(--header-h))] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile"
          className="max-h-[calc(100dvh-var(--header-h))] overflow-y-auto overscroll-contain px-5 pt-4 pb-10 sm:px-8"
        >
          <ul className="flex flex-col gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-xl px-3 py-3 text-lg font-bold transition-colors ${
                    isActive(item.href) ? "text-gold-200" : "text-mist-100 hover:text-gold-200"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-1 mb-2 ml-3 flex flex-col gap-0.5 border-l border-gold-400/25 pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-lg px-2 py-2.5 text-[0.95rem] font-semibold text-mist-300 transition-colors hover:text-gold-200"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <ButtonLink href="/start-a-project" size="lg" className="mt-6 w-full">
            Start a Project
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
