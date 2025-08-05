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
    <div className="space-y-6">
      {multipleOptions?.map(({ groupLabel, isGroupTextRaw = false, options }) => (
        <fieldset
          className="flex flex-wrap gap-4 sm:gap-6 border-2 border-dashed border-stone-300 rounded-xl justify-center p-4 sm:p-6 bg-stone-50 hover:bg-stone-100 transition-colors duration-200"
          key={groupLabel.charAt(2)}
        >
          <legend className="font-semibold text-stone-700 px-3 py-1 bg-stone-50 border border-stone-300 rounded-md">
            {formatText(isGroupTextRaw, groupLabel, t)}
          </legend>
          <div className="w-full flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
            {options.map((option, index) => (
              <div key={index} className="flex-shrink-0">
                <CheckboxField
                  id={option.value}
                  nameInput={option.nameInput}
                  label={option.label}
                  isTextRaw={option.isTextRaw}
                  value={option.value}
                  checked={option.checked}
                  type="checkbox"
                  onChange={onChange}
                />
              </div>
            ))}
          </div>
        </fieldset>
      ))}
    </div>
  );
};

export default MultipleSelectField;
