import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { processSteps } from "@/lib/constants";

export function Process() {
  return (
    <section id="process" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Everything under one roof"
          title="From blank page to live website"
          description="No juggling agencies and freelancers. We own every stage of your website — and hand you a finished, running product."
        />

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map(({ step, icon: Icon, title, description }) => (
            <StaggerItem
              key={step}
              className="border-border bg-card hover:border-primary/40 relative h-full rounded-xl border p-6 transition-colors"
            >
              <span className="text-primary/70 text-sm font-bold tracking-widest">
                {step}
              </span>
              <div className="bg-primary/10 text-primary mt-3 inline-flex h-11 w-11 items-center justify-center rounded-lg">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-card-foreground mt-4 text-xl font-bold tracking-tight">
                {title}
              </h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
