import logoBoH from "@/assets/logo/logo-complete-recorted.png";
import unitedStateImg from "@/assets/countries/dark_image_united.png";
import franceImg from "@/assets/countries/funny_france.webp";
import germanyImg from "@/assets/countries/funny_germany.webp";
import Image from "next/image";
import Heading from "@/components/dataDisplay/heading";
import Card from "@/components/feedback/card";
import LeadIn from "@/components/dataDisplay/leadIn";

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
    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12 p-4 sm:p-6 lg:p-8">
      <section 
        className="bg-gray-100 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 rounded-lg flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12 min-h-[300px]" 
        aria-label="Introduction section"
      >
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <LeadIn
            heading={translations.leadIn.heading}
            paragraph={translations.leadIn.paragraph}
          />
        </div>
        <div className="flex-shrink-0 order-first lg:order-last">
          <Image
            className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 h-auto"
            src={logoBoH}
            alt={translations.leadIn.logoAlt}
          />
        </div>
      </section>

      <Heading level={2} className="font-bold text-center sm:text-left text-xl sm:text-2xl lg:text-3xl">
        {translations.jokesLanguagesSection.title}
      </Heading>
      
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" aria-label="Joke languages cards">
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

      <Heading level={2} className="font-bold text-center sm:text-left text-xl sm:text-2xl lg:text-3xl">
        {translations.typesOfJokesSection.title}
      </Heading>
      
      <section className="flex flex-col gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-8 lg:px-16 xl:px-20" aria-label="Types of jokes">
        <div className="max-w-4xl mx-auto lg:self-start lg:text-left">
          <LeadIn
            heading={translations.typesOfJokesSection.classicJokes.heading}
            paragraph={translations.typesOfJokesSection.classicJokes.paragraph}
            variant="secondary"
          />
        </div>
        <div className="max-w-4xl mx-auto lg:self-end lg:text-right">
          <LeadIn
            heading={translations.typesOfJokesSection.surrealAbsurdity.heading}
            paragraph={translations.typesOfJokesSection.surrealAbsurdity.paragraph}
            variant="secondary"
          />
        </div>
        <div className="max-w-4xl mx-auto lg:self-start lg:text-left">
          <LeadIn
            heading={translations.typesOfJokesSection.dadJokes.heading}
            paragraph={translations.typesOfJokesSection.dadJokes.paragraph}
            variant="secondary"
          />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-16 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 rounded-lg" aria-label="Advice and action">
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <LeadIn
            variant="tertiary"
            heading={translations.adviseSection.mainText.line1}
            paragraph={translations.adviseSection.mainText.line2}
            textLink={translations.adviseSection.actionButton.text}
            redirect="sign-up"
          />
        </div>
      </section>
    </div>
  );
}

export default MediumPage;
