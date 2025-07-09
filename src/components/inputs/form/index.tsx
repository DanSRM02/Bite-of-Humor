import { BaseFieldImpl } from "@/types/baseFieldTypes";
import Button from "../button";
import FormRendered from "@/components/dataDisplay/formRendered";
import Heading from "@/components/dataDisplay/heading";
import { ReactNode } from "react";

type FormProps = {
  idForm: string;
  inputFields: BaseFieldImpl[];
  legendHeading: string;
  textButton?: string;
  actionForm: string;
  onClickButton?: () => void;
  onClickField: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  children?: ReactNode;
};

const Form = (props: FormProps) => {
  const {
    legendHeading,
    onClickButton,
    onClickField,
    textButton,
    inputFields,
    idForm,
    actionForm,
    children,
  } = props;
  return (
    <form
      id={idForm}
      className="flex flex-col gap-6 w-full max-w-[45rem] mt-12"
      aria-label="Comedian sign up form"
      action={actionForm}
    >
      <fieldset className="border-2 border-gray-300 rounded-2xl p-8 mb-8 bg-gray-100 shadow-md relative min-w-0 flex flex-col gap-5">
        <legend className="text-lg font-bold default-text-color px-4 mb-4 bg-white rounded-lg shadow-sm relative ">
          <Heading level={6}>{legendHeading}</Heading>
        </legend>
        {children}
        <FormRendered inputFields={inputFields} handlerChange={onClickField} />
      </fieldset>
      {textButton && onClickButton && (
        <Button
          type="button"
          variant={"primary"}
          size="medium"
          onClick={onClickButton}
        >
          {textButton}
        </Button>
      )}
    </form>
  );
};

export default Form;
