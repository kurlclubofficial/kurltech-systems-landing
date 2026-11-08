# KurlTech Systems — Landing Page

Marketing landing page for **KurlTech Systems Private Limited**.

Built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS v4**, with a
CSS-variable design-token system supporting light and dark themes.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Enquiry email

The enquiry form sends submissions through Resend. Copy `.env.example` to
`.env.local`, then set `RESEND_API_KEY` from your Resend account and
`RESEND_FROM_EMAIL` to an address on a domain verified with Resend.
`ENQUIRY_TO_EMAIL` is the inbox that receives enquiries. Resend's
`onboarding@resend.dev` sender is for limited testing; production email
requires a verified sending domain. Keep the API key private and configure
these environment variables in your deployment settings as well as locally.

Set `SITE_URL` to the canonical HTTPS origin of the production site (for
example, `https://your-domain.com`) in the deployment environment at build
time. It is used for canonical metadata, structured data, `sitemap.xml`, and
`robots.txt`. Without it, the site deliberately disallows search indexing
until the production domain is configured.

## Scripts

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Start the dev server       |
| `npm run build` | Production build           |
| `npm run start` | Serve the production build |
| `npm run lint`  | Run ESLint                 |

## Folder structure

```
src/
├── app/                    # App Router entrypoints
│   ├── globals.css         # Tailwind import + theme tokens (light/dark)
│   ├── layout.tsx          # Root layout + ThemeProvider + metadata
│   └── page.tsx            # Landing page composition
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Hero, Services, WhyUs, Cta
│   ├── theme/              # ThemeProvider, ThemeToggle
│   └── ui/                 # Button, Container, SectionHeading (reusable)
├── config/
│   └── site.ts             # Site name, nav, contact metadata
└── lib/
    ├── constants.ts        # Services & stats data
    └── utils.ts            # cn() class-name helper
```

## Theming

The site uses a single **light** theme (white background, `#051316` text,
`#ec2e3a` red accent). Design tokens are declared as CSS variables in
[`src/app/globals.css`](src/app/globals.css):

- `:root` holds the theme values.
- `@theme inline { ... }` exposes each token to Tailwind utilities
  (`bg-primary`, `text-muted-foreground`, `border-border`, …).

To rebrand, edit the variable values — no component changes required.
