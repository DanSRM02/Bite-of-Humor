import InteractiveForm from "@/components/inputs/form/interactive";
import { inputTypes, SelectOption } from "@/types/baseFieldTypes";
import { AVAILABLE_CATEGORIES_OPTIONS, AVAILABLE_FLAGS_OPTIONS } from "@/utils/constants";
import { getTranslations } from "next-intl/server";

async function WorkshopPage() {
  const t = await getTranslations();
  const initialFieldsWithoutDynamicAttributes = [
    {
      type: "select" as inputTypes,
      label: "WorkshopPage.form.fields.category.label",
      placeholder: "WorkshopPage.form.fields.category.placeholder",
      id: "category",
      nameInput: "category",
      options: AVAILABLE_CATEGORIES_OPTIONS.map(
        (category) =>
          ({
            nameInput: "category",
            isTextRaw: false,
            label: category.label,
            value: category.value,
          } as SelectOption)
      ),
    },
    {
      type: "selectMultiple" as inputTypes,
      label: "WorkshopPage.form.fields.flags.label",
      placeholder: "WorkshopPage.form.fields.flags.placeholder",
      id: "flags",
      nameInput: "flags",
      multipleOptions: [
        {
          groupLabel: "WorkshopPage.form.fields.flags.groupLabel",
          options: AVAILABLE_FLAGS_OPTIONS.map(
            (flag) =>
              ({
                nameInput: flag.value,
                isTextRaw: false,
                label: flag.label,
                value: flag.value,
              } as SelectOption)
          ),
        },
      ],
    },
    {
      type: "text" as inputTypes,
      label: "WorkshopPage.form.fields.setup.label",
      placeholder: "WorkshopPage.form.fields.setup.placeholder",
      id: "setup",
      nameInput: "setup",
      maxLength: 200,
    },
    {
      type: "textarea" as inputTypes,
      label: "WorkshopPage.form.fields.punchline.label",
      placeholder: "WorkshopPage.form.fields.punchline.placeholder",
      id: "punchline",
      nameInput: "punchline",
      maxLength: 300,
    },
  ];

  return (
    <>
      <h3 className="font-medium">{t("WorkshopPage.form.title")}</h3>
      <InteractiveForm
        fieldsBlueprint={initialFieldsWithoutDynamicAttributes}
      />
    </>
  );
}

export default WorkshopPage;
