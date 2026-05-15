import Button from './Button';

interface EmptyStateProps {
  emoji: string;
  title: string;
  description: string;
  buttonLabel?: string;
  onClick?: () => void;
}

export default function EmptyState({
  emoji,
  title,
  description,
  buttonLabel,
  onClick,
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col gap-6 justify-center items-center bg-white rounded-2xl p-8 ${buttonLabel && onClick ? 'shadow-md' : ''}`}
    >
      <span className="text-6xl">{emoji}</span>
      <span className="font1">{title}</span>
      <p className="font4-regular text-center text-grey-500">{description}</p>
      {buttonLabel && onClick && (
        <Button mode="primary" onClick={onClick}>
          {buttonLabel}
        </Button>
      )}
    </div>
  );
}
