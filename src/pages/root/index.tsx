import BaseButton from "@/shared/components/baseButton";
import IconCreativesPlus from "@/shared/components/icons/ui/creativesPlus";

import ChangeBgDrawer from "./ui/changeBgFeatureDrawer";

export default function RootPage() {
  return (
    <main className="h-screen">
      <div className="flex h-full w-full items-center justify-center">
        <ChangeBgDrawer
          trigger={
            <BaseButton>
              <IconCreativesPlus />
              <span className="leading-1.2">Change background</span>
            </BaseButton>
          }
        />
      </div>
    </main>
  );
}
