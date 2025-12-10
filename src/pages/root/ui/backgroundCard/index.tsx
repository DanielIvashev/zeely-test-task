import BaseButton from "@/shared/components/baseButton";
import ThumbnailIcon from "@/shared/components/icons/ui/thumbnail";

type BackgroundCardProps = {
  card: {
    id: string;
    url: string;
    new?: boolean;
  };
  isSelected: boolean;
  onSelect: (id: string) => void;
};

export default function BackgroundCard({
  card,
  isSelected,
  onSelect,
}: BackgroundCardProps) {
  return (
    <div
      key={card.id}
      className="aspect-9/16 has-[input:checked]:border-black hover:scale-105 overflow-clip border-2 border-white relative flex transition-all duration-500 max-w-27 w-full rounded-xl"
    >
      <img
        className="inset-0 absolute appearance-none h-full w-full max-w-full object-cover"
        src={card.url}
        loading="lazy"
      />
      {!card.new && (
        <img
          className="inset-0 absolute appearance-none max-w-full h-full w-full object-contain translate-y-1"
          src="/shared/avatar.webp"
          loading="lazy"
        />
      )}

      {isSelected && (
        <div className="bg-white absolute top-2 left-2 rounded-[5px] border border-black/5 text-[10px] font-bold uppercase px-1 py-1.5 text-grey-500 flex items-center">
          <span>Default</span>
        </div>
      )}

      <input
        className="appearance-none absolute inset-0 cursor-pointer"
        type="radio"
        value={card.id}
        checked={isSelected}
        onChange={() => onSelect(card.id)}
      />

      {card.new && (
        <div className="flex gap-2 z-2 items-center justify-center self-end py-3 w-full px-3">
          <BaseButton
            className="flex-1 w-full bg-black/50 border-white/20 p-2.5! rounded-xl"
            onClick={() => onSelect(card.id)}
          >
            <ThumbnailIcon />
          </BaseButton>
          <BaseButton className="flex-1 w-full bg-black/50 border border-white/20 p-2.5! rounded-xl">
            <ThumbnailIcon className="rotate-180" />
          </BaseButton>
        </div>
      )}
    </div>
  );
}
