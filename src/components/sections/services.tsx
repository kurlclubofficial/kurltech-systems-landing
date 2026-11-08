import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { serviceGroups } from "@/lib/constants";

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="What we do"
          title="Everything to launch and grow"
          description="Websites and apps built end-to-end — plus the SEO, QA, content and social work that keeps them growing after launch."
          className="max-w-2xl"
        />

        <div className="mt-14 space-y-14">
          {serviceGroups.map((group) => (
            <div key={group.label}>
              <div className="flex items-center gap-4">
                <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                  {group.label}
                </span>
                <span className="bg-border h-px flex-1" />
              </div>

              {group.layout === "editorial" ? (
                /* Editorial cards — label · title · description · red arrow */
                <StaggerGroup className="mt-6 flex flex-col gap-2">
                  {group.services.map((service) => (
                    <StaggerItem
                      key={service.title}
                      className="group relative grid grid-cols-1 items-start gap-3 rounded-2xl py-10 pr-16 pl-6 transition-all duration-300 ease-out hover:bg-[#fff4f6] hover:py-16 sm:pl-8 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.6fr)_minmax(0,1.5fr)] md:items-center md:gap-8"
                    >
                      <span className="text-foreground group-hover:text-primary text-sm font-bold transition-colors">
                        {service.tag}
                      </span>

                      <h3 className="text-foreground group-hover:text-primary text-2xl font-bold tracking-tight transition-colors md:text-3xl">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground group-hover:text-primary text-sm leading-relaxed transition-colors">
                        {service.description}
                      </p>

                      <a
                        href="#contact"
                        aria-label={`${service.title} — get in touch`}
                        className="bg-primary text-primary-foreground absolute top-1/2 right-0 flex h-16 w-8 -translate-y-1/2 items-center justify-center rounded-l-full"
                      >
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </a>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              ) : (
                /* List rows — icon · title · description · number */
                <StaggerGroup className="divide-border border-border mt-4 divide-y border-b">
                  {group.services.map(
                    ({ icon: Icon, title, description }, index) => (
                      <StaggerItem
                        key={title}
                        className="group grid grid-cols-[auto_1fr] items-start gap-5 py-6 transition-colors sm:grid-cols-[auto_1fr_auto] sm:items-center"
                      >
                        <span className="border-border bg-card text-primary group-hover:border-primary/50 group-hover:bg-primary group-hover:text-primary-foreground grid h-12 w-12 place-items-center rounded-lg border transition-colors">
                          <Icon className="h-5 w-5" />
                        </span>

                        <div>
                          <h3 className="text-foreground text-xl font-bold tracking-tight md:text-2xl">
                            {title}
                          </h3>
                          <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                            {description}
                          </p>
                        </div>

                        <span className="text-muted-foreground/60 hidden font-mono text-sm sm:block">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </StaggerItem>
                    ),
                  )}
                </StaggerGroup>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
