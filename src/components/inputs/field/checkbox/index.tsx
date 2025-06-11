import { BaseFieldImpl } from "@/types/baseFieldTypes";
import { Ref } from "react";

type CheckboxProps = BaseFieldImpl & {
  color?: string;
  refInput?: Ref<HTMLInputElement>;
  checked?: boolean;
};

const CheckboxField = ({
  color = "default",
  disabled = false,
  error = false,
  onChange,
  id,
  type = "checkbox",
  label,
  checked,
  refInput,
  required = false,
}: CheckboxProps) => {
  return (
    <label className="flex flex-col-reverse items-center cursor-pointer gap-2 relative select-none">
      <input
        type={type}
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
        className={`inline-block w-10 h-6 bg-gray-200 rounded-full relative transition-all box-border outline-2 outline-gray-300 ${
          checked ? "bg-white outline-blue-500" : ""
        }`}
      >
        <span
          className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform shadow-md ${
            checked ? "transform translate-x-4 bg-blue-500" : ""
          }`}
        ></span>
      </span>
      {label && <span className="ml-2 font-medium cursor-pointer">{label}</span>}
    </label>
  );
};

export default CheckboxField;
