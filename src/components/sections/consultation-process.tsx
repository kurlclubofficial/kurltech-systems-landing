"use client";

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";

const consultationSteps = [
  {
    id: 1,
    description: "Show us how your team works from start to finish.",
    src: "/images/webp/consultation-1.webp",
  },
  {
    id: 2,
    description:
      "We identify the highest-value manual step—the one costing you time or causing errors.",
    src: "/images/webp/consultation-2.webp",
  },
  {
    id: 3,
    description:
      "You'll get an honest view of whether software will help. If it will not, we'll say so.",
    src: "/images/webp/consultation-3.webp",
  },
];

function ConsultationProcess() {
  const [activeStep, setActiveStep] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const nextStep = progress >= 0.78 ? 3 : progress >= 0.38 ? 2 : 1;
    setActiveStep((current) => (current === nextStep ? current : nextStep));
  });

  return (
    <section
      id="consultation"
      ref={sectionRef}
      className="w-full scroll-mt-20 bg-white text-[#0A161A] md:h-[220vh]"
    >
      <div className="md:sticky md:top-20 md:h-[calc(100vh-5rem)] md:overflow-hidden">
        <div className="grid grid-cols-1 md:h-full md:grid-cols-[25%_75%] md:grid-rows-[auto_1fr]">
          {/* Left empty area */}
          <div className="hidden border-r border-b border-[#0A161A] md:block" />

          {/* Heading area */}
          <motion.div
            className="px-6 py-12 md:px-[130px] md:pt-[80px] md:pb-[40px]"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="font-clash max-w-[544px] text-[42px] leading-[105%] font-medium md:text-[52px] lg:text-[72px]">
              A 30-minute conversation
            </h2>

            <p className="mt-6 max-w-[544px] text-[16px] leading-[140%] font-medium text-[#0A161ACC]">
              No pitch and no commitment. We spend 30 minutes understanding how
              your team works and whether one workflow is worth improving.
            </p>
          </motion.div>

          {/* Left image - changes based on active step */}
          <motion.div
            className="relative min-h-[320px] overflow-hidden border-r border-[#00000040] md:min-h-0"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          >
            {consultationSteps.map((step) => (
              <Image
                key={step.id}
                src={step.src}
                alt=""
                aria-hidden="true"
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, 25vw"
                className={`object-cover transition-opacity duration-500 ease-in-out motion-reduce:transition-none ${
                  activeStep === step.id ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </motion.div>

          {/* Right steps */}
          <div className="flex flex-col md:min-h-0">
            {consultationSteps.map((step) => {
              const isActive = activeStep === step.id;

              return (
                <motion.div
                  key={step.id}
                  aria-current={isActive ? "step" : undefined}
                  className={`flex flex-1 items-center gap-15 border-y border-[#03060F] px-5.5 py-8 transition-colors duration-300 motion-reduce:transition-none ${
                    isActive ? "bg-[#03060F]" : "bg-white"
                  }`}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.45,
                    delay: step.id * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <span
                    className={`font-grotesk min-w-[56px] text-[52px] leading-[105%] font-medium transition-colors duration-300 ${
                      isActive ? "text-white" : "text-[#03060F]"
                    }`}
                  >
                    {String(step.id).padStart(2, "0")}
                  </span>

                  <p
                    className={`text-[16px] leading-[140%] font-medium transition-colors duration-300 ${
                      isActive ? "text-white" : "text-[#03060F]"
                    }`}
                  >
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsultationProcess;
