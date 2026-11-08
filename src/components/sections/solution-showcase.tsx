"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { ArrowIcon } from "../icons";

const cardContent = [
  {
    id: 1,
    title: "One connected workflow",
    image: "/images/webp/solution-1.webp",
  },
  {
    id: 2,
    title: "Built for everyday use",
    image: "/images/webp/solution-2.webp",
  },
  {
    id: 3,
    title: "Focused delivery",
    image: "/images/webp/solution-3.webp",
  },
];

function SolutionShowcase() {
  const [activeCard, setActiveCard] = useState(1);
  const shouldReduceMotion = useReducedMotion();
  const activeItem = cardContent.find((item) => item.id === activeCard)!;

  return (
    <section
      id="what-we-build"
      className="mt-6 grid w-full scroll-mt-20 grid-cols-1 lg:h-[calc(100vh-80px)] lg:min-h-[688px] lg:grid-cols-2"
    >
      <div className="flex min-w-0 flex-col justify-between">
        <div className="max-w-[580px] px-5 pt-12 sm:px-8 md:pt-16 lg:px-0 lg:pt-[86px] lg:pl-12">
          <motion.span
            className="flex min-h-[27px] w-fit items-center justify-center bg-[#0A161A] px-2.5 text-[13px] leading-[130%] font-medium text-white"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            What we build
          </motion.span>

          <motion.h2
            className="font-clash mt-4 text-[40px] leading-[105%] font-medium sm:text-[50px] md:text-[62px]"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          >
            Custom software for critical workflows
          </motion.h2>

          <motion.p
            className="mt-3 text-[16px] leading-[140%] font-medium text-[#0A161ACC]"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
          >
            Focused internal tools that reduce manual work and bring each
            workflow into one clear, shared system.
          </motion.p>
        </div>

        <div className="mt-12 flex flex-col md:mt-14 lg:mt-0">
          {cardContent.map((item) => {
            const isActive = activeCard === item.id;

            return (
              <motion.button
                key={item.id}
                type="button"
                onMouseEnter={() => setActiveCard(item.id)}
                onFocus={() => setActiveCard(item.id)}
                onClick={() => setActiveCard(item.id)}
                aria-pressed={isActive}
                className={`group flex min-h-[88px] w-full cursor-pointer items-center justify-between gap-4 border-t border-[#E0DFDF] px-5 py-5 text-left transition-colors duration-300 last:border-b focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#016BE9] motion-reduce:transition-none sm:px-8 sm:py-6 lg:px-12 ${isActive ? "bg-[#016BE9]" : "bg-white hover:bg-[#016BE9]"}`}
                initial={shouldReduceMotion ? false : { opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: 0.45,
                  delay: item.id * 0.08,
                  ease: "easeOut",
                }}
              >
                <span
                  className={`font-clash text-[24px] leading-[110%] font-medium transition-colors duration-300 motion-reduce:transition-none ${isActive ? "text-white" : "text-[#0A161A] group-hover:text-white"}`}
                >
                  {item.title}
                </span>

                <span
                  aria-hidden="true"
                  className={`shrink-0 transition-all duration-300 motion-reduce:transition-none ${isActive ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`}
                >
                  <span className="grid size-12 place-items-center bg-white text-[#0A161A]">
                    <ArrowIcon className="size-4" />
                  </span>
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <motion.div
        className="relative h-[360px] w-full overflow-hidden bg-[#03060F] sm:h-[450px] md:h-[520px] lg:h-full"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeItem.id}
            className="absolute inset-0"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.025 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.985 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.4,
              ease: "easeInOut",
            }}
          >
            <Image
              src={activeItem.image}
              alt={activeItem.title}
              fill
              quality={75}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
              loading="lazy"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default SolutionShowcase;
