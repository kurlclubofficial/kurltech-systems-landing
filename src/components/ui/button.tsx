import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  // Black by default, turns red on hover.
  primary:
    "bg-foreground text-background hover:bg-primary hover:text-primary-foreground",
  // Gray outline, fills with light red on hover.
  secondary:
    "border border-input bg-transparent text-foreground hover:border-primary hover:bg-primary/10 hover:text-primary",
  outline:
    "border border-input bg-transparent text-foreground hover:border-primary hover:bg-primary/10 hover:text-primary",
  ghost:
    "bg-transparent text-foreground hover:bg-primary/10 hover:text-primary",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

/**
 * Shared class string so anchors (`<a>`) and buttons can look identical.
 */
export function buttonVariants(opts?: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  const { variant = "primary", size = "md", className } = opts ?? {};
  return cn(base, variantStyles[variant], sizeStyles[size], className);
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}
