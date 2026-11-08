import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { product } from "@/lib/constants";

export function ProductSpotlight() {
  return (
    <section id="product" className="bg-[#210d25] py-20 text-white sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        {/* Left — browser mock */}
        <Reveal x={-40} className="order-2 lg:order-1">
          <div className="bg-card overflow-hidden rounded-xl border border-white/10 shadow-lg">
            <div className="border-border bg-secondary flex items-center gap-1.5 border-b px-4 py-3">
              <span className="bg-accent/70 h-3 w-3 rounded-full" />
              <span className="bg-muted-foreground/30 h-3 w-3 rounded-full" />
              <span className="bg-muted-foreground/30 h-3 w-3 rounded-full" />
              <span className="bg-background text-muted-foreground ml-3 truncate rounded-md px-3 py-1 text-xs">
                {product.url.replace("https://", "")}
              </span>
            </div>
            <div className="space-y-4 p-6">
              <div className="flex items-center justify-between">
                <div className="bg-primary/20 h-6 w-24 rounded" />
                <div className="bg-muted h-6 w-16 rounded" />
              </div>
              <div className="from-primary/25 to-accent/15 h-28 rounded-lg bg-linear-to-br" />
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-muted h-16 rounded-lg" />
                <div className="bg-muted h-16 rounded-lg" />
                <div className="bg-muted h-16 rounded-lg" />
              </div>
              <div className="bg-muted h-3 w-3/4 rounded" />
              <div className="bg-muted h-3 w-1/2 rounded" />
            </div>
          </div>
        </Reveal>

        {/* Right — copy */}
        <Reveal x={40} delay={0.1} className="order-1 lg:order-2">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase">
            {product.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {product.name}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            {product.description}
          </p>

          <ul className="mt-6 space-y-3">
            {product.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="bg-primary/20 text-primary mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-sm text-white">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "outline",
                className:
                  "border-white/30 text-white hover:border-white/50 hover:bg-white/10 hover:text-white",
              })}
            >
              Visit {product.name}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
