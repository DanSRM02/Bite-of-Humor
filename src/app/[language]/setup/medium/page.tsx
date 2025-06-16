import LeadIn from "@/components/dataDisplay/leadIn";
import Card from "@/components/feedback/card";
import logoBoH from "@/assets/logo/logo-complete-recorted.png";
import unitedStateImg from "@/assets/countries/dark_image_united.png";
import franceImg from "@/assets/countries/funny_france.webp";
import germanyImg from "@/assets/countries/funny_germany.webp";
import Image from "next/image";
import Heading from "@/components/dataDisplay/heading";

function MediumPage() {

  const translations = {
    leadIn: {
      heading: "MediumSetup.leadInMain.heading",
      paragraph: "MediumSetup.leadInMain.paragraph",
      logoAlt: "MediumSetup.leadInMain.logoAlt",
    },
    jokesLanguagesSection: {
      title: "MediumSetup.jokesLanguagesSection.title",
      cards: {
        unitedStates: {
          title: "MediumSetup.cards.unitedStates.title",
          body: "MediumSetup.cards.unitedStates.body",
        },
        germany: {
          title: "MediumSetup.cards.germany.title",
          body: "MediumSetup.cards.germany.body",
        },
        france: {
          title: "MediumSetup.cards.france.title",
          body: "MediumSetup.cards.france.body",
        },
      },
    },
    typesOfJokesSection: {
      title: "MediumSetup.typesOfJokesSection.title",
      classicJokes: {
        heading: "MediumSetup.leadInSubMain.classicJokes.heading",
        paragraph: "MediumSetup.leadInSubMain.classicJokes.paragraph",
      },
      surrealAbsurdity: {
        heading: "MediumSetup.leadInSubMain.surrealAbsurdity.heading",
        paragraph: "MediumSetup.leadInSubMain.surrealAbsurdity.paragraph",
      },
      dadJokes: {
        heading: "MediumSetup.leadInSubMain.dadJokes.heading",
        paragraph: "MediumSetup.leadInSubMain.dadJokes.paragraph",
      },
    },
    adviseSection: {
      mainText: {
        line1: "MediumSetup.adviseSection.mainText.line1",
        line2: "MediumSetup.adviseSection.mainText.line2",
      },
      actionButton: {
        text: "MediumSetup.adviseSection.actionButton.text",
      },
    },
  };

  return (
    <>
      <section
        className={
          "bg-gray-100 m-[1rem] py-[4rem] rounded-[1rem] gap-[2.5rem] flex justify-center items-center min-w-[24rem]"
        }
        aria-label="Introduction section"
         
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
      <Heading level={2} className="font-bold"  >
        {translations.jokesLanguagesSection.title}
      </Heading>
      <section
        className="grid grid-cols-3 gap-[1rem]"
        aria-label="Joke languages cards"
         
      >
        <Card
          img={unitedStateImg}
          title={translations.jokesLanguagesSection.cards.unitedStates.title}
          body={translations.jokesLanguagesSection.cards.unitedStates.body}
        />
        <Card
          img={germanyImg}
          title={translations.jokesLanguagesSection.cards.germany.title}
          body={translations.jokesLanguagesSection.cards.germany.body}
        />
        <Card
          img={franceImg}
          title={translations.jokesLanguagesSection.cards.france.title}
          body={translations.jokesLanguagesSection.cards.france.body}
        />
      </section>
      <Heading level={2} className="font-bold"  >
        {translations.typesOfJokesSection.title}
      </Heading>
      <section
        className="flex flex-col mx-[5rem] [&>:nth-child(2)]:items-end"
        aria-label="Types of jokes"
         
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
         
      >
        <LeadIn
          variant="tertiary"
          heading={translations.adviseSection.mainText.line1}
          paragraph={translations.adviseSection.mainText.line2}
          textLink="Join Us"
          redirect={"sign-up"}
        />
      </section>
    </>
  );
}

export default MediumPage;
