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

## The logo

**Save the gold roofline artwork as `public/logo.png` — that's the only step.**
[`src/lib/logo.ts`](src/lib/logo.ts) detects it at build time and the header and footer switch
to it automatically. `logo.svg` and `logo.webp` also work, in that priority order.

Until a file is there, [`Logo.tsx`](src/components/Logo.tsx) renders a vector build of the same
mark — hollow left gable, two overlapping roof planes, chimney, four-pane window, and the
sweeping gold baseline — so nothing ever ships broken and the lockup stays crisp at any size.

Either way the company name sits beside the mark in the logo's gold, per the draft note.
To serve the file from a CDN instead, set `NEXT_PUBLIC_LOGO_SRC` in `.env.local`.

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
