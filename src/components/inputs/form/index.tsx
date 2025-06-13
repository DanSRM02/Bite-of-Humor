import { inputTypes } from "@/types/baseFieldTypes";
import Button from "../button";
import { fieldTypeToComponent } from "@/utils/const";
import Heading from "@/components/dataDisplay/Heading";

type FormProps = {
  inputFields: {
    placeholder: string;
    label: string;
    id: string;
    type: inputTypes;
  }[];
  legendHeading: string;
  textButton: string;
  actionForm: string;
  handleClick: () => void;
  handleSubmit: () => string[];
};

export default function Form({
  legendHeading,
  handleClick,
  textButton,
  handleSubmit,
  inputFields,
  actionForm,
}: FormProps) {
  const renderInputFields = () => {
    return inputFields.map((inputField) => {
      const InputField = fieldTypeToComponent[inputField.type];

      if (!InputField) {
        throw new Error("That Input doesn't exist");
      }

      return (
        <InputField
          key={inputField.id}
          label={inputField.label}
          id={inputField.id}
          placeholder={inputField.placeholder}
        />
      );
    });
  };

  return (
    <form
      className="flex flex-col gap-6 w-full max-w-[45rem] mt-12"
      aria-label="Comedian sign up form"
      action={actionForm}
      onSubmit={handleSubmit}
    >
      <fieldset className="border-2 border-gray-300 rounded-2xl p-8 mb-8 bg-gray-100 shadow-md relative min-w-0">
        <legend className="text-lg font-bold default-text-color px-4 mb-4 bg-white rounded-lg shadow-sm relative">
          <Heading level={6}>{legendHeading}</Heading>
        </legend>
        {renderInputFields()}
      </fieldset>
      <Button
        type="button"
        variant={"primary"}
        size="medium"
        onClick={handleClick}
      >
        {textButton}
      </Button>
    </form>
  );
}
