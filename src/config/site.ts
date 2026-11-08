export const siteConfig = {
  name: "KurlTech Systems",
  legalName: "KurlTech Systems Private Limited",
  tagline: "Design. Build. Launch. Grow.",
  description:
    "KurlTech Systems Private Limited is a full-service digital studio. We design, build, back and host websites and mobile apps — and handle SEO, QA, content, social and WhatsApp automation to help them grow. We also build our own products like KurlClub.",
  url: "https://kurltech.systems",
  email: "kurltech.systems@gmail.com",
  nav: [
    { label: "What we do", href: "#process" },
    { label: "KurlClub", href: "#product" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
