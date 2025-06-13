import { BaseFieldImpl } from "@/types/baseFieldTypes";
import { fieldTypeToComponent } from "@/utils/const";


type FormRenderedProps = {
  inputFields: BaseFieldImpl[];
};
export default function FormRendered({ inputFields }: FormRenderedProps) {
  return inputFields.map((field) => {
    const { type, ...restProps } = field;

    const InputField = fieldTypeToComponent[type || "text"];

    if (!InputField) {
      throw new Error("That Input doesn't exist");
    }

    return <InputField key={field.id} {...restProps} required />;
  });
}
