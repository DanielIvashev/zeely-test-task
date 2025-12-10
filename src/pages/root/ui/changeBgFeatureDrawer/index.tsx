import BaseButton from "@/shared/components/baseButton";
import BaseDrawer from "@/shared/components/baseDrawer";
import {
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "@/shared/components/baseDrawer/ui";
import CloseIcon from "@/shared/components/icons/ui/close";
import { useEffect, useId, useState } from "react";
import { useHistory } from "@/shared/hooks/use-history";
import { useFakeProgress } from "@/shared/hooks/use-fake-progress";
import { randomIntFromInterval } from "@/lib/utils";
import { BG_CARDS, DEFAULT_BG_ID } from "../../model/config";
import BackgroundPromptInput from "../backgroundPromptInput";
import GenerateBgButton from "../generateBgButton";
import BackgroundCardsList from "../backgroundCardList";

type ChangeBgDrawerProps = {
  trigger: React.ReactNode;
};

export default function ChangeBgDrawer(props: ChangeBgDrawerProps) {
  const textAreaId = useId();
  const { push, undo, redo, canRedo, canUndo, state } = useHistory({
    value:
      "Animate glowing rays pulsating from behind the bottle, leaves gently swaying, and golden sparkles floating upward for a natural, radiant effect.",
  });

  const { start, progress, isRunning } = useFakeProgress(2000);

  const [promptValue, setPromptValue] = useState(state.value);
  const [selectedCardId, setSelectedCardId] = useState(DEFAULT_BG_ID);
  const [cards, setCards] = useState(BG_CARDS);

  function onRegeneratePrompt() {
    const newVal = Date.now().toString();
    push({ value: newVal });
  }

  function onGenerateBg() {
    if (!promptValue?.trim()?.length || isRunning) return;

    if (state.value !== promptValue) {
      push({ value: promptValue });
    }

    start(() => {
      setCards((prev) => [
        {
          id: Math.random().toString(),
          url: `/shared/generatedBg/${randomIntFromInterval(1, 4)}.webp`,
          new: true,
        },
        ...prev,
      ]);
    });
  }

  function onSelectCardId(id: string) {
    const card = cards.find((card) => card.id === id);

    if (card?.new) {
      setCards((prev) =>
        prev.map((c) => (c.id === id ? { ...c, new: false } : c)),
      );
    }

    setSelectedCardId(id);
  }

  useEffect(() => {
    setPromptValue(state.value);
  }, [state]);

  return (
    <BaseDrawer direction="right" handleOnly>
      <DrawerTrigger asChild>{props.trigger}</DrawerTrigger>
      <DrawerContent>
        <div
          className="flex flex-col gap-6 overflow-y-auto"
          style={{ scrollbarGutter: "stable" }}
        >
          <div className="flex justify-between items-center sticky top-0 bg-white z-2">
            <h3 className="text-xl font-bold leading-0">Change Background</h3>
            <DrawerClose asChild>
              <BaseButton variant="ghost" className="rounded-full">
                <CloseIcon />
              </BaseButton>
            </DrawerClose>
          </div>
          <BackgroundPromptInput
            textAreaId={textAreaId}
            promptValue={promptValue}
            onPromptChange={setPromptValue}
            onRegeneratePrompt={onRegeneratePrompt}
            canUndo={canUndo}
            canRedo={canRedo}
            undo={undo}
            redo={redo}
          />
          <GenerateBgButton onClick={onGenerateBg} disabled={!promptValue} />
          <BackgroundCardsList
            cards={cards}
            selectedCardId={selectedCardId}
            onSelectCardId={onSelectCardId}
            isRunning={isRunning}
            progress={progress}
          />
        </div>
      </DrawerContent>
    </BaseDrawer>
  );
}
