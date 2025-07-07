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
  type = "text",
  isTextRaw = false,
  color = "primary",
}: DefaultFieldProps) => {
  const t  = useTranslations();
  const formattedPlaceholder = formatText(isTextRaw, placeholder, t);
  const formattedLabel = formatText(isTextRaw, label, t)

  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={`comedian-${id}`} className="font-semibold mb-2">
          {formattedLabel}
        </label>
      )}
      <input
        onChange={onChange}
        id={`comedian-${id}`}
        name={id}
        type={type}
        placeholder={formattedPlaceholder}
        className={`border border-gray-300 rounded-lg p-4 text-base ${
          color === "primary"
            ? "bg-white text-gray-800"
            : "bg-gray-100 text-gray-800"
        }`}
      />
    </div>
  );
};

export default DefaultField;
