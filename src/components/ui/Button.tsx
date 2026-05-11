import styled, { css } from "styled-components";

type ButtonMode = "primary" | "secondary" | "destroy";

interface ButtonProps extends React.PropsWithChildren {
  mode?: ButtonMode;
  className?: string;
  onClick?: React.MouseEventHandler;
  type?: "button" | "submit";
}

const StyledButton = styled.button<ButtonProps>`
  padding: 1rem
  cursor: pointer
  border-radius: 8px
  font4-bold


  ${({ mode }) =>
    mode === "primary" &&
    css`
      background: var(--color-grey-900);
      color: white;
      &:hover {
        background: var(--color-grey-500);
      }
    `}
   ${({ mode }) =>
     mode === "secondary" &&
     css`
       background: var(--color-beige-50);
     `}
      ${({ mode }) =>
        mode === "destroy" &&
        css`
     background: var(--color-red)
     color: white
  `}

`;

export default function Button({
  mode,
  children,
  className,
  onClick,
  type,
}: ButtonProps) {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      className={` ${className}`}
      mode={mode}
    >
      {children}
    </StyledButton>
  );
}
