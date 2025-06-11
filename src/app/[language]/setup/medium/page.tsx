"use client";
import LeadIn from "@/components/dataDisplay/LeadIn";
import Card from "@/components/feedback/Card";
import Button from "@/components/inputs/button";
import { redirect } from "next/navigation";
import { useTranslation } from "react-i18next";
import logoBoH from "@/assets/logo/logo-complete-recorted.png";
import unitedStateImg from "@/assets/countries/dark_image_united.png";
import Image from "next/image";
import { useMemo } from "react";

function MediumPage() {
  const { t } = useTranslation();

  const handleRedirection = () => {
    redirect("sign-up");
  };

  const translations = useMemo(
    () => ({
      leadIn: {
        heading: t("MediumSetup.leadInMain.heading"),
        paragraph: t("MediumSetup.leadInMain.paragraph"),
        logoAlt: t("MediumSetup.leadInMain.logoAlt", "Byte of Humor logo"),
      },
      jokesLanguagesSection: {
        title: t("MediumSetup.jokesLanguagesSection.title"),
        cards: {
          unitedStates: {
            title: t("MediumSetup.cards.unitedStates.title"),
            body: t("MediumSetup.cards.unitedStates.body"),
          },
          germany: {
            title: t("MediumSetup.cards.germany.title"),
            body: t("MediumSetup.cards.germany.body"),
          },
          france: {
            title: t("MediumSetup.cards.france.title"),
            body: t("MediumSetup.cards.france.body"),
          },
        },
      },
      typesOfJokesSection: {
        title: t("MediumSetup.typesOfJokesSection.title"),
        classicJokes: {
          heading: t("MediumSetup.leadInSubMain.classicJokes.heading"),
          paragraph: t("MediumSetup.leadInSubMain.classicJokes.paragraph"),
        },
        surrealAbsurdity: {
          heading: t("MediumSetup.leadInSubMain.surrealAbsurdity.heading"),
          paragraph: t("MediumSetup.leadInSubMain.surrealAbsurdity.paragraph"),
        },
        dadJokes: {
          heading: t("MediumSetup.leadInSubMain.dadJokes.heading"),
          paragraph: t("MediumSetup.leadInSubMain.dadJokes.paragraph"),
        },
      },
      adviseSection: {
        mainText: {
          line1: t("MediumSetup.adviseSection.mainText.line1"),
          line2: t("MediumSetup.adviseSection.mainText.line2"),
        },
        actionButton: {
          text: t("MediumSetup.adviseSection.actionButton.text"),
        },
      },
    }),
    [t]
  );

  return (
    <>
      <section
        className={
          "bg-gray-100 m-[1rem] py-[4rem] rounded-[1rem] gap-[2.5rem] flex justify-center items-center min-w-[24rem]"
        }
        aria-label="Introduction section"
        tabIndex={0}
      >
        <LeadIn
          heading={translations.leadIn.heading}
          paragraph={translations.leadIn.paragraph}
        />
        <Image
          className="w-[18rem]"
          src={logoBoH}
          alt={translations.leadIn.logoAlt}
        />
      </section>
      <h3 className="font-bold" tabIndex={0}>
        {translations.jokesLanguagesSection.title}
      </h3>
      <section
        className="grid grid-cols-3 gap-[1rem]"
        aria-label="Joke languages cards"
        tabIndex={0}
      >
        <Card
          img={unitedStateImg}
          title={translations.jokesLanguagesSection.cards.unitedStates.title}
          body={translations.jokesLanguagesSection.cards.unitedStates.body}
        />
        <Card
          img={unitedStateImg}
          title={translations.jokesLanguagesSection.cards.germany.title}
          body={translations.jokesLanguagesSection.cards.germany.body}
        />
        <Card
          img={unitedStateImg}
          title={translations.jokesLanguagesSection.cards.france.title}
          body={translations.jokesLanguagesSection.cards.france.body}
        />
      </section>
      <h3 className="font-bold" tabIndex={0}>
        {translations.typesOfJokesSection.title}
      </h3>
      <section
        className="flex flex-col mx-[5rem] [&>:nth-child(2)]:items-end"
        aria-label="Types of jokes"
        tabIndex={0}
      >
        <LeadIn
          heading={translations.typesOfJokesSection.classicJokes.heading}
          paragraph={translations.typesOfJokesSection.classicJokes.paragraph}
          variant="secondary"
        />
        <LeadIn
          heading={translations.typesOfJokesSection.surrealAbsurdity.heading}
          paragraph={
            translations.typesOfJokesSection.surrealAbsurdity.paragraph
          }
          variant="secondary"
        />
        <LeadIn
          heading={translations.typesOfJokesSection.dadJokes.heading}
          paragraph={translations.typesOfJokesSection.dadJokes.paragraph}
          variant="secondary"
        />
      </section>
      <section
        className="flex justify-center items-center gap-[5rem] py-[3rem] bg-gray-100 rounded-[1rem] "
        aria-label="Advice and action"
        tabIndex={0}
      >
        <span>
          <h2 className="font-bold" tabIndex={0}>
            {translations.adviseSection.mainText.line1}
            <br />
            {translations.adviseSection.mainText.line2}
          </h2>
        </span>
        <Button
          onClick={handleRedirection}
          variant="secondary"
          size="large"
          aria-label={translations.adviseSection.actionButton.text}
          tabIndex={0}
        >
          {translations.adviseSection.actionButton.text}
        </Button>
      </section>
    </>
  );
}

export default MediumPage;
