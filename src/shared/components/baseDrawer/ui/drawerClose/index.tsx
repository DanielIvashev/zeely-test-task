import type { ComponentProps } from "react";
import { Drawer as DrawerPrimitive } from "vaul";

type DrawerCloseProps = ComponentProps<typeof DrawerPrimitive.Close>;

export default function DrawerClose(props: DrawerCloseProps) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}
