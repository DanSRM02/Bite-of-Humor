"use client";
import useInteractiveForm from "@/hooks/useInteractiveForm";
import { FieldBlueprintType, FormFieldProps } from "@/types/baseFieldTypes";
import React from "react";
import Form from "..";

type InteractiveFormProps = {
  fieldsBlueprint: FieldBlueprintType[];
  initialDynamicInputAttributes: Record<string, any>;
};

const InteractiveForm = ({
  fieldsBlueprint,
  initialDynamicInputAttributes,
}: InteractiveFormProps) => {
  const { handleInputChange, formState } = useInteractiveForm(
    initialDynamicInputAttributes
  );

  const fieldsWithDynamicAttributes: FormFieldProps[] = fieldsBlueprint.map(
    (field) => {
      if (field.type === "checkbox") {
        return {
          ...field,
          checked: formState[field.id],
        };
      }

      if (field.type === "selectMultiple") {
        const newMultipleOptions = field.multipleOptions?.map((group) => ({
          ...group,
          options: group.options.map((option) => ({
            ...option,
            checked: formState.flags[option.value],
          })),
        }));
        return { ...field, multipleOptions: newMultipleOptions };
      }

      return {
        ...field,
        value: formState[field.id],
      };
    }
  );

  return (
    <Form
      idForm="complete-joke"
      inputFields={fieldsWithDynamicAttributes}
      actionForm=""
      onClickField={handleInputChange}
      legendHeading="common.none"
    />
  );
};

export default InteractiveForm;
