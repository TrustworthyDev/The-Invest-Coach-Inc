# The Invest Coach, Inc. — Website

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4

Built from the rough-draft structure pages: gold-on-dark brand theme, the 5 Pillars,
the 4-step process, Mission, Our Story, FAQ, and a Start a Project booking flow.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run typecheck
```

## Routes

| Route | Page |
| --- | --- |
| `/` | Home — hero, AI positioning, 5 Pillars, process, mission, testimonials, CTA |
| `/services` | All 5 Pillars + comparison table |
| `/services/[slug]` | One page per pillar (5 static pages) |
| `/process` | 4-step framework, detailed |
| `/results` | Outcomes + testimonials |
| `/mission` | Our Mission |
| `/our-story` | Our Story |
| `/faq` | Accordion FAQ (+ FAQPage structured data) |
| `/start-a-project` | Booking / contact form |
| `/start-a-project/thank-you` | Confirmation (noindex) |
| `/api/contact` | Form handler (POST) |

`sitemap.xml`, `robots.txt`, and JSON-LD business data are generated automatically.

## Editing content

**All site copy lives in [`src/data/site.ts`](src/data/site.ts)** — pillars, process steps,
mission, story, FAQs, testimonials, nav, and contact details. Change wording there and every
page that uses it updates. No copy is hard-coded into layout components except section
headings unique to a single page.

## Swapping in the real logo

The header currently renders a vector recreation of the gold roofline mark so nothing ships
broken. To use the supplied artwork:

1. Drop the file at `public/logo.png` (transparent PNG or SVG, roughly 2:1).
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_LOGO_SRC=/logo.png
   ```

Layout, sizing, and the gold company name beside it stay the same.

## Wiring up the contact form

`POST /api/contact` validates the submission and currently logs it. To deliver it, set one
environment variable — no code change needed:

```
CONTACT_WEBHOOK_URL=https://hooks.zapier.com/...   # or Make, n8n, a CRM endpoint
```

For direct email instead, add a provider (Resend / SendGrid) inside
[`src/app/api/contact/route.ts`](src/app/api/contact/route.ts) where the `TODO` is marked.

Other environment variables:

```
NEXT_PUBLIC_SITE_URL=https://theinvestcoach.com    # used by metadata, sitemap, robots
```

## Brand system

Tokens are defined once in [`src/app/globals.css`](src/app/globals.css) under `@theme`:

- `gold-50…gold-800` — the metallic palette
- `ink-950…ink-600` — dark surfaces
- `mist-100…mist-500` — text tones
- Utilities: `text-gold-gradient`, `panel`, `panel-hover`, `rule-gold`, `prose-coach`, `section-y`

The full-page backdrop (dusk gradient, skyline, binary rain) is
[`src/components/BackgroundTheme.tsx`](src/components/BackgroundTheme.tsx). It is fixed behind
every page, pauses when the tab is hidden, thins out on small screens, and stops entirely for
visitors who prefer reduced motion.

## Accessibility & responsiveness

- Mobile-first; verified layouts from 320px through ultrawide
- Skip-to-content link, visible focus rings, `aria-current`, labelled form fields with inline errors
- FAQ uses native `<details>` — works with JavaScript disabled
- Full `prefers-reduced-motion` support across animations, reveals, and the background
- `100dvh` used for mobile drawer sizing so iOS browser chrome doesn't clip it
