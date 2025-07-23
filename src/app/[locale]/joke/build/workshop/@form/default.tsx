import InteractiveForm from "@/components/inputs/form/interactive";
import { inputTypes, SelectOption } from "@/types/baseFieldTypes";
import { AVAILABLE_CATEGORIES_OPTIONS, AVAILABLE_FLAGS_OPTIONS } from "@/utils/constants";

function WorkshopPage() {
  const initialFieldsWithoutDynamicAttributes = [
    {
      type: "select" as inputTypes,
      label: "common.none",
      placeholder: "common.all",
      id: "category",
      nameInput: "category",
      options: AVAILABLE_CATEGORIES_OPTIONS.map(
        (category) =>
          ({
            nameInput: "category",
            isTextRaw: true,
            label: category.label,
            value: category.value,
          } as SelectOption)
      ),
    },
    {
      type: "selectMultiple" as inputTypes,
      label: "common.none",
      placeholder: "common.all",
      id: "flags",
      nameInput: "flags",
      multipleOptions: [
        {
          groupLabel: "Flag",
          options: AVAILABLE_FLAGS_OPTIONS.map(
            (flag) =>
              ({
                nameInput: flag.value,
                isTextRaw: true,
                label: flag.label,
                value: flag.value,
              } as SelectOption)
          ),
        },
      ],
    },
    {
      type: "text" as inputTypes,
      label: "common.none",
      placeholder: "common.all",
      id: "setup",
      nameInput: "setup",
    },
    {
      type: "textarea" as inputTypes,
      label: "common.none",
      placeholder: "common.all",
      id: "punchline",
      nameInput: "punchline",
    },
  ];

  return (
    <>
      <h3 className="font-medium">Form Joke</h3>
      <InteractiveForm
        fieldsBlueprint={initialFieldsWithoutDynamicAttributes}
      />
    </>
  );
}

export default WorkshopPage;
