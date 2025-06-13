import type { ReactNode, Ref } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

type ButtonProps = {
  variant: "primary" | "secondary" | string;
  size: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  icon?: string;
  refButton?: Ref<HTMLButtonElement> | null;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({
  children,
  refButton,
  onClick,
  variant,
  size,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  const { t } = useTranslation();
  const buttonStyle = `btn-${variant}`;
  const sizeStyle = clsx({
    "px-6 py-3 text-lg": size === "large",
    "px-4 py-2 text-base": size === "medium",
    "px-2 py-1 text-sm": size === "small",
  });

  const content = typeof children === "string" ? t(children) : children;

  return (
    <button
      ref={refButton}
      type={type}
      className={clsx(buttonStyle, sizeStyle)}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
