"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

const cardContent = [
  {
    title: "A management platform built for gyms",
    description:
      "WhatsApp-integrated member reminders and follow-ups, built and used by paying customers.",
  },
  {
    title: "Enterprise experience",
    description:
      "Experience building internal tools for manufacturing and FMCG businesses.",
  },
];

function ProductSpotlight() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="our-work"
      className="flex w-full scroll-mt-20 flex-col items-stretch justify-between gap-12 overflow-hidden bg-[#03060F] py-12 text-white sm:gap-14 sm:py-16 xl:h-[calc(100vh-80px)] xl:min-h-[688px] xl:flex-row xl:items-end xl:gap-[70px] xl:pt-12 xl:pb-0"
    >
      <div className="w-full max-w-[657px] px-5 sm:px-8 xl:mt-[60px] xl:mb-[54px] xl:w-[46%] xl:px-0 xl:pl-[47px]">
        <motion.div
          className="mb-[48px] flex flex-col gap-[18px] border-b border-[#FFFFFF]/15 pb-[42px]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-clash text-[40px] leading-[105%] font-medium sm:text-[52px] lg:text-[62px]">
            We ship real, working software
          </h2>
          <p className="text-[16px] font-medium text-[#FFFFFFCC]">
            Practical products that customers use and pay for today.
          </p>
        </motion.div>

        <div className="flex flex-col gap-[18px]">
          {cardContent.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex flex-col gap-5 rounded-[8px] border border-[#FFFFFF38] bg-[#F5F5F51A] p-5"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.55 }}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.1,
                ease: "easeOut",
              }}
            >
              <h3 className="font-clash text-[28px] leading-[120%] font-medium">
                {item.title}
              </h3>
              <p className="text-[16px] leading-[120%]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="relative ml-auto w-full max-w-[800px] xl:min-w-0 xl:flex-1"
        initial={
          shouldReduceMotion ? false : { opacity: 0, x: 48, scale: 0.98 }
        }
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
      >
        <Image
          src="/images/webp/kurlclub-banner.webp"
          alt="KurlClub gym management dashboard and mobile app showing memberships, payments, and attendance"
          width={800}
          height={615}
          quality={90}
          className="h-auto w-full"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,#03060F_-43.12%,rgba(3,6,15,0.774304)_12.19%,rgba(3,6,15,0)_100%)]"
        />
      </motion.div>
    </section>
  );
}

export default ProductSpotlight;
