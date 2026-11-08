import type { Metadata } from "next";
import Image from "next/image";
import { EnquiryForm } from "@/components/sections/enquiry-form";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Book a Consultation",
  description:
    "Tell KurlTech Systems about your business and the workflow you want to improve. We build custom software for critical operations.",
  path: "/enquiry",
});

function EnquiryPage() {
  return (
    <main className="relative min-h-dvh bg-[#11141C] text-white">
      <Image
        src="/images/webp/enquiry-bg.webp"
        alt=""
        fill
        priority
        quality={90}
        sizes="100vw"
        aria-hidden="true"
        className="object-cover"
      />
      <div className="relative mx-auto grid min-h-dvh max-w-360 grid-cols-1 gap-12 px-6 py-10 md:px-12 lg:grid-cols-2 lg:gap-0 lg:py-6">
        <section className="relative z-10 lg:min-h-[calc(100dvh-3rem)]">
          <div className="flex flex-col justify-center lg:min-h-[calc(100dvh-3rem)] lg:max-w-[468px]">
            <Image
              src="/images/svg/logo.svg"
              alt="Kurltech Systems"
              width={226}
              height={57}
              priority
              unoptimized
              className="h-auto max-w-full"
            />
            <h1 className="font-clash mt-8 text-[32px] leading-[1.05] font-medium sm:text-[40px] lg:text-[54px] lg:leading-[96%]">
              Custom internal tools that get the work out of one{" "}
              <span className="text-[#6FD0EF]">person’s head !</span>
            </h1>
            <p className="mt-8 text-[20px] leading-[1.25] font-medium text-[#B5B6B9] sm:text-[24px] lg:mt-14 lg:text-[28px] lg:leading-[34px] lg:text-[#FFFFFF4D]">
              Choose Kurl, be different
            </p>
          </div>

          <div
            className="absolute top-0 right-0 hidden h-full w-px lg:block"
            style={{
              background:
                "linear-gradient(180deg, rgba(17, 20, 28, 0.09) 0%, rgba(255, 255, 255, 0.09) 54.49%, rgba(17, 20, 28, 0.09) 100%)",
            }}
            aria-hidden="true"
          />
        </section>

        <EnquiryForm />
      </div>
    </main>
  );
}

export default EnquiryPage;
