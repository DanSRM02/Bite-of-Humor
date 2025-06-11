import { BaseFieldImpl } from "@/types/baseFieldTypes";

type SelectFieldProps = BaseFieldImpl & {
  color?: string;  
  refSelect?: React.Ref<HTMLSelectElement>;
  options?: { label: string; value: string | number }[];
};

const SelectField = ({
  id,
  label,
  options,
  color = "primary",
  ...props
}: SelectFieldProps) => {
  return (
    <div className="flex flex-col items-center">
      {label && <label htmlFor={id} className="font-semibold mb-2">{label}</label>}
      <select
        id={id}
        className={`border border-gray-300 rounded-lg p-4 text-base font-sans ${
          color === "primary" ? "bg-white text-gray-800" : "bg-gray-100 text-gray-800"
        }`}
        {...props}
      >
        {options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
