"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import Button from "..";
import { FormStateAction } from "@/types/formTypes";
import Heading from "@/components/dataDisplay/heading";
import { useTranslations } from "next-intl";

type ButtonSubmitProps = {
  textButton: string;
  actionState: FormStateAction;
};

const ButtonSubmitForm = ({ textButton, actionState }: ButtonSubmitProps) => {
  const status = useFormStatus();
  const t =  useTranslations();

  return (
    <>
      <Button type="submit" variant={"primary"} size="medium">
        {status.pending ? t("JokePage.loadingMessage") : textButton}
      </Button>
      {actionState.errors && (
        <ul className="text-center text-red-600">
          {actionState.message && (
            <Heading level={5} isTextRaw>
              {actionState.message}
            </Heading>
          )}
          {actionState.errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ButtonSubmitForm;
