"use client";
import LeadIn from "@/components/dataDisplay/leadIn";
import Form from "@/components/inputs/Form";
import { inputTypes } from "@/types/baseFieldTypes";
import { redirect } from "next/navigation";

function LogIn() {
  const translations = {
    intro: {
      heading: "ComedianLoginForm.introduction.heading",
      paragraph: "ComedianLoginForm.introduction.paragraph",
    },
    fields: [
      {
        placeholder: "ComedianLoginForm.fields.namePlaceholder",
        label: "ComedianLoginForm.fields.nameLabel",
        id: "name",
        type: "text" as inputTypes,
      },
      {
        placeholder: "ComedianLoginForm.fields.emailPlaceholder",
        label: "ComedianLoginForm.fields.emailLabel",
        id: "email",
        type: "email" as inputTypes,
      },
    ],
    actions: {
      legendHeading: "ComedianLoginForm.actions.legendHeading",
      submitButton: "ComedianLoginForm.actions.submitButton",
    },
  };

  const handleRedirect = () => {
    redirect("select-country");
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
          actionForm=""
          inputFields={translations.fields}
          textButton={translations.actions.submitButton}
          legendHeading={translations.actions.legendHeading}
          handleSubmit={() => []}
          handleClick={handleRedirect}
        />
      </section>
    </>
  );
}

export default LogIn;
