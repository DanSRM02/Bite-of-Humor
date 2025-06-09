import type { ReactNode, Ref } from "react";
import clsx from "clsx";

type ButtonProps = {
  variant: "primary" | "secondary" | string;
  size: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  icon?: string;
  tabIndex: number;
  refButton?: Ref<HTMLButtonElement> | null;
  onClick?: () => void;
  "aria-label"?: string;
  "aria-pressed"?: boolean;
  disabled?: boolean;
};

const Button = ({
  children,
  refButton,
  onClick,
  variant,
  size,
  type,
  tabIndex,
  disabled = false,
  ...props
}: ButtonProps) => {
  const buttonStyle = `button-${variant}`;
  const sizeStyle = `size-${size}`;

  return (
    <button
      ref={refButton}
      type={type}
      className={clsx(buttonStyle, sizeStyle)}
      onClick={onClick}
      tabIndex={tabIndex}
      aria-label={props["aria-label"]}
      aria-pressed={props["aria-pressed"]}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
