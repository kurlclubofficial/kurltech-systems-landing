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
