import { BaseFieldImpl } from "@/types/baseFieldTypes";
import { formatText } from "@/utils/verifyTextFormat";
import { useTranslations } from "next-intl";
import { type ReactNode, Ref } from "react";

export type TextareaFieldProps = BaseFieldImpl & {
  color?: string;
  rows?: number;
  cols?: number;
  children?: ReactNode;
  refAreatext?: Ref<HTMLTextAreaElement>;
};

const TextareaField = ({
  id,
  label = "common.none",
  placeholder = "common.none",
  isTextRaw = false,
  onChange,
  rows = 3,
  nameInput,
  color = "primary",
  ...props
}: TextareaFieldProps) => {
  const t = useTranslations();
  const formattedPlaceholder = formatText(isTextRaw, placeholder, t);
  const formattedLabel = formatText(isTextRaw, label, t);
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-semibold mb-2">
        {formattedLabel}
      </label>
      <textarea
        onChange={onChange}
        id={id}
        name={nameInput}
        placeholder={formattedPlaceholder || undefined}
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
