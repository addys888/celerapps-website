"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]",
        secondary:
          "border border-white/10 bg-white/[0.05] text-white hover:bg-white/[0.09] hover:border-white/20",
        ghost:
          "text-slate-400 hover:text-white hover:bg-white/5",
        outline:
          "border border-sky-500/40 text-sky-400 hover:bg-sky-500/10 hover:border-sky-400",
        danger:
          "bg-red-500/90 text-white hover:bg-red-500",
      },
      size: {
        sm:   "h-8  px-4  text-xs  rounded-lg",
        md:   "h-10 px-5  text-sm",
        lg:   "h-12 px-7  text-base",
        xl:   "h-14 px-9  text-lg  rounded-2xl",
        icon: "h-9  w-9",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
