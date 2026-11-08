"use client";

import {
  AnimatePresence,
  motion,
  type MotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";

const features = [
  {
    id: 1,
    sectionTitle: "A problem we keep",
    sectionHighlight: "seeing.",
    sectionDescription:
      "In growing organizations, a critical workflow often lives with one person—or in one spreadsheet.",
    title: "One person is the system.",
    description:
      "When they are away, work slows down and critical knowledge becomes difficult to access.",
    image: "/images/webp/feature-1.webp",
  },
  {
    id: 2,
    sectionTitle: "Too much work remains",
    sectionHighlight: "manual.",
    sectionDescription:
      "Important work is spread across files and handoffs, making progress hard to track and easy to miss.",
    title: "Work is done by hand.",
    description:
      "There is no single view of what is pending, complete, or blocked.",
    image: "/images/webp/feature-2.webp",
  },
  {
    id: 3,
    sectionTitle: "Decisions are made",
    sectionHighlight: "without visibility.",
    sectionDescription:
      "Without a live view of the process, teams rely on updates, assumptions, and outdated information.",
    title: "No real-time visibility. Decisions based on guesswork.",
    description:
      "Teams make decisions using status updates and information that may already be out of date.",
    image: "/images/webp/feature-3.webp",
  },
] as const;

type Feature = (typeof features)[number];

function CardContent({ item }: { item: Feature }) {
  return (
    <>
      <div className="flex min-h-[280px] items-start justify-between gap-5 py-4 md:h-full md:min-h-0 md:gap-6 md:py-6">
        <span className="text-accent font-grotesk text-xl leading-none font-medium md:text-[32px]">
          {String(item.id).padStart(2, "0")}
        </span>

        <div className="flex h-full max-w-[416px] flex-1 flex-col justify-between gap-5">
          <h3 className="font-clash text-[38px] leading-[105%] font-medium sm:text-5xl lg:text-[48px]">
            {item.title}
          </h3>
          <p className="max-w-[338px] text-lg leading-[140%] sm:text-2xl lg:text-[25px]">
            {item.description}
          </p>
        </div>
      </div>

      <div className="relative min-h-[300px] w-full overflow-hidden md:h-full md:min-h-0">
        <Image
          src={item.image}
          fill
          quality={90}
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-cover"
          alt={item.title}
        />
      </div>
    </>
  );
}

function DesktopFeatureCard({
  item,
  index,
  isActive,
  progress,
  shouldReduceMotion,
}: {
  item: Feature;
  index: number;
  isActive: boolean;
  progress: MotionValue<number>;
  shouldReduceMotion: boolean | null;
}) {
  const inputRange: number[] =
    index === 0 ? [0, 1] : index === 1 ? [0.08, 0.34] : [0.46, 0.86];
  const outputRange: string[] = index === 0 ? ["0vh", "0vh"] : ["100vh", "0vh"];
  const y = useTransform(progress, inputRange, outputRange);

  return (
    <motion.article
      className="absolute inset-x-0 top-60 grid h-[calc(100vh-20rem)] max-h-[578px] min-h-[420px] grid-cols-2 gap-11 overflow-hidden bg-[#0A161A] p-5 text-white shadow-[0_-10px_0_rgba(10,22,26,0.18)]"
      style={{
        y: shouldReduceMotion ? 0 : y,
        opacity: shouldReduceMotion ? Number(isActive) : 1,
        zIndex: shouldReduceMotion ? (isActive ? 3 : 1) : index + 1,
      }}
    >
      <CardContent item={item} />
    </motion.article>
  );
}

function FeatureHeader({
  activeFeature,
  shouldReduceMotion,
}: {
  activeFeature: Feature;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <motion.div
      className="relative z-40 grid bg-white md:h-60 md:grid-cols-[30%_70%]"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="border-[#000000] py-7 md:border-r md:py-9">
        <span className="text-xl leading-none font-semibold text-[#0D245F] md:text-[24px]">
          Why workflows break
        </span>
      </div>

      <div className="relative min-h-[220px] py-7 md:min-h-0 md:py-8 md:pl-12 lg:pl-14">
        <span className="font-grotesk absolute top-8 right-0 text-xl font-medium text-[#0D245F] md:text-[24px]">
          #{String(activeFeature.id).padStart(2, "0")}
        </span>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeFeature.id}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <h2 className="font-clash max-w-[760px] pr-12 text-[38px] leading-[100%] font-medium text-[#0A161A] md:text-[52px] lg:text-[58px]">
              {activeFeature.sectionTitle}
              <br />
              <span className="text-[#016BE9]">
                {activeFeature.sectionHighlight}
              </span>
            </h2>

            <p className="mt-3 max-w-[680px] text-[15px] leading-[135%] font-medium text-[#0A161ACC] lg:text-[16px]">
              {activeFeature.sectionDescription}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sceneRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const nextIndex = progress >= 0.82 ? 2 : progress >= 0.3 ? 1 : 0;
    setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
  });

  return (
    <section
      id="workflow-problems"
      className="relative flex w-full scroll-mt-20 flex-col bg-white"
      aria-label="Common workflow problems"
    >
      <div className="flex w-full items-start justify-between gap-4 overflow-hidden">
        <Image
          src="/images/webp/hero-bottom-left.webp"
          alt=""
          width={395}
          height={238}
          quality={90}
          sizes="(max-width: 1316px) 30vw, 395px"
          className="h-auto w-[30%] max-w-[395px]"
        />
        <Image
          src="/images/webp/hero-bottom-right.webp"
          alt=""
          width={237}
          height={237}
          quality={90}
          sizes="(max-width: 1316px) 18vw, 237px"
          className="h-auto w-[18%] max-w-[237px]"
        />
      </div>

      <div className="mx-auto mt-[-60px] w-full max-w-360 px-4 sm:px-6 lg:px-12">
        <div className="md:hidden">
          <FeatureHeader
            activeFeature={features[0]}
            shouldReduceMotion={shouldReduceMotion}
          />
          <div className="flex flex-col gap-8">
            {features.map((item) => (
              <article
                key={item.id}
                className="grid overflow-hidden bg-[#0A161A] p-5 text-white"
              >
                <CardContent item={item} />
              </article>
            ))}
          </div>
        </div>

        <div ref={sceneRef} className="relative hidden h-[300vh] md:block">
          <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-hidden">
            <FeatureHeader
              activeFeature={features[activeIndex]}
              shouldReduceMotion={shouldReduceMotion}
            />

            {features.map((item, index) => (
              <DesktopFeatureCard
                key={item.id}
                item={item}
                index={index}
                isActive={activeIndex === index}
                progress={scrollYProgress}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureShowcase;
