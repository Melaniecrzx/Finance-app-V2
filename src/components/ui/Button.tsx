interface ButtonProps extends React.PropsWithChildren {
  mode: "primary" | "destroy" | "secondary";
  className?: string;
  onClick?: React.MouseEventHandler;
  type?: "button" | "submit";
}

export default function Button({
  mode,
  children,
  className,
  onClick,
  type,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`rounded-lg p-4 font4-bold cursor-pointer transition duration-150 ease-in-out ${mode === "primary" ? "bg-grey-900 hover:bg-grey-500  text-white" : mode === "destroy" ? "bg-red text-white" : "bg-beige-50"} ${className}`}
    >
      {children}
    </button>
  );
}
