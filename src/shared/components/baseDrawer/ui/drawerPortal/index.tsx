import type { ComponentProps } from "react";
import { Drawer as DrawerPrimitive } from "vaul";

type DrawerPortalProps = ComponentProps<typeof DrawerPrimitive.Portal>;

export default function DrawerPortal(props: DrawerPortalProps) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}
