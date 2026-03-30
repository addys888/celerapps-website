import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium border transition-colors",
  {
    variants: {
      variant: {
        default:  "border-white/10  bg-white/5         text-slate-300",
        brand:    "border-sky-500/30  bg-sky-500/10    text-sky-400",
        indigo:   "border-indigo-500/30 bg-indigo-500/10 text-indigo-400",
        success:  "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
        warning:  "border-amber-500/30 bg-amber-500/10 text-amber-400",
        whatsapp: "border-green-500/30 bg-green-500/10 text-green-400",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
