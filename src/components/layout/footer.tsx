import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-border bg-secondary/40 border-t">
      <Container className="flex flex-col items-center justify-between gap-4 py-10 sm:flex-row">
        <div className="flex items-center gap-2 text-sm">
          <span className="bg-primary text-primary-foreground grid h-7 w-7 place-items-center rounded-md text-xs font-bold">
            K
          </span>
          <span className="text-foreground font-medium">
            {siteConfig.legalName}
          </span>
        </div>

        <p className="text-muted-foreground text-sm">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>

        <a
          href={`mailto:${siteConfig.email}`}
          className="text-muted-foreground hover:text-foreground text-sm transition-colors"
        >
          {siteConfig.email}
        </a>
      </Container>
    </footer>
  );
}
