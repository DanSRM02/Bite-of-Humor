import { BaseFieldImpl } from "@/types/baseFieldTypes";
import { fieldTypeToComponent } from "@/utils/const";

type FormRenderedProps = {
  inputFields: BaseFieldImpl[];
  handlerChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
};
export default function FormRendered({
  inputFields,
  handlerChange,
}: FormRenderedProps) {
  return inputFields.map((field) => {
    const { type, ...restProps } = field;
    const InputField = fieldTypeToComponent[type || "text"];
  
    if (!InputField) {
      throw new Error("That Input doesn't exist");
    }

    return (
      <InputField
        key={field.id}
        onChange={handlerChange}
        {...restProps}
        required
      />
    );
  });
}
