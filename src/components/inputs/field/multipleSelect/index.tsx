import { BaseFieldImpl, SelectOption } from "@/types/baseFieldTypes";
import CheckboxField from "../checkbox";
import { useTranslations } from "next-intl";
import { formatText } from "@/utils/verifyTextFormat";

type MultipleSelectProps = BaseFieldImpl & {
  multipleOptions?: {
    groupLabel: string;
    isGroupTextRaw?: boolean;
    options: SelectOption[];
  }[];
};

const MultipleSelectField = (props: MultipleSelectProps) => {
  const t = useTranslations();
  const { onChange, multipleOptions } = props;
  return (
    <>
      {multipleOptions?.map(({ groupLabel, isGroupTextRaw = false, options }) => (
        <fieldset
          className="flex flex-wrap gap-5 border-dashed rounded-xl justify-center p-5 border-1 "
          key={groupLabel.charAt(2)}
        >
          <legend className="font-bold p-2">
            {formatText(isGroupTextRaw, groupLabel, t)}
          </legend>
          {options.map((option, index) => (
            <CheckboxField
              key={index}
              id={option.value}
              nameInput={option.nameInput}
              label={option.label}
              isTextRaw={option.isTextRaw}
              value={option.value}
              checked={option.checked}
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
