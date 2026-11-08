"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { ButtonLink } from "../ui/button";

function HeroShowCase() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative -mt-20 flex min-h-svh w-full flex-col bg-black text-white lg:h-screen">
      <Image
        src="/images/webp/hero-bg.webp"
        alt=""
        fill
        priority
        quality={90}
        sizes="100vw"
        aria-hidden="true"
        className="object-cover"
      />
      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-360 flex-col justify-between px-5 sm:px-6 lg:h-full lg:min-h-0 lg:px-12">
        <div className="flex w-full flex-col gap-7 pt-32 pb-8 sm:gap-9 sm:pt-36 lg:gap-12 lg:pt-[152px] lg:pb-6">
          <motion.h1
            className="font-clash max-w-[894px] text-[46px] leading-[96%] font-medium sm:text-[62px] lg:text-[82px]"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 42 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
          >
            Custom internal tools that get the work out of one{" "}
            <span className="text-[#6FD0EF]">person&apos;s head!</span>
          </motion.h1>

          <motion.p
            className="max-w-[735px] text-[16px] leading-[140%] font-medium"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
          >
            We build custom internal tools that simplify everyday operations,
            connect disconnected workflows, and give teams the visibility they
            need to work smarter.
          </motion.p>
        </div>

        <motion.div
          className="flex w-full flex-col items-start justify-between gap-6 border-t border-[#6FD0EF1F] py-8 sm:flex-row sm:items-end lg:items-center lg:gap-4 lg:py-12"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.4, ease: "easeOut" }}
        >
          <ButtonLink
            href="#workflow-problems"
            variant="split"
            className="max-w-full"
          >
            Explore the problem
          </ButtonLink>
          <div className="flex w-full min-w-0 items-center justify-between gap-3 border border-[#6E99CE1F] bg-[#6E79CE0F] p-2 sm:w-auto sm:gap-4">
            <div className="flex min-w-0 flex-1 flex-col justify-between gap-6 p-2 sm:w-[210px] sm:flex-none lg:w-[234px] lg:gap-10">
              <span className="font-clash max-w-[117px] text-[18px] leading-[140%] font-medium">
                See how we can help.
              </span>
              <ButtonLink href="/enquiry" variant="primary" className="w-fit">
                Book a demo
              </ButtonLink>
            </div>
            <Image
              src="/images/webp/hero.webp"
              alt=""
              width={368}
              height={308}
              quality={75}
              sizes="(max-width: 639px) 112px, (max-width: 1023px) 150px, 184px"
              loading="eager"
              className="h-auto w-[112px] shrink-0 sm:w-[150px] lg:w-[184px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroShowCase;
