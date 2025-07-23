"use client";
import React from "react";
import Button from "..";
import { useFormStatus } from "react-dom";
import { FormStateAction } from "@/types/formTypes";
import Heading from "@/components/dataDisplay/heading";

type ButtonSubmitProps = {
  textButton: string;
  actionState: FormStateAction;
};

const ButtonSubmitForm = ({ textButton, actionState }: ButtonSubmitProps) => {
  const status = useFormStatus();

  return (
    <>
      <Button type="submit" variant={"primary"} size="medium">
        {status.pending ? "Cargando..." : textButton}
      </Button>
      {actionState.errors && (
        <ul className="text-center text-red-600">
          <Heading level={5} isTextRaw>
            {actionState.message}
          </Heading>
          {actionState.errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ButtonSubmitForm;
