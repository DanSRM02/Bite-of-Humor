import Form from "@/components/inputs/form";
import { inputTypes } from "@/types/baseFieldTypes";
import LeadIn from "@/components/dataDisplay/leadIn";
import { signUpComedianAction } from "@/actions/comedianActions";
import { initialSignUpState } from "@/utils/initialStates";
import { getTranslations } from "next-intl/server";

async function SignUp() {
  const t = await getTranslations();
  const translations = {
    intro: {
      heading: "ComedianSignUpForm.introduction.heading",
      paragraph: "ComedianSignUpForm.introduction.paragraph",
    },
    fields: [
      {
        placeholder: "ComedianSignUpForm.fields.namePlaceholder",
        label: "ComedianSignUpForm.fields.nameLabel",
        id: "comedian-name",
        nameInput: "name",
        type: "text" as inputTypes,
      },
      {
        placeholder: "ComedianSignUpForm.fields.emailPlaceholder",
        label: "ComedianSignUpForm.fields.emailLabel",
        id: "comedian-email",
        nameInput: "email",
        type: "email" as inputTypes,
      },

      {
        placeholder: "ComedianSignUpForm.fields.jokePlaceholder",
        label: "ComedianSignUpForm.fields.jokeLabel",
        id: "comedian-joke",
        nameInput: "joke",
        type: "textarea" as inputTypes,
      },
    ],
    actions: {
      legendHeading: "ComedianSignUpForm.actions.legendHeading",
      submitButton: t("ComedianSignUpForm.actions.submitButton"),
    },
  };

  return (
    <section
      className="flex justify-center items-center flex-wrap p-12 gap-8 min-h-[37rem] border-2 border-gray-300 rounded-lg"
      aria-label="Sign up section"
    >
      <LeadIn
        variant="primary"
        heading={translations.intro.heading}
        paragraph={translations.intro.paragraph}
      />
      <Form
        actionForm={signUpComedianAction}
        initialStateForm={initialSignUpState}
        inputFields={translations.fields}
        textButton={translations.actions.submitButton}
        legendHeading={translations.actions.legendHeading}
      />
    </section>
  );
}

export default SignUp;
