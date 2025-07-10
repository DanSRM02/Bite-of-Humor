import InteractiveForm from "@/components/inputs/form/interactive";
import { inputTypes, SelectOption } from "@/types/baseFieldTypes";
import { _AVAILABLE_CATEGORIES, _AVAILABLE_FLAGS } from "@/utils/const";

function WorkshopPage() {
  const initialFieldsWithoutDynamicAttributes = [
    {
      type: "select" as inputTypes,
      label: "common.none",
      placeholder: "common.all",
      id: "category",
      options: _AVAILABLE_CATEGORIES.map(
        (category) =>
          ({
            isTextRaw: true,
            label: category,
            value: category,
          } as SelectOption)
      ),
    },
    {
      type: "selectMultiple" as inputTypes,
      label: "common.none",
      placeholder: "common.all",
      id: "flags",
      multipleOptions: [
        {
          groupLabel: "Flag",
          options: _AVAILABLE_FLAGS.map(
            (flag) =>
              ({
                isTextRaw: true,
                label: flag,
                value: flag,
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
    },
    {
      type: "textarea" as inputTypes,
      label: "common.none",
      placeholder: "common.all",
      id: "punchline",
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
