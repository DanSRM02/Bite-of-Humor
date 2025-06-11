"use client"
import LeadIn from "@/components/dataDisplay/LeadIn";
// import classes from "./LogIn.module.scss";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import Button from "@/components/inputs/button";
import DefaultField from "@/components/inputs/field/default";
import { redirect } from "next/navigation";

function LogIn() {
  const { t } = useTranslation();  

  const handleRedirect = () => {
    redirect("select-country");
  };

  const translations = useMemo(
    () => ({
      intro: {
        heading: t("ComedianLoginForm.introduction.heading"),
        paragraph: t("ComedianLoginForm.introduction.paragraph"),
      },
      fields: {
        name: {
          placeholder: t("ComedianLoginForm.fields.namePlaceholder"),
          label: t("ComedianLoginForm.fields.nameLabel"),
        },
        email: {
          placeholder: t("ComedianLoginForm.fields.emailPlaceholder"),
          label: t("ComedianLoginForm.fields.emailLabel"),
        },
      },
      actions: {
        submitButton: t("ComedianLoginForm.actions.submitButton"),
      },
    }),
    [t]
  );

  return (
    <>
      <section
        className="flex justify-center items-center flex-wrap p-12 min-h-[35rem] gap-8 border-2 border-gray-300 rounded-lg"
        aria-label="Log in section"
        tabIndex={0}
      >
        <LeadIn
          heading={translations.intro.heading}
          paragraph={translations.intro.paragraph}
        />
        <form
          className="flex flex-col gap-6 w-full max-w-[550px]"
          aria-label="Comedian log in form"
        >
          <fieldset className="border-2 border-gray-300 rounded-2xl p-8 mb-8 bg-gray-100 shadow-md relative min-w-0">
            <legend className="text-lg font-bold default-text-color px-4 mb-4 bg-white rounded-lg shadow-sm relative">
              {translations.intro.heading}
            </legend>
            <DefaultField
              id="comedian-name"
              placeholder={translations.fields.name.placeholder}
              label={translations.fields.name.label}
              color="primary"
              type="text"
              aria-label={translations.fields.name.label}
            />

            <DefaultField
              id="comedian-email"
              placeholder={translations.fields.email.placeholder}
              label={translations.fields.email.label}
              color="primary"
              type="email"
              aria-label={translations.fields.email.label}
            />
          </fieldset>
          <Button
            type="button"
            variant={"primary"}
            size="medium"
            onClick={handleRedirect}
            aria-label={translations.actions.submitButton}
            tabIndex={0}
          >
            {translations.actions.submitButton}
          </Button>
        </form>
      </section>
    </>
  );
}

export default LogIn;
