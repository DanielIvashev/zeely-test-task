import BackgroundCard from "../backgroundCard";
import CircularProgress from "@/shared/components/circularProgress";

type BackgroundCardsListProps = {
  cards: {
    id: string;
    url: string;
    new?: boolean;
  }[];
  selectedCardId: string;
  onSelectCardId: (id: string) => void;
  isRunning: boolean;
  progress: number;
};

export default function BackgroundCardsList(props: BackgroundCardsListProps) {
  const { cards, selectedCardId, onSelectCardId, isRunning, progress } = props;

  return (
    <div className="flex flex-col gap-2.5">
      <p className="text-base font-semibold">Your backgrounds</p>
      <div className="flex gap-3 flex-wrap">
        {isRunning && (
          <div className="aspect-9/16 max-w-27 w-full rounded-xl bg-black flex justify-center items-center relative">
            <CircularProgress progress={progress} />
            <span className="absolute top-[50%] left-[50%] transform-[translate(-50%,-50%)] text-white">
              {Math.round(progress)}%
            </span>
          </div>
        )}

        {cards.map((card) => (
          <BackgroundCard
            key={card.id}
            card={card}
            isSelected={card.id === selectedCardId}
            onSelect={onSelectCardId}
          />
        ))}
      </div>
    </div>
  );
}
