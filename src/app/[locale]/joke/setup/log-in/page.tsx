
import { initialLoginState } from "@/utils/initialStates";
import LeadIn from "@/components/dataDisplay/LeadIn";
import Form from "@/components/inputs/form";
import { inputTypes } from "@/types/baseFieldTypes";
import { getTranslations } from "next-intl/server";
import { signInComedianAction } from "@/actions/comedianActions";

async function LogIn() {
  const t = await getTranslations();

  const translations = {
    intro: {
      heading: "ComedianLoginForm.introduction.heading",
      paragraph: "ComedianLoginForm.introduction.paragraph",
    },
    fields: [
      {
        placeholder: "ComedianLoginForm.fields.emailPlaceholder",
        label: "ComedianLoginForm.fields.emailLabel",
        id: "comedian-email",
        type: "email" as inputTypes,
        nameInput: "email",
      },
      {
        placeholder: "ComedianLoginForm.fields.passwordPlaceholder",
        label: "ComedianLoginForm.fields.passwordLabel",
        id: "comedian-password",
        type: "password" as inputTypes,
        nameInput: "password",
      },
    ],
    actions: {
      legendHeading: "ComedianLoginForm.actions.legendHeading",
      submitButton: t("ComedianLoginForm.actions.submitButton"),
    },
  };

  return (
    <section
      className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 sm:gap-8 lg:gap-12 p-4 sm:p-6 lg:p-12 min-h-[400px] sm:min-h-[500px] lg:min-h-[35rem] border-2 border-gray-300 rounded-lg max-w-7xl mx-auto"
      aria-label="Log in section"
    >
      <div className="flex-1 max-w-md lg:max-w-lg text-center lg:text-left">
        <LeadIn
          heading={translations.intro.heading}
          paragraph={translations.intro.paragraph}
        />
      </div>
      <div className="flex-1 w-full max-w-md lg:max-w-lg">
        <Form
          actionForm={signInComedianAction}
          initialStateForm={initialLoginState}
          inputFields={translations.fields}
          textButton={translations.actions.submitButton}
          legendHeading={translations.actions.legendHeading}
        />
      </div>
    </section>
  );
}

export default LogIn;
