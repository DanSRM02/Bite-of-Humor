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
    <label>
      <input
        type={type}
        id={id}
        checked={checked}
        ref={refInput}
        onChange={onChange}
        disabled={disabled}
        required={required}
        aria-invalid={error}
      />
      {label && <span>{label}</span>}
    </label>
  );
};

export default CheckboxField;
