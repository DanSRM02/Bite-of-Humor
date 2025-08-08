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
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-semibold text-stone-700">
        {formattedLabel}
      </label>
      <textarea
        onChange={onChange}
        id={id}
        name={nameInput}
        placeholder={formattedPlaceholder || undefined}
        rows={rows}
        className={`border border-stone-300 rounded-lg p-4 text-base font-sans w-full resize-vertical min-h-[120px] focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-stone-400 transition-all duration-200 ${
          color === "primary"
            ? "bg-stone-50 text-stone-800 placeholder-stone-400"
            : "bg-stone-100 text-stone-800 placeholder-stone-500"
        }`}
        {...props}
      ></textarea>
    </div>
  );
};

export default TextareaField;
