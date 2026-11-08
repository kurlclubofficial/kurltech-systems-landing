import Image from "next/image";
import Link from "next/link";
import { LayoutCall, LayoutMail } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";

const contacts = [
  {
    label: "(+91) 799 499 0130",
    href: "tel:+917994990130",
    Icon: LayoutCall,
  },
  {
    label: "kurltech.systems@gmail.com",
    href: "mailto:kurltech.systems@gmail.com",
    Icon: LayoutMail,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink font-clash relative isolate overflow-hidden">
      <Image
        src="/images/webp/footer-bg.webp"
        alt=""
        fill
        quality={90}
        sizes="100vw"
        aria-hidden
        className="z-0 object-cover object-right"
      />

      <div className="relative z-20 mx-auto max-w-360 px-6 pt-10 pb-8 lg:px-12 lg:pt-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div>
            <h2 className="bg-gradient-to-r from-white via-white/90 to-white/40 bg-clip-text text-[52px] leading-tight font-medium text-transparent sm:text-[62px] lg:text-[62px]">
              Let&apos;s find the workflow worth fixing.
            </h2>

            <ul className="mt-11 flex flex-wrap items-center gap-x-[62px] gap-y-4">
              {contacts.map(({ label, href, Icon }) => (
                <li key={label} className="max-w-full">
                  <a
                    href={href}
                    className="group inline-flex max-w-full items-center gap-4 text-[28px] text-white transition-colors hover:text-white/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    <Icon
                      className="text-brand size-[32px] shrink-0"
                      aria-hidden
                      strokeWidth={2}
                    />
                    <span className="min-w-0 break-words">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ButtonLink href="/enquiry" variant="split" className="mt-2 shrink-0">
            Schedule a call
          </ButtonLink>
        </div>

        <div className="mt-20 flex flex-col gap-3 text-[12px] text-white/45 sm:flex-row sm:items-center sm:justify-between lg:mt-[130px]">
          <p className="text-[12px] leading-[130%] text-white/50">
            &copy; {year} KurlTech Systems. All rights reserved.
          </p>
          <Link
            href="/privacy-policy"
            className="text-[12px] leading-[130%] text-white transition-colors hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
