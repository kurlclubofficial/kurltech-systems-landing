import type { Metadata } from "next";
import { Space_Grotesk, Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SiteShell } from "./site-shell";
import { cn } from "@/lib/utils";
import { getSiteUrl } from "@/lib/site-url";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

// Tertiary typeface — opt in with the `font-space-grotesk` utility.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk-variable",
  display: "swap",
});

// Primary typeface — used across the whole site.
const plusJakartaSans = localFont({
  src: [
    {
      path: "../../public/Fonts/Plus-Jakarta-Sans/PlusJakartaSans-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/Fonts/Plus-Jakarta-Sans/PlusJakartaSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/Fonts/Plus-Jakarta-Sans/PlusJakartaSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Fonts/Plus-Jakarta-Sans/PlusJakartaSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/Fonts/Plus-Jakarta-Sans/PlusJakartaSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/Fonts/Plus-Jakarta-Sans/PlusJakartaSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/Fonts/Plus-Jakarta-Sans/PlusJakartaSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/Fonts/Plus-Jakarta-Sans/PlusJakartaSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-jakarta-sans",
  display: "swap",
});

// Secondary typeface — opt in with the `font-clash` utility.
const clashGrotesk = localFont({
  src: [
    {
      path: "../../public/Fonts/ClashGrotesk/ClashGrotesk-Extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/Fonts/ClashGrotesk/ClashGrotesk-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/Fonts/ClashGrotesk/ClashGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Fonts/ClashGrotesk/ClashGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/Fonts/ClashGrotesk/ClashGrotesk-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/Fonts/ClashGrotesk/ClashGrotesk-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash-grotesk",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "KurlTech Systems",
  description:
    "KurlTech Systems builds custom internal tools that simplify operations, connect workflows, and help teams work smarter.",
  openGraph: {
    type: "website",
    siteName: "KurlTech Systems",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        "scroll-smooth",
        "motion-reduce:scroll-auto",
        plusJakartaSans.variable,
        clashGrotesk.variable,
        spaceGrotesk.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "KurlTech Systems",
              legalName: "KurlTech Systems Private Limited",
              email: "kurltech.systems@gmail.com",
              telephone: "+917994990130",
              ...(siteUrl ? { url: siteUrl.toString() } : {}),
            }),
          }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
