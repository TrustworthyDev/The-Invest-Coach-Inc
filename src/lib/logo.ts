import "server-only";

import { existsSync } from "node:fs";
import path from "node:path";

/** Filenames checked in /public, in priority order. */
const CANDIDATES = ["logo.svg", "logo.png", "logo.webp"] as const;

/**
 * Resolves the brand mark to render.
 *
 * Drop the supplied artwork at `public/logo.png` and it is picked up
 * automatically — no configuration. `NEXT_PUBLIC_LOGO_SRC` overrides the lookup
 * when the asset lives elsewhere (a CDN, for instance). Returns `null` when no
 * raster is available, which makes `<Logo>` fall back to the vector mark.
 */
export function resolveLogoSrc(): string | null {
  const override = process.env.NEXT_PUBLIC_LOGO_SRC;
  if (override) return override;

  const publicDir = path.join(process.cwd(), "public");
  for (const file of CANDIDATES) {
    if (existsSync(path.join(publicDir, file))) return `/${file}`;
  }
  return null;
}
