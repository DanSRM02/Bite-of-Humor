"use client";
import { FieldBlueprintType, FormFieldProps } from "@/types/baseFieldTypes";
import React, { ChangeEvent } from "react";
import Form from "..";
import { useJokeSubmission } from "@/contexts/JokeSubmissionContext";
import { FormStateAction } from "@/types/formTypes";
import { useTranslations } from "next-intl";

type InteractiveFormProps = {
  fieldsBlueprint: FieldBlueprintType[];
  actionForm: (prevState: FormStateAction, formData: FormData) => Promise<FormStateAction>;
  initialStateForm: FormStateAction;
  onSubmissionSuccess?: () => void;
};

const InteractiveForm = ({ 
  fieldsBlueprint, 
  actionForm, 
  initialStateForm,
  onSubmissionSuccess 
}: InteractiveFormProps) => {
  const { jokeSubmissionData, setJokeSubmissionData } = useJokeSubmission();
  const t = useTranslations();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const valueCheckbox = (e.target as HTMLInputElement).checked;

    const valueToSet = type === "checkbox" ? valueCheckbox : value;

    setJokeSubmissionData((prevState) => {
      if (
        prevState.flags &&
        typeof prevState.flags === "object" &&
        name in prevState.flags
      ) {
        return {
          ...prevState,
          flags: { ...prevState.flags, [name]: valueCheckbox },
        };
      } else {
        return { ...prevState, [name]: valueToSet };
      }
    });
  };

  const fieldsWithDynamicAttributes: FormFieldProps[] = fieldsBlueprint.map(
    (field) => {
      if (field.type === "checkbox") {
        return {
          ...field,
          checked: jokeSubmissionData.flags[field.id],
        };
      }

      if (field.type === "selectMultiple") {
        const newMultipleOptions = field.multipleOptions?.map((group) => ({
          ...group,
          options: group.options.map((option) => ({
            ...option,
            checked: jokeSubmissionData.flags[option.value] ?? false,
          })),
        }));
        return { ...field, multipleOptions: newMultipleOptions };
      }

      return {
        ...field,
        value: String(
          jokeSubmissionData[field.id as keyof typeof jokeSubmissionData]
        ),
      };
    }
  );

  return (
    <Form
      idForm="complete-joke"
      inputFields={fieldsWithDynamicAttributes}
      actionForm={actionForm}
      initialStateForm={initialStateForm}
      onClickField={handleInputChange}
      legendHeading="WorkshopPage.form.legend"
      textButton={t("WorkshopPage.form.sendButton")}
    />
  );
};

export default InteractiveForm;
