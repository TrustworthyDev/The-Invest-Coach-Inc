# Static assets

## Drop the logo here

Save the gold roofline artwork in this folder as **`logo.png`** (transparent
background, roughly 2.4:1, at least 800px wide). `logo.svg` and `logo.webp` also
work and take priority in that order.

That is the only step — the header and footer detect the file at build time and
use it automatically. No configuration, no code change.

Until a file is present, the site renders a vector build of the same mark from
`src/components/Logo.tsx`, so nothing ever appears broken.

To serve the logo from somewhere else (a CDN, for example), set
`NEXT_PUBLIC_LOGO_SRC` in `.env.local` instead — it overrides this lookup.

## Other assets to add

- `og-image.jpg` (1200x630) for link previews
- `favicon.ico`, `apple-touch-icon.png`
- Section imagery from the draft pages (AI Automation, Business Consulting,
  Websites, Content Creation, Lead Generation)
