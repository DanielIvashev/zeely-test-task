import BaseButton from "@/shared/components/baseButton";
import ActionBackForwardIcon from "@/shared/components/icons/ui/actionBackForward";
import AiTwoStarsIcon from "@/shared/components/icons/ui/aiTwoStars";

type BackgroundPromptInputProps = {
  textAreaId: string;
  promptValue: string;
  onPromptChange: (value: string) => void;
  onRegeneratePrompt: () => void;
  canUndo: boolean;
  canRedo: boolean;
  undo: () => void;
  redo: () => void;
};

export default function BackgroundPromptInput(
  props: BackgroundPromptInputProps,
) {
  const {
    textAreaId,
    promptValue,
    onPromptChange,
    onRegeneratePrompt,
    canUndo,
    canRedo,
    undo,
    redo,
  } = props;

  return (
    <div className="flex flex-col gap-3 mb-3">
      <label htmlFor={textAreaId} className="text-base font-semibold">
        Background idea
      </label>
      <div className="border border-grey-light relative rounded-md p-4 focus-within:outline-1 outline-secondary">
        <textarea
          className="resize-none outline-0 w-full min-h-48"
          id={textAreaId}
          value={promptValue}
          onChange={(e) => onPromptChange(e.target.value)}
        ></textarea>
        <div className="flex justify-between gap-2 -m-2">
          <div>
            <BaseButton variant="ghost" onClick={onRegeneratePrompt}>
              <AiTwoStarsIcon />
              <span className="font-semibold">Regenerate</span>
            </BaseButton>
          </div>
          <div className="flex gap-2">
            <BaseButton variant="ghost" onClick={undo} disabled={!canUndo}>
              <ActionBackForwardIcon />
            </BaseButton>
            <BaseButton variant="ghost" onClick={redo} disabled={!canRedo}>
              <ActionBackForwardIcon className="rotate-x-180 rotate-z-180" />
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  );
}
