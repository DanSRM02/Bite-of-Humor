import { loginComedianAction } from "@/actions/comedianActions";
import { initialLoginState } from "@/utils/initialStates";
import LeadIn from "@/components/dataDisplay/leadIn";
import Form from "@/components/inputs/form";
import { inputTypes } from "@/types/baseFieldTypes";
import { useTranslations } from "next-intl";

function LogIn() {
  const t = useTranslations();

  const translations = {
    intro: {
      heading: "ComedianLoginForm.introduction.heading",
      paragraph: "ComedianLoginForm.introduction.paragraph",
    },
    fields: [
      {
        placeholder: "ComedianLoginForm.fields.namePlaceholder",
        label: "ComedianLoginForm.fields.nameLabel",
        id: "comedian-name",
        type: "text" as inputTypes,
        nameInput: "name",
      },
      {
        placeholder: "ComedianLoginForm.fields.emailPlaceholder",
        label: "ComedianLoginForm.fields.emailLabel",
        id: "comedian-email",
        type: "email" as inputTypes,
        nameInput: "email",
      },
    ],
    actions: {
      legendHeading: "ComedianLoginForm.actions.legendHeading",
      submitButton: t("ComedianLoginForm.actions.submitButton"),
    },
  };

  return (
    <>
      <section
        className="flex justify-center items-center flex-wrap p-12 min-h-[35rem] gap-8 border-2 border-gray-300 rounded-lg"
        aria-label="Log in section"
      >
        <LeadIn
          heading={translations.intro.heading}
          paragraph={translations.intro.paragraph}
        />
        <Form
          actionForm={loginComedianAction}
          initialStateForm={initialLoginState}
          inputFields={translations.fields}
          textButton={translations.actions.submitButton}
          legendHeading={translations.actions.legendHeading}
        />
      </section>
    </>
  );
}

export default LogIn;
