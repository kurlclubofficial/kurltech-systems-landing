import {
  AppWindow,
  Bug,
  Cloud,
  Code2,
  FileText,
  Globe,
  LayoutGrid,
  Megaphone,
  MessagesSquare,
  PenLine,
  PenTool,
  Search,
  Server,
  ShoppingBag,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/* ---------------------------------------------------------------- */
/* Full-service process — the "everything under one roof" pipeline  */
/* ---------------------------------------------------------------- */
export interface ProcessStep {
  step: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    icon: PenTool,
    title: "Design",
    description:
      "UI/UX, branding and interactive prototypes shaped around your audience and goals.",
  },
  {
    step: "02",
    icon: Code2,
    title: "Development",
    description:
      "Responsive, accessible, pixel-perfect front-ends built with modern frameworks.",
  },
  {
    step: "03",
    icon: Server,
    title: "Backend",
    description:
      "APIs, databases, auth and integrations — the engine that powers your website.",
  },
  {
    step: "04",
    icon: Cloud,
    title: "Hosting",
    description:
      "Deployment, domains, SSL, monitoring and ongoing maintenance. We keep it live.",
  },
];

/* ---------------------------------------------------------------- */
/* Services — everything we take on, grouped by build vs. grow       */
/* ---------------------------------------------------------------- */
export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Short category label shown in the editorial card layout. */
  tag?: string;
}

export interface ServiceGroup {
  label: string;
  services: Service[];
  /** How the group's cards are rendered. */
  layout: "list" | "editorial";
}

export const serviceGroups: ServiceGroup[] = [
  {
    label: "Build & ship",
    layout: "list",
    services: [
      {
        icon: Globe,
        title: "Business Websites",
        description:
          "Marketing sites and company profiles that make the right first impression.",
      },
      {
        icon: AppWindow,
        title: "Web Applications",
        description:
          "Custom dashboards, portals and SaaS products built full-stack.",
      },
      {
        icon: Smartphone,
        title: "Mobile Apps",
        description:
          "Native Android and iOS — or cross-platform — apps, built and shipped to the stores.",
      },
      {
        icon: ShoppingBag,
        title: "E-commerce Stores",
        description:
          "Online stores with payments, inventory and a checkout that converts.",
      },
      {
        icon: LayoutGrid,
        title: "Landing Pages",
        description:
          "High-converting campaign and product pages, shipped fast.",
      },
      {
        icon: FileText,
        title: "CMS & Blogs",
        description:
          "Content-driven sites your team can update without touching code.",
      },
    ],
  },
  {
    label: "Grow & operate",
    layout: "editorial",
    services: [
      {
        icon: Search,
        tag: "Get Found",
        title: "SEO Essentials",
        description:
          "Practical on-page SEO, metadata and performance so people actually find you.",
      },
      {
        icon: Bug,
        tag: "Quality",
        title: "QA & Testing",
        description:
          "Manual and functional testing to catch issues before your users do.",
      },
      {
        icon: MessagesSquare,
        tag: "Automation",
        title: "WhatsApp Automation",
        description:
          "Automated WhatsApp flows for support, alerts, reminders and lead capture.",
      },
      {
        icon: PenLine,
        tag: "Content",
        title: "Content Writing",
        description:
          "Clear, on-brand copy for pages, blogs, product and campaigns.",
      },
      {
        icon: Megaphone,
        tag: "Social",
        title: "Social Media Handling",
        description:
          "Day-to-day social management — planning, posting and engagement.",
      },
      {
        icon: Wrench,
        tag: "Care",
        title: "Maintenance & Support",
        description:
          "Updates, fixes, backups and performance care after launch.",
      },
    ],
  },
];

/* ---------------------------------------------------------------- */
/* Flagship product                                                  */
/* ---------------------------------------------------------------- */
export const product = {
  name: "KurlClub",
  kicker: "Our flagship product",
  description:
    "KurlClub is our own platform — designed, developed, backed and hosted entirely in-house. It's living proof of what we deliver for clients: a polished product taken from first sketch all the way to production.",
  url: "https://kurlclub.com",
  highlights: [
    "Designed & built end-to-end by our team",
    "Full-stack architecture with a secure backend",
    "Cloud-hosted, monitored and scalable",
  ],
} as const;

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "1", label: "Roof for build, launch & growth" },
  { value: "100%", label: "Custom-built, no templates" },
  { value: "24/7", label: "Hosting & support" },
];
