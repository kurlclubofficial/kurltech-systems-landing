"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "What we build", href: "#what-we-build" },
  { label: "How we work", href: "#how-we-work" },
  { label: "Our work", href: "#our-work" },
  { label: "Consultation", href: "#consultation" },
  { label: "Enquire", href: "/enquiry" },
];

const linkClasses =
  "inline-flex items-center gap-1 text-[14px] font-medium text-white transition-colors hover:text-white/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/60";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const updateScrolledState = () => setIsScrolled(window.scrollY > 16);

    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolledState);
  }, []);

  React.useEffect(() => {
    const desktopNavigation = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    desktopNavigation.addEventListener("change", closeOnDesktop);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      desktopNavigation.removeEventListener("change", closeOnDesktop);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        pathname === "/privacy-policy" || isScrolled || open
          ? "bg-[#0A161A]/95 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <ScrollProgress />

      <nav
        aria-label="Main"
        className="mx-auto flex h-20 max-w-360 items-center justify-between px-6 lg:px-12"
      >
        <Link
          href="/"
          className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/60"
        >
          <Image
            src="/images/svg/logo.svg"
            alt="Kurltech Systems"
            width={226}
            height={57}
            priority
            unoptimized
            className="h-13 w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-5 md:flex xl:gap-10">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={
                  item.href.startsWith("#") && pathname !== "/"
                    ? `/${item.href}`
                    : item.href
                }
                className={linkClasses}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="cursor-pointer text-white/85 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/60 md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={cn("md:hidden", open ? "block" : "hidden")}
      >
        <ul className="border-accent/12 flex flex-col gap-1 border-t px-6 pt-2 pb-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={
                  item.href.startsWith("#") && pathname !== "/"
                    ? `/${item.href}`
                    : item.href
                }
                onClick={() => setOpen(false)}
                className={cn(linkClasses, "w-full py-3")}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
