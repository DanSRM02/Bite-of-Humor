import type { ReactNode, Ref } from "react";
import clsx from "clsx";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  ref?: Ref<HTMLButtonElement>;
  onClick?: () => void;
  disabled?: boolean;
  form?: string;
  className?: string;
  "aria-label"?: string;
}

const Button = ({
  children,
  ref,
  form,
  onClick,
  variant = "primary",
  size = "medium",
  type = "button",
  disabled = false,
  className,
  "aria-label": ariaLabel,
}: ButtonProps) => {
  const buttonStyle = `btn-${variant}`;
  const sizeStyle = clsx({
    "px-6 py-3 text-lg": size === "large",
    "px-4 py-2 text-base": size === "medium",
    "px-2 py-1 text-sm": size === "small",
  });

  return (
    <button
      ref={ref}
      form={form}
      type={type}
      className={clsx(buttonStyle, sizeStyle, className)}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
