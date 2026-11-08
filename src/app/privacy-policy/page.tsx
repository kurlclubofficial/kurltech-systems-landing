import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Learn how KurlTech Systems handles personal information when you contact us, submit an enquiry, or engage our services.",
  path: "/privacy-policy",
});

const sections = [
  {
    title: "Information we collect",
    paragraphs: [
      "The enquiry form asks for your name, business name, email address, and phone number. We may also receive project requirements and other information you choose to share when you contact us by email or phone.",
      "Our website may also receive standard technical information from the hosting and security services that deliver it, such as IP address, browser and device details, pages requested, and request time. This information helps operate, protect, and troubleshoot the website.",
      "When you submit the enquiry form, those details are sent through Resend to our enquiry inbox. The website does not currently store form submissions in its own database. Resend and email providers may process or retain messages under their own terms and settings. Please do not include sensitive personal information in an enquiry.",
    ],
  },
  {
    title: "How we use information",
    paragraphs: [
      "We use information to respond to enquiries, understand a potential project, provide and manage our software development and other agreed services, communicate with clients, maintain business records, protect our systems, and meet legal obligations.",
      "If a client gives us access to personal information or systems as part of a project, we use that information only as needed to provide the agreed services and in accordance with the client's instructions and our agreement with them.",
    ],
  },
  {
    title: "When we share information",
    paragraphs: [
      "We use Resend to deliver enquiry form submissions to our inbox. Resend and the email provider may process the information to provide their services and under their own privacy terms. We may disclose information when required by law. If we provide services to a client, that client may determine how information handled for its project is used; please contact the client for questions about its own privacy practices.",
    ],
  },
  {
    title: "Retention and security",
    paragraphs: [
      "Enquiry messages may remain in our email account and in the systems used to deliver them. Retention depends on the relevant account settings and any applicable business or legal record requirements; we do not currently publish a fixed retention period.",
      "Information is transmitted and handled through online services. No method of transmission or storage can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "Your choices and rights",
    paragraphs: [
      "Depending on where you live and applicable law, you may have rights to request access to, correction of, or deletion of personal information, or to object to or limit certain uses. To make a request, contact us using the details below. We may need to verify your identity and may be unable to fulfil a request where an exception applies.",
    ],
  },
  {
    title: "Cookies and third-party services",
    paragraphs: [
      "The website code does not currently include analytics or advertising tracking scripts. Hosting and service providers may use technical measures to deliver and protect their services. Please refer to their privacy notices for information about their practices.",
    ],
  },
  {
    title: "Children's privacy",
    paragraphs: [
      "Our website and services are intended for business use and are not designed to collect information about children.",
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: [
      "We may update this policy as our services or practices change. The latest version will be posted on this page with its updated date.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <article className="mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-brand text-sm font-semibold tracking-[0.12em] uppercase">
          KurlTech Systems
        </p>
        <h1 className="font-clash text-ink mt-3 text-4xl font-medium sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="text-ink/60 mt-4 text-sm">
          Last updated: November 4, 2026
        </p>
        <p className="text-ink/80 mt-8 text-base leading-7">
          This policy explains how KurlTech Systems Private Limited
          (&quot;KurlTech,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) handles personal information when you visit our
          website, contact us, or engage us to provide services. Our work is
          service-based: clients share project requirements with us, and we
          build or deliver work agreed with them.
        </p>

        <div className="mt-12 space-y-9">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-clash text-ink text-2xl font-medium">
                {section.title}
              </h2>
              <div className="text-ink/75 mt-3 space-y-4 text-base leading-7">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="border-ink/10 mt-12 border-t pt-8">
          <h2 className="font-clash text-ink text-2xl font-medium">
            Contact us
          </h2>
          <p className="text-ink/75 mt-3 text-base leading-7">
            For questions or privacy requests, contact KurlTech Systems Private
            Limited at{" "}
            <a
              href="mailto:kurltech.systems@gmail.com"
              className="text-brand font-medium underline underline-offset-4"
            >
              kurltech.systems@gmail.com
            </a>{" "}
            or call{" "}
            <a
              href="tel:+917994990130"
              className="text-brand font-medium underline underline-offset-4"
            >
              (+91) 799 499 0130
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
