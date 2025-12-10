import type { ComponentProps } from "react";
import { Drawer as DrawerPrimitive } from "vaul";

type DrawerTriggerProps = ComponentProps<typeof DrawerPrimitive.Trigger>;

export default function DrawerTrigger(props: DrawerTriggerProps) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}
