"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const fields = [
  {
    id: "name",
    label: "Name",
    type: "text",
    autoComplete: "name",
  },
  {
    id: "businessName",
    label: "Business name",
    type: "text",
    autoComplete: "organization",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    autoComplete: "email",
  },
  {
    id: "phone",
    label: "Phone",
    type: "tel",
    autoComplete: "tel",
  },
];

export function EnquiryForm() {
  const submissionInProgress = useRef(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <form
      className="relative z-10 mx-auto flex w-full max-w-[451px] flex-col justify-center gap-5 lg:min-h-[calc(100dvh-3rem)]"
      onSubmit={async (event) => {
        event.preventDefault();
        if (submissionInProgress.current) return;

        submissionInProgress.current = true;
        setIsSubmitting(true);
        setSubmissionMessage("");

        const form = event.currentTarget;
        const formData = new FormData(form);

        try {
          const response = await fetch("/api/enquiry", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(formData.entries())),
          });
          const result: { message?: string; error?: string } =
            await response.json();

          if (!response.ok) {
            setSubmissionMessage(
              result.error ??
                "We could not send your enquiry. Please try again.",
            );
            return;
          }

          form.reset();
          setSubmissionMessage(result.message ?? "Your enquiry has been sent.");
        } catch {
          setSubmissionMessage(
            "We could not send your enquiry. Please check your connection and try again.",
          );
        } finally {
          submissionInProgress.current = false;
          setIsSubmitting(false);
        }
      }}
    >
      {fields.map((field) => (
        <div key={field.id} className="relative w-full">
          <Input
            id={field.id}
            name={field.id}
            type={field.type}
            autoComplete={field.autoComplete}
            placeholder=" "
            maxLength={
              field.id === "name"
                ? 120
                : field.id === "businessName"
                  ? 160
                  : field.id === "email"
                    ? 254
                    : 40
            }
            required
            className="peer h-[51px] w-full rounded-[6px] border-0 bg-[#FFFFFF0D] px-3.5 pt-4 pb-1 text-[13px] font-semibold text-white shadow-none transition-colors outline-none placeholder:text-transparent focus-visible:border-0 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#11141C] motion-reduce:transition-none"
          />

          <label
            htmlFor={field.id}
            className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[13px] text-[#B5B6B9] transition-all duration-200 peer-autofill:top-1.5 peer-autofill:translate-y-0 peer-focus:top-1.5 peer-focus:translate-y-0 peer-focus:text-[13px] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[13px] motion-reduce:transition-none"
          >
            {field.label}
            <span className="text-[#F43F5E]">*</span>
          </label>
        </div>
      ))}

      <Button
        type="submit"
        icon={false}
        variant="primary"
        disabled={isSubmitting}
        className="mt-4 w-full"
      >
        {isSubmitting ? "Sending..." : "Book a demo"}
      </Button>

      <p
        className="min-h-5 text-sm text-white"
        role="status"
        aria-live="polite"
        aria-busy={isSubmitting}
      >
        {submissionMessage}
      </p>
    </form>
  );
}
