import { BaseFieldImpl } from "@/types/baseFieldTypes";
import { formatText } from "@/utils/verifyTextFormat";
import { useTranslations } from "next-intl";
import { Ref } from "react";

export type CheckboxProps = BaseFieldImpl & {
  color?: string;
  refInput?: Ref<HTMLInputElement>;
  checked?: boolean;
};

const CheckboxField = ({
  disabled = false,
  error = false,
  onChange,
  isTextRaw = false,
  id,
  nameInput,
  label = "common.none",
  checked,
  refInput,
  required = false,
}: CheckboxProps) => {
  const t = useTranslations();
  const formattedLabel = formatText(isTextRaw, label, t);

  return (
    <label
      htmlFor={id}
      className="flex flex-col-reverse items-center cursor-pointer gap-2 relative select-none group"
    >
      <input
        type="checkbox"
        name={nameInput}
        id={id}
        checked={checked}
        ref={refInput}
        onChange={onChange}
        disabled={disabled}
        required={required}
        aria-invalid={error}
        className="absolute opacity-0 w-0 h-0 focus:outline-none"
      />
      <span
        className={`inline-block w-10 h-6 rounded-full relative transition-all duration-200 ring-2 ring-offset-1 ${
          checked 
            ? "bg-stone-700 ring-stone-700" 
            : "bg-stone-200 ring-stone-300"
        } ${
          disabled 
            ? "opacity-50 cursor-not-allowed" 
            : "group-hover:ring-stone-400"
        }`}
      >
        <span
          className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 shadow-sm ${
            checked ? "transform translate-x-4" : ""
          }`}
        ></span>
      </span>

      <span 
        className={`font-medium cursor-pointer text-center text-sm ${
          disabled 
            ? "text-stone-400" 
            : "text-stone-700"
        }`}
      >
        {formattedLabel}
      </span>
    </label>
  );
};

export default CheckboxField;
