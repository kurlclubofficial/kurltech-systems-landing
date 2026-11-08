import * as React from "react";
import Link from "next/link";
import { ArrowIcon, BoltIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "iconBtn" | "split";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * `primary` — solid blue bar with a leading icon and a label.
   * `secondary` — white icon-only square.
   * `split` — white label block with a blue icon square attached to its right.
   */
  variant?: ButtonVariant;
  /** Overrides the default glyph: a bolt on `primary`, an arrow elsewhere. */
  icon?: React.ReactNode;
}

export interface ButtonLinkProps extends React.ComponentPropsWithoutRef<
  typeof Link
> {
  variant?: ButtonVariant;
  icon?: React.ReactNode;
}

const base =
  "group inline-flex items-center justify-center cursor-pointer text-sm font-semibold tracking-[0.08em] uppercase transition-colors outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-50";

function getVariantClasses(variant: ButtonVariant) {
  if (variant === "iconBtn") {
    return "text-ink size-12 shrink-0 bg-white p-3 hover:bg-neutral-100";
  }

  if (variant === "split") {
    return "text-ink bg-white p-1 hover:bg-neutral-100";
  }

  return "bg-brand hover:bg-brand-hover gap-2.5 px-5 py-3 font-extrabold text-white";
}

function ButtonContent({
  variant,
  icon,
  children,
}: {
  variant: ButtonVariant;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  if (variant === "iconBtn") {
    return icon ?? <ArrowIcon className="size-4" />;
  }

  if (variant === "split") {
    return (
      <>
        <span className="py-3.5 pr-8 pl-12">{children}</span>
        <span className="bg-brand group-hover:bg-brand-hover grid w-12 shrink-0 place-items-center self-stretch text-white transition-colors">
          {icon ?? <ArrowIcon className="size-4" />}
        </span>
      </>
    );
  }

  return (
    <>
      {icon ?? <BoltIcon className="size-6 shrink-0" />}
      {children}
    </>
  );
}

export function Button({
  variant = "primary",
  icon,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(base, getVariantClasses(variant), className)}
      {...props}
    >
      <ButtonContent variant={variant} icon={icon}>
        {children}
      </ButtonContent>
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  icon,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(base, getVariantClasses(variant), className)}
      {...props}
    >
      <ButtonContent variant={variant} icon={icon}>
        {children}
      </ButtonContent>
    </Link>
  );
}
