import { BaseFieldImpl } from "@/types/baseFieldTypes";
import { formatText } from "@/utils/verifyTextFormat";
import { useTranslations } from "next-intl";
import { Ref } from "react";

export type DefaultFieldProps = BaseFieldImpl & {
  color?: string;
  refInput?: Ref<HTMLInputElement>;
};

const DefaultField = ({
  id,
  label = "common.none",
  placeholder = "common.none",
  onChange,
  nameInput,
  type = "text",
  isTextRaw = false,
  color = "primary",
}: DefaultFieldProps) => {
  const t  = useTranslations();
  const formattedPlaceholder = formatText(isTextRaw, placeholder, t);
  const formattedLabel = formatText(isTextRaw, label, t)

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="font-semibold text-stone-700">
          {formattedLabel}
        </label>
      )}
      <input
        onChange={onChange}
        id={id}
        name={nameInput}
        type={type}
        placeholder={formattedPlaceholder || undefined}
        className={`w-full border border-stone-300 rounded-lg p-4 text-base focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-stone-400 transition-all duration-200 ${
          color === "primary"
            ? "bg-stone-50 text-stone-800 placeholder-stone-400"
            : "bg-stone-100 text-stone-800 placeholder-stone-500"
        } ${
          type === "password" 
            ? "font-mono tracking-wider" 
            : ""
        }`}
        autoComplete={type === "password" ? "current-password" : "off"}
      />
    </div>
  );
};

export default DefaultField;
