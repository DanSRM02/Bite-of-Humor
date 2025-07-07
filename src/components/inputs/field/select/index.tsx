import { BaseFieldImpl } from "@/types/baseFieldTypes";
import { formatText } from "@/utils/verifyTextFormat";
import { useTranslations } from "next-intl";
import { Ref } from "react";

export type SelectFieldProps = BaseFieldImpl & {
  color?: string;
  refSelect?: Ref<HTMLSelectElement>;
  options?: { label: string; value: string; isTextRawOpt: boolean }[];
  disableLabel?: string;
  isTextRawOpt?: boolean;
};

const SelectField = ({
  id,
  label = "common.none",
  onChange,
  isTextRaw = false,
  options,
  disableLabel = "common.none",
  color = "primary",
}: SelectFieldProps) => {
  const t = useTranslations();
  const formattedDisableLabel = formatText(isTextRaw, disableLabel, t);
  const formattedLabel = formatText(isTextRaw, label, t);

  return (
    <div className="flex flex-col items-center">
      <label htmlFor={`comedian-${id}`} className="font-semibold mb-2">
        {formattedLabel}
      </label>

      <select
        name={id}
        onChange={onChange}
        id={`comedian-${id}`}
        className={`border border-gray-300 rounded-lg p-4 text-base font-sans ${
          color === "primary"
            ? "bg-white text-gray-800"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        <option value="">{formattedDisableLabel}</option>

        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {formatText(option.isTextRawOpt, option.label, t)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
