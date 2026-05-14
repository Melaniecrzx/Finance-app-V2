type ButtonMode = 'primary' | 'secondary' | 'destroy';

interface ButtonProps extends React.PropsWithChildren {
  mode?: ButtonMode;
  className?: string;
  onClick?: React.MouseEventHandler;
  type?: 'button' | 'submit';
}

const modeStyles: Record<ButtonMode, string> = {
  primary: 'bg-grey-900 text-white hover:bg-grey-500',
  secondary: 'bg-beige-50 text-grey-900',
  destroy: 'bg-red text-white',
};

export default function Button({
  mode = 'primary',
  children,
  className,
  onClick,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-4 py-3 rounded-lg cursor-pointer font4-bold ${modeStyles[mode]} ${className}`}
    >
      {children}
    </button>
  );
}
