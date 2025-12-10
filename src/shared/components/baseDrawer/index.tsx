import type { ComponentProps } from "react";
import { Drawer as DrawerPrimitive } from "vaul";

export default function BaseDrawer({
  ...props
}: ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />;
}
