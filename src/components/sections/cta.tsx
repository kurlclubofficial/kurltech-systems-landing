import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/config/site";

export function Cta() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <Reveal className="border-border bg-card relative overflow-hidden rounded-2xl border px-8 py-14 sm:px-14">
          <div
            aria-hidden
            className="bg-primary/15 pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl"
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="text-foreground max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
                Have a website in mind? Let&apos;s build it together.
              </h2>
              <p className="text-muted-foreground mt-4 max-w-lg text-base">
                Tell us what you need — design, development, backend, hosting,
                or all of it. We reply within one business day.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <a
                href={`mailto:${siteConfig.email}`}
                className={buttonVariants({ size: "lg" })}
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
              <a
                href="#process"
                className={buttonVariants({ variant: "ghost", size: "lg" })}
              >
                See how we work
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
