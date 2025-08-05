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
    "border border-stone-300 rounded-lg p-4 pr-10 text-base font-sans w-full focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-stone-400 transition-all duration-200 appearance-none cursor-pointer",
    color === "primary" 
      ? "bg-stone-50 text-stone-800" 
      : "bg-stone-100 text-stone-800"    
  );

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-semibold text-stone-700">
        {formattedLabel}
      </label>

      <div className="relative">
        <select        
          name={nameInput}
          onChange={onChange}
          id={id}
          className={selectedClass}
        >
          <option value="" className="text-stone-500">
            {formattedDisableLabel}
          </option>

          {options?.map((option) => (
            <option key={option.value} value={option.value} className="text-stone-800">
              {formatText(option.isTextRaw, option.label, t)}
            </option>
          ))}
        </select>
        
        {/* Custom dropdown arrow */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg 
            className="w-5 h-5 text-stone-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SelectField;
