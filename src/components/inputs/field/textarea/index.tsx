import { BaseFieldImpl } from "@/types/baseFieldTypes";
import { type ReactNode, Ref } from "react";

type TextareaFieldProps = BaseFieldImpl & {
  color?: string;
  rows?: number;
  cols?: number;
  children?: ReactNode;
  refAreatext?: Ref<HTMLTextAreaElement>;
};

const TextareaField = ({
  color = "default",
  disabled = false,
  error = false,
  onChange,
  id,
  placeholder,
  label,
  value,
  rows,
  cols,
  refAreatext,
  children,
  required = false,
}: TextareaFieldProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        ref={refAreatext}
        aria-invalid={error}
      >
        {children}
      </textarea>
    </div>
  );
};

export default TextareaField;
