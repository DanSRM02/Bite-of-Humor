import { BaseFieldImpl } from "@/types/baseFieldTypes";

type SelectFieldProps = BaseFieldImpl & {
  color?: string;  
  refSelect?: React.Ref<HTMLSelectElement>;
  children?: React.ReactNode;
};

const SelectField = ({
  color = "default",
  disabled = false,
  error = false,
  onChange,
  id,    
  label,  
  refSelect,
  children,
  required = false,
}: SelectFieldProps) => {
  return (
    <div>      
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        ref={refSelect}
        onChange={onChange}
        disabled={disabled}
        required={required}
        aria-invalid={error}
      >
        {children}
      </select>
    </div>
  );
};

export default SelectField;
