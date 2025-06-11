"use client";
import LeadIn from "@/components/dataDisplay/LeadIn";
// import classes from "./SignUp.module.scss";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import Button from "@/components/inputs/button";
import { redirect } from "next/navigation";
import TextareaField from "@/components/inputs/field/textarea";
import DefaultField from "@/components/inputs/field/default";

function SignUp() {
  const { t } = useTranslation();

  const handleRedirect = () => {
    redirect("select-country");
  };

  const translations = useMemo(
    () => ({
      intro: {
        heading: t("ComedianSignUpForm.introduction.heading"),
        paragraph: t("ComedianSignUpForm.introduction.paragraph"),
      },
      fields: {
        name: {
          placeholder: t("ComedianSignUpForm.fields.namePlaceholder"),
          label: t("ComedianSignUpForm.fields.nameLabel"),
        },
        email: {
          placeholder: t("ComedianSignUpForm.fields.emailPlaceholder"),
          label: t("ComedianSignUpForm.fields.emailLabel"),
        },
        joke: {
          placeholder: t("ComedianSignUpForm.fields.jokePlaceholder"),
          label: t("ComedianSignUpForm.fields.jokeLabel"),
        },
      },
      actions: {
        submitButton: t("ComedianSignUpForm.actions.submitButton"),
      },
    }),
    [t]
  );

  return (
    <>
      <section
        className="flex justify-center items-center flex-wrap p-12 gap-8 min-h-[37rem] border-2 border-gray-300 rounded-lg"
        aria-label="Sign up section"
        tabIndex={0}
      >
        <LeadIn
          heading={translations.intro.heading}
          paragraph={translations.intro.paragraph}
        />
        <form
          className="flex flex-col gap-6 w-full max-w-[45rem] mt-12"
          aria-label="Comedian sign up form"
        >
          <fieldset className="border-2 border-gray-300 rounded-2xl p-8 mb-8 bg-gray-100 shadow-md relative min-w-0">
            <legend className="text-lg font-bold default-text-color px-4 mb-4 bg-white rounded-lg shadow-sm relative">
              {translations.intro.heading}
            </legend>
            <span className="flex flex-wrap mb-6 justify-stretch flex-row gap-4">
              <DefaultField
                placeholder={translations.fields.name.placeholder}
                label={translations.fields.name.label}
                color="primary"
                type="text"
                id="comedian-name"
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
            </span>
            <TextareaField
              id="comedian-joke"
              placeholder={translations.fields.joke.placeholder}
              label={translations.fields.joke.label}
              color="primary"
              rows={5}
              aria-label={translations.fields.joke.label}
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

export default SignUp;
