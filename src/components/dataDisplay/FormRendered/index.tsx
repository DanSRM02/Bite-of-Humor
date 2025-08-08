import { BaseFieldImpl, FormFieldProps } from "@/types/baseFieldTypes";
import { fieldTypeToComponent } from "@/utils/constants";

type FormVariant = "form" | "filter" | "inline";

type FormRenderedProps = {
  inputFields: BaseFieldImpl[] | FormFieldProps[];
  handlerChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  variant?: FormVariant;
  className?: string;
};

const VARIANT_STYLES = {
  container: {
    form: "flex flex-col gap-4 sm:gap-5",
    filter: "flex flex-col lg:flex-row gap-4",
    inline: "flex flex-col sm:flex-row  gap-3 sm:gap-4",
  },
  field: {
    form: "w-full",
    filter: "w-full",
    inline: "flex-1 min-w-[200px]",
  },
} as const;

export default function FormRendered({
  inputFields,
  handlerChange,
  variant = "form",
  className = "",
}: FormRenderedProps) {
  const containerStyles = VARIANT_STYLES.container[variant];
  const fieldStyles = VARIANT_STYLES.field[variant];

  return (
    <div className={`${containerStyles} ${className}`}>
      {inputFields.map((field) => {
        const { type, ...restProps } = field;
        const InputField = fieldTypeToComponent[type || "text"];

        if (!InputField) {
          throw new Error(`Input field type "${type}" does not exist`);
        }

        return (
          <div key={field.id} className={fieldStyles}>
            <InputField
              {...restProps}
              type={type}
              onChange={handlerChange}
              required
            />
          </div>
        );
      })}
    </div>
  );
}
