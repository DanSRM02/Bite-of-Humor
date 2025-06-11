import { BaseFieldImpl } from "@/types/baseFieldTypes";
import { type ReactNode, Ref } from "react";

type DefaultFieldProps = BaseFieldImpl & {
  color?: string;
  refInput?: Ref<HTMLInputElement>;
};

const DefaultField = ({
  id,
  label,
  placeholder,
  type = "text",
  color = "primary",
  ...props
}: DefaultFieldProps) => {
  return (
    <div className="flex flex-col">
      {label && <label htmlFor={id} className="font-semibold mb-2">{label}</label>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`border border-gray-300 rounded-lg p-4 text-base ${
          color === "primary" ? "bg-white text-gray-800" : "bg-gray-100 text-gray-800"
        }`}
        {...props}
      />
    </div>
  );
};

export default DefaultField;
