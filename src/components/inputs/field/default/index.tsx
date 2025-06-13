import { BaseFieldImpl } from "@/types/baseFieldTypes";
import { Ref } from "react";
import { useTranslation } from "react-i18next";

export type DefaultFieldProps = BaseFieldImpl & {
  color?: string;
  refInput?: Ref<HTMLInputElement>;
};

const DefaultField = ({
  id,
  label,
  placeholder,
  onChange,
  type = "text",
  color = "primary",
}: DefaultFieldProps) => {
  const { t } = useTranslation();
  if (onChange) {
    throw new Error("This change function don't work");
  }
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={`comedian-${id}`} className="font-semibold mb-2">
          {t(label)}
        </label>
      )}
      <input
        onChange={onChange}
        id={`comedian-${id}`}
        type={type}
        placeholder={t(placeholder || "")}
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
