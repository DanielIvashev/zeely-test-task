import BaseButton from "@/shared/components/baseButton";
import AiThreeStarsIcon from "@/shared/components/icons/ui/aiThreeStars";

type GenerateBgButtonProps = {
  onClick: () => void;
  disabled: boolean;
};

export default function GenerateBgButton(props: GenerateBgButtonProps) {
  const { onClick, disabled } = props;

  return (
    <BaseButton
      variant="ghost"
      size="md"
      className="bg-black mb-8 rounded-full hover:bg-black/80"
      onClick={onClick}
      disabled={disabled}
    >
      <AiThreeStarsIcon />
      <span className="font-semibold text-white">Generate BG for 1 credit</span>
    </BaseButton>
  );
}
