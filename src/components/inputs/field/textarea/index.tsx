import { BaseFieldImpl } from "@/types/baseFieldTypes";
import { type ReactNode, Ref } from "react";
import { useTranslation } from "react-i18next";

export type TextareaFieldProps = BaseFieldImpl & {
  color?: string;
  rows?: number;
  cols?: number;
  children?: ReactNode;
  refAreatext?: Ref<HTMLTextAreaElement>;
};

const TextareaField = ({
  id,
  label,
  placeholder,
  onChange,
  rows = 3,
  color = "primary",
  ...props
}: TextareaFieldProps) => {
  const { t } = useTranslation();

  if (onChange) {
    throw new Error("This change function don't work");
  }
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={`comedian-${t(id)}`} className="font-semibold mb-2">
          {t(label)}
        </label>
      )}
      <textarea
        onChange={onChange}
        id={`comedian-${t(id)}`}
        placeholder={t(placeholder || "")}
        rows={rows}
        className={`border border-gray-300 rounded-lg p-4 text-base font-sans max-w-full max-h-min ${
          color === "primary"
            ? "bg-white text-gray-800"
            : "bg-gray-100 text-gray-800"
        }`}
        {...props}
      ></textarea>
    </div>
  );
};

export default TextareaField;
