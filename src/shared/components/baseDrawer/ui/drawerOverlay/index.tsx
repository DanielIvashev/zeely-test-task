import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { Drawer as DrawerPrimitive } from "vaul";

type DrawerOverlayProps = ComponentProps<typeof DrawerPrimitive.Overlay>;

export default function DrawerOverlay(props: DrawerOverlayProps) {
  const { className, ...restProps } = props;

  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/70",
        className,
      )}
      {...restProps}
    />
  );
}
