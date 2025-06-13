import { BaseFieldImpl } from "@/types/baseFieldTypes";
import { useTranslation } from "react-i18next";

export type SelectFieldProps = BaseFieldImpl & {
  color?: string;
  refSelect?: React.Ref<HTMLSelectElement>;
  options?: { label: string; value: string }[];
  disableLabel?: string;
};

const SelectField = ({
  id,
  label,
  onChange,
  options,
  disableLabel,
  color = "primary",
}: SelectFieldProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center">
      {label && (
        <label htmlFor={`comedian-${id}`} className="font-semibold mb-2">
          {t(label)}
        </label>
      )}
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
        <option value="">
          {t(disableLabel || "")}
        </option>
        {options?.map((option) => (
          <option key={option.value} value={t(option.value)}>
            {t(option.label)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
