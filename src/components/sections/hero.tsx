"use client";

import { motion, type Variants } from "motion/react";
import {
  ArrowRight,
  Cloud,
  Code2,
  PenTool,
  Server,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { stats } from "@/lib/constants";
import { siteConfig } from "@/config/site";

const stack = [
  { icon: PenTool, label: "Design", sub: "UI / UX / Brand" },
  { icon: Code2, label: "Development", sub: "Front-end builds" },
  { icon: Server, label: "Backend", sub: "APIs & databases" },
  { icon: Cloud, label: "Hosting", sub: "Deploy & maintain" },
];

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const panelItem: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

export function Hero() {
  return (
    <section className="border-border relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden border-b">
      {/* Ambient floating blobs */}
      <motion.div
        aria-hidden
        className="bg-primary/15 pointer-events-none absolute top-0 -left-40 -z-10 h-[500px] w-[500px] rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="bg-accent/10 pointer-events-none absolute -right-32 bottom-0 -z-10 h-[400px] w-[400px] rounded-full blur-3xl"
        animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="grid w-full items-center gap-12 py-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left — copy */}
        <motion.div
          className="max-w-xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={item}
            whileHover={{ scale: 1.04 }}
            className="group border-primary/25 from-primary/10 to-accent/5 shadow-primary/5 text-foreground hover:border-primary/40 inline-flex items-center gap-2.5 rounded-full border bg-linear-to-r py-1.5 pr-4 pl-1.5 text-xs font-semibold tracking-wide shadow-sm transition-colors"
          >
            <span className="bg-primary text-primary-foreground relative inline-flex h-5 w-5 items-center justify-center rounded-full">
              <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-40" />
              <Sparkles className="relative h-3 w-3" />
            </span>
            Full-service digital studio
          </motion.span>

          <motion.h1
            variants={item}
            className="text-foreground mt-6 text-4xl leading-[1.05] font-bold tracking-tight sm:text-6xl"
          >
            We build the{" "}
            <span className="relative inline-block">
              <span className="from-primary to-accent bg-linear-to-r bg-clip-text text-transparent">
                whole website
              </span>
              <motion.span
                aria-hidden
                className="from-primary to-accent absolute -bottom-1 left-0 h-1 rounded-full bg-linear-to-r"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
                style={{ originX: 0, width: "100%" }}
              />
            </span>{" "}
            - start to finish.
          </motion.h1>

          <motion.p
            variants={item}
            className="text-muted-foreground mt-6 text-lg leading-relaxed"
          >
            {siteConfig.legalName} handles design, development, backend and
            hosting — plus mobile apps, SEO, content and social — under one
            roof, so everything ships from a single team.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <motion.a
              href="#contact"
              className={buttonVariants({ size: "lg" })}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Start a project
              <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="#product"
              className={buttonVariants({ variant: "outline", size: "lg" })}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              See KurlClub
            </motion.a>
          </motion.div>

          <motion.dl
            variants={item}
            className="border-border mt-12 grid grid-cols-3 gap-6 border-t pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-foreground text-2xl font-bold">
                  {stat.value}
                </dt>
                <dd className="text-muted-foreground mt-1 text-xs leading-snug">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Right — layered capability stack */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        >
          <div
            aria-hidden
            className="border-border bg-secondary/50 absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-xl border"
          />
          <motion.div
            className="border-border bg-card rounded-xl border p-4 shadow-sm"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-1.5 px-2 pb-3">
              <span className="bg-accent/70 h-2.5 w-2.5 rounded-full" />
              <span className="bg-muted-foreground/30 h-2.5 w-2.5 rounded-full" />
              <span className="bg-muted-foreground/30 h-2.5 w-2.5 rounded-full" />
              <span className="text-muted-foreground ml-2 text-xs">
                one team · one roof
              </span>
            </div>
            <motion.ul
              className="space-y-2"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12, delayChildren: 0.5 },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              {stack.map(({ icon: Icon, label, sub }) => (
                <motion.li
                  key={label}
                  variants={panelItem}
                  whileHover={{ x: 4 }}
                  className="border-border bg-background flex items-center gap-3 rounded-lg border p-3"
                >
                  <span className="bg-primary/10 text-primary grid h-10 w-10 place-items-center rounded-md">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-foreground text-sm font-semibold">
                      {label}
                    </p>
                    <p className="text-muted-foreground text-xs">{sub}</p>
                  </div>
                  <span className="text-primary ml-auto text-xs font-medium">
                    included
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
