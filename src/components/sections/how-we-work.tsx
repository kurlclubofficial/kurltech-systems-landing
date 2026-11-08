"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const cards = [
  {
    id: 1,
    title: "Clear scope, fixed cost",
    description:
      "You know the scope and cost before we begin—no hourly meter or unexpected charges.",
    src: "/images/webp/how-we-work-1.webp",
    color: "#168AE2",
  },
  {
    id: 2,
    title: "Focused, staged delivery",
    description:
      "We deliver one focused workflow at a time, so you can evaluate its value before expanding.",
    src: "/images/webp/how-we-work-2.webp",
    color: "#00269B",
  },
  {
    id: 3,
    title: "Support that stays close",
    description:
      "When something matters, you can reach a person who understands your system—not just a ticket queue.",
    src: "/images/webp/how-we-work-3.webp",
    color: "#001A6A",
  },
];

function HowWeWork() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const supportsDesktopHover = () =>
    window.matchMedia("(min-width: 1024px) and (hover: hover)").matches;

  return (
    <section
      id="how-we-work"
      className="mx-auto flex w-full max-w-[1440px] scroll-mt-20 flex-col gap-8 px-5 py-12 sm:px-8 sm:py-14 lg:h-[calc(100vh-80px)] lg:min-h-[688px] lg:flex-row lg:gap-[56px] lg:px-12 lg:pt-[54px] lg:pb-11.5"
    >
      {/* Left content */}
      <motion.div
        className="flex w-full flex-col items-start justify-between gap-8 lg:max-w-[370px]"
        initial={shouldReduceMotion ? false : { opacity: 0, x: -32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-3">
          <h2 className="font-clash text-[42px] leading-[105%] font-medium lg:text-[62px]">
            How we work
          </h2>

          <p className="text-[16px] leading-[140%] font-medium text-[#0A161ACC]">
            A simpler, faster way to build software.
          </p>
        </div>

        <Image
          src="/images/webp/how-we-work-star.webp"
          alt=""
          width={274}
          height={289}
          quality={90}
          className="h-auto w-[160px] max-w-full object-contain sm:w-[220px] lg:ml-[-34px] lg:w-auto"
        />
      </motion.div>
      {/* Expanding cards */}
      <motion.div
        className="flex h-[620px] w-full flex-col overflow-hidden sm:h-[720px] lg:h-full lg:flex-row"
        onMouseLeave={() => {
          if (supportsDesktopHover()) setActiveCard(null);
        }}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
      >
        {cards.map((card) => {
          const isActive = activeCard === card.id;

          return (
            <button
              key={card.id}
              type="button"
              onMouseEnter={() => {
                if (supportsDesktopHover()) setActiveCard(card.id);
              }}
              onFocus={() => setActiveCard(card.id)}
              onClick={() => setActiveCard(card.id)}
              aria-label={card.title}
              aria-pressed={isActive}
              className="group relative min-h-0 min-w-0 cursor-pointer overflow-hidden text-left transition-[flex-grow] duration-500 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white motion-reduce:transition-none"
              style={{
                backgroundColor: card.color,
                flexGrow: activeCard === null ? 1 : isActive ? 3.5 : 1,
                flexBasis: 0,
              }}
            >
              {/* Background image */}
              <div
                className={`pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 motion-reduce:transition-none ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={card.src}
                  alt=""
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 31.74%, #000000 100%)",
                  }}
                />
              </div>

              {/* Card number */}
              <span className="font-grotesk absolute top-6 right-6 z-20 text-[32px] leading-[105%] font-medium text-[#D2F4FF]">
                {String(card.id).padStart(2, "0")}
              </span>

              {/* Title and description */}
              <div
                className={`absolute right-5 bottom-6 left-5 z-20 flex flex-col gap-3 text-white transition-all duration-500 motion-reduce:transition-none sm:right-6 sm:bottom-8 sm:left-8 lg:bottom-[62px] lg:gap-4.5 ${
                  isActive
                    ? "translate-y-0 opacity-100"
                    : "translate-y-0 opacity-100 lg:translate-y-5 lg:opacity-0"
                }`}
              >
                <h3 className="font-clash text-[28px] leading-[105%] font-medium sm:text-[34px] lg:text-[40px]">
                  {card.title}
                </h3>

                <p
                  className={`max-w-[333px] text-[15px] leading-[140%] text-white/80 lg:text-[16px] ${isActive ? "block" : "hidden lg:block"}`}
                >
                  {card.description}
                </p>
              </div>
            </button>
          );
        })}
      </motion.div>
    </section>
  );
}

export default HowWeWork;
