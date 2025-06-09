import { BaseFieldImpl } from "@/types/baseFieldTypes";
import { type ReactNode, Ref } from "react";

type DefaultFieldProps = BaseFieldImpl & {
  color?: string;
  refInput?: Ref<HTMLInputElement>;
};

const DefaultField = ({
  color = "default",
  disabled = false,
  error = false,
  onChange,
  id,
  placeholder,
  type = "text",
  label,
  value,
  refInput,
  required = false,
}: DefaultFieldProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        ref={refInput}
        disabled={disabled}
        required={required}
        aria-invalid={error}
      />
    </div>
  );
};

export default DefaultField;
