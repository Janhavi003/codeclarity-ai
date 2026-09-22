import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "danger";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant };

export function Button({ className, variant = "secondary", ...props }: Props) {
  return <button className={cn("btn", `btn-${variant}`, className)} {...props} />;
}
