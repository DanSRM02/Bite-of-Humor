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
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">      
      <section 
        className="relative bg-white shadow-sm border-b border-stone-200"
        aria-label="Introduction section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <LeadIn
                heading={translations.leadIn.heading}
                paragraph={translations.leadIn.paragraph}
              />
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto drop-shadow-lg"
                src={logoBoH}
                alt={translations.leadIn.logoAlt}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">        
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <Heading level={2} className="font-bold text-2xl sm:text-3xl lg:text-4xl text-stone-900 mb-4">
              {translations.jokesLanguagesSection.title}
            </Heading>
            <div className="w-24 h-1 bg-gradient-to-r from-stone-700 to-stone-900 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
          </div>
        </div>
        
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <Heading level={2} className="font-bold text-2xl sm:text-3xl lg:text-4xl text-stone-900 mb-4">
              {translations.typesOfJokesSection.title}
            </Heading>
            <div className="w-24 h-1 bg-gradient-to-r from-stone-600 to-stone-800 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
              <div className="md:col-span-8 md:pr-6 lg:pr-8">
                <LeadIn
                  heading={translations.typesOfJokesSection.classicJokes.heading}
                  paragraph={translations.typesOfJokesSection.classicJokes.paragraph}
                  variant="secondary"
                />
              </div>
              <div className="md:col-span-4">
                <div className="w-full h-32 sm:h-40 md:h-48 bg-gradient-to-br from-stone-100 to-stone-200 rounded-xl flex items-center justify-center shadow-inner">
                  <span className="text-3xl sm:text-4xl">🎭</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
              <div className="md:col-span-4 order-2 md:order-1">
                <div className="w-full h-32 sm:h-40 md:h-48 bg-gradient-to-br from-stone-200 to-stone-300 rounded-xl flex items-center justify-center shadow-inner">
                  <span className="text-3xl sm:text-4xl">🌀</span>
                </div>
              </div>
              <div className="md:col-span-8 md:pl-6 lg:pl-8 order-1 md:order-2 text-left md:text-right">
                <LeadIn
                  heading={translations.typesOfJokesSection.surrealAbsurdity.heading}
                  paragraph={translations.typesOfJokesSection.surrealAbsurdity.paragraph}
                  variant="secondary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
              <div className="md:col-span-8 md:pr-6 lg:pr-8">
                <LeadIn
                  heading={translations.typesOfJokesSection.dadJokes.heading}
                  paragraph={translations.typesOfJokesSection.dadJokes.paragraph}
                  variant="secondary"
                />
              </div>
              <div className="md:col-span-4">
                <div className="w-full h-32 sm:h-40 md:h-48 bg-gradient-to-br from-stone-50 to-stone-100 rounded-xl flex items-center justify-center shadow-inner">
                  <span className="text-3xl sm:text-4xl">👨‍👧‍👦</span>
                </div>
              </div>
            </div>
          </div>
        </div>      
        <div className="relative">
          <div className="bg-gradient-to-r from-stone-800 to-stone-900 rounded-2xl shadow-xl overflow-hidden">
            
            <div className="relative px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
              <div className="max-w-3xl mx-auto text-center">
                <LeadIn
                  variant="tertiary"
                  heading={translations.adviseSection.mainText.line1}
                  paragraph={translations.adviseSection.mainText.line2}
                  textLink={translations.adviseSection.actionButton.text}
                  redirect="sign-up"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediumPage;
