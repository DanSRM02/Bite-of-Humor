"use client";
import Form from "@/components/inputs/form";
import { useRouter } from "next/navigation";
import { inputTypes } from "@/types/baseFieldTypes";
import LeadIn from "@/components/dataDisplay/leadIn";
import { useTranslations } from "next-intl";

function SignUp() {
  const router = useRouter();
  const t = useTranslations();
  const translations = {
    intro: {
      heading: "ComedianSignUpForm.introduction.heading",
      paragraph: "ComedianSignUpForm.introduction.paragraph",
    },
    fields: [
      {
        placeholder: "ComedianSignUpForm.fields.namePlaceholder",
        label: "ComedianSignUpForm.fields.nameLabel",
        id: "name",
        type: "text" as inputTypes,
      },
      {
        placeholder: "ComedianSignUpForm.fields.emailPlaceholder",
        label: "ComedianSignUpForm.fields.emailLabel",
        id: "email",
        type: "email" as inputTypes,
      },

      {
        placeholder: "ComedianSignUpForm.fields.jokePlaceholder",
        label: "ComedianSignUpForm.fields.jokeLabel",
        id: "joke",
        type: "textarea" as inputTypes,
      },
    ],
    actions: {
      legendHeading: "ComedianSignUpForm.actions.legendHeading",
      submitButton: t("ComedianSignUpForm.actions.submitButton"),
    },
  };

  const handleRedirect = () => {
    router.push("select-country");
  };

  return (
    <section
      className="flex justify-center items-center flex-wrap p-12 gap-8 min-h-[37rem] border-2 border-gray-300 rounded-lg"
      aria-label="Sign up section"
    >
      <LeadIn
        heading={translations.intro.heading}
        paragraph={translations.intro.paragraph}
      />
      <Form
        idForm=""
        onClickField={handleRedirect}
        actionForm=""
        onClickButton={handleRedirect}
        inputFields={translations.fields}
        textButton={translations.actions.submitButton}
        legendHeading={translations.actions.legendHeading}
      />
    </section>
  );
}

export default SignUp;
