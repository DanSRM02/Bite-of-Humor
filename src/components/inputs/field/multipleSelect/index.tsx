import { BaseFieldImpl, SelectOption } from "@/types/baseFieldTypes";
import CheckboxField from "../checkbox";

type MultipleSelectProps = BaseFieldImpl & {
  multipleOptions?: {
    groupLabel: string;
    options: SelectOption[];
  }[];
};

const MultipleSelectField = (props: MultipleSelectProps) => {
  const { onChange, multipleOptions } = props;
  return (
    <>
      {multipleOptions?.map(({ groupLabel, options }) => (
        <fieldset
          className="flex flex-wrap gap-5 border-dashed rounded-xl justify-center p-5 border-1 "
          key={groupLabel.charAt(2)}
        >
          <legend className="font-bold p-2">{groupLabel}</legend>
          {options.map((option, index) => (
            <CheckboxField
              key={index}
              id={option.value}
              {...option}
              type="checkbox"
              onChange={onChange}
            />
          ))}
        </fieldset>
      ))}
    </>
  );
};

export default MultipleSelectField;
