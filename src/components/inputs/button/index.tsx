import type { ReactNode, Ref } from "react";
import clsx from "clsx";

export type ButtonProps = {
  variant: "primary" | "secondary" | string;
  size: string;
  children?: ReactNode;
  label?: string;
  type?: "button" | "submit" | "reset";
  icon?: string;
  refButton?: Ref<HTMLButtonElement> | null;
  onClick?: () => void;
  disabled?: boolean;  
  loading?: boolean;
};

const Button = ({
  children,
  refButton,  
  onClick,
  loading,
  variant,
  size,
  type = "button",
  disabled = false,
}: ButtonProps) => {  
  const buttonStyle = `btn-${variant}`;
  const sizeStyle = clsx({
    "px-6 py-3 text-lg": size === "large",
    "px-4 py-2 text-base": size === "medium",
    "px-2 py-1 text-sm": size === "small",
  });
  const loadingStyle = loading ? "animate-spin" : ""

  return (
    <button
      ref={refButton}
      type={type}
      className={clsx(buttonStyle, sizeStyle, loadingStyle)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
