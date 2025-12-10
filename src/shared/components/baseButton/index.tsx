import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import type { ComponentProps, PropsWithChildren } from "react";
import { baseButtonVariants } from "./model/config";
import { Slot } from "@radix-ui/react-slot";

type BaseButtonProps = PropsWithChildren<
  ComponentProps<"button"> &
    VariantProps<typeof baseButtonVariants> & {
      asChild?: boolean;
    }
>;

export default function BaseButton(props: BaseButtonProps) {
  const { variant, size, className, asChild, ...restProps } = props;
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(baseButtonVariants({ variant, size, className }))}
      {...restProps}
    />
  );
}
