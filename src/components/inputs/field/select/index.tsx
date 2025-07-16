import { BaseFieldImpl, SelectOption } from "@/types/baseFieldTypes";
import { formatText } from "@/utils/verifyTextFormat";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { Ref } from "react";

export type SelectFieldProps = BaseFieldImpl & {
  color?: string;
  refSelect?: Ref<HTMLSelectElement>;
  options?: SelectOption[];
  disableLabel?: string;  
};

const SelectField = ({
  id,
  label = "common.none",
  onChange,
  isTextRaw = false,  
  options,
  nameInput,
  disableLabel = "common.none",
  color = "primary",
}: SelectFieldProps) => {
  const t = useTranslations();
  const formattedDisableLabel = formatText(isTextRaw, disableLabel, t);
  const formattedLabel = formatText(isTextRaw, label, t);

  const selectedClass = clsx(    
    "border border-gray-300 rounded-lg p-4 text-base font-sans w-full",
    color === "primary" ? "bg-white text-gray-800" : "bg-gray-100 text-gray-800"    
  );

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-semibold mb-2">
        {formattedLabel}
      </label>

      <select        
        name={nameInput}
        onChange={onChange}
        id={id}
        className={selectedClass}
      >
        <option value="">{formattedDisableLabel}</option>

        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {formatText(option.isTextRaw, option.label, t)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
