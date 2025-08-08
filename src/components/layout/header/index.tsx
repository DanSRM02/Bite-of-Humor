import Heading from "@/components/dataDisplay/Heading";
import LeadIn from "@/components/dataDisplay/LeadIn";
import { getTranslations } from "next-intl/server";
import React from "react";

type HeaderProps = {
  title: string;
};

const Header = async (props: HeaderProps) => {
  const { title } = props;
  const t = await getTranslations();
  
  const steps = [
    {
      heading: t("WorkshopPage.header.steps.write.heading"),
      paragraph: t("WorkshopPage.header.steps.write.paragraph")
    },
    {
      heading: t("WorkshopPage.header.steps.preview.heading"), 
      paragraph: t("WorkshopPage.header.steps.preview.paragraph")
    },
    {
      heading: t("WorkshopPage.header.steps.submit.heading"),
      paragraph: t("WorkshopPage.header.steps.submit.paragraph")
    }
  ];

  return (
    <header className="py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      <Heading 
        className="text-center font-bold underline text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-8 lg:mb-12" 
        isTextRaw
      >
        {title}
      </Heading>
      
      <nav 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto"
        aria-label="Workshop process steps"
      >
        {steps.map((step, index) => (
          <section key={`step-${index}`} className="flex justify-center">
            <LeadIn
              isTextRaw
              variant="secondary"
              heading={step.heading}
              paragraph={step.paragraph}
            />
          </section>
        ))}
      </nav>
    </header>
  );
};

export default Header;
