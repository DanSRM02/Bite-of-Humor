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
  type = "button",
  tabIndex,
  disabled = false,
  ...props
}: ButtonProps) => {
  const buttonStyle = `btn-${variant}`;
  const sizeStyle = clsx({
    "px-6 py-3 text-lg": size === "large",
    "px-4 py-2 text-base": size === "medium",
    "px-2 py-1 text-sm": size === "small",
  });

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
