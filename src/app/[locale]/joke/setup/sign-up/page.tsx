import Form from "@/components/inputs/form";
import { inputTypes } from "@/types/baseFieldTypes";
import LeadIn from "@/components/dataDisplay/LeadIn";
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
        placeholder: "ComedianSignUpForm.fields.passwordPlaceholder",
        label: "ComedianSignUpForm.fields.passwordLabel",
        id: "comedian-password",
        nameInput: "password",
        type: "password" as inputTypes,
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
      className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 sm:gap-8 lg:gap-12 p-4 sm:p-6 lg:p-12 min-h-[500px] sm:min-h-[600px] lg:min-h-[37rem] border-2 border-gray-300 rounded-lg max-w-7xl mx-auto"
      aria-label="Sign up section"
    >
      <div className="flex-1 max-w-md lg:max-w-lg text-center lg:text-left">
        <LeadIn
          variant="primary"
          heading={translations.intro.heading}
          paragraph={translations.intro.paragraph}
        />
      </div>
      <div className="flex-1 w-full max-w-md lg:max-w-lg">
        <Form
          actionForm={signUpComedianAction}
          initialStateForm={initialSignUpState}
          inputFields={translations.fields}
          textButton={translations.actions.submitButton}
          legendHeading={translations.actions.legendHeading}
        />
      </div>
    </section>
  );
}

export default SignUp;
