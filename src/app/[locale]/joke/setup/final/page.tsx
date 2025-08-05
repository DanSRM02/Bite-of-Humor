"use client";
import LeadIn from "@/components/dataDisplay/leadIn";
import { Icon } from "@/components/feedback/icon";
import { platformSectionsFinal } from "@/utils/constants";
import { useRouter } from "next/navigation";
import CardList from "@/components/dataDisplay/cardList";
import { useTranslations } from "next-intl";
import NavigationContext from "@/components/layout/navigation/context";
import { TheatricalBackground } from "@/components/animations/theatrical";

function TheFinalSetupPage() {
  const t = useTranslations();
  const router = useRouter();

  const handleRedirect = (typeButton: string) => {
    const routes: Record<string, string> = {
      communicationHub: "joke-explorer",  
      socialFeatures: "../build/home",  
      premiumExperience: "premium",  
    };

    const route = routes[typeButton];
    if (route) router.push(route);
  };

  const platformSectionCard = platformSectionsFinal.map((section) => ({
    key: section.title,
    title: `TheFinalSetupPage.platformCards.${section.title}.title`,
    body: `TheFinalSetupPage.platformCards.${section.title}.description`,
    badge: `TheFinalSetupPage.platformCards.${section.title}.badge`,
    features: section.features?.map(
      (featureKey) =>
        `TheFinalSetupPage.platformCards.${section.title}.features.${featureKey}`
    ),
    icon: section.iconName ? (
      <Icon icon={section.iconName} aria-label={`${section.title} icon`} />
    ) : null,
    onExplore: () => handleRedirect(section.title),
    variant: "expandable" as const,
  }));

  return (
    <TheatricalBackground type="backstage" className="min-h-screen">
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <LeadIn
            heading={t("TheFinalSetupPage.leadIn.heading")}
            paragraph={t("TheFinalSetupPage.leadIn.paragraph")}
            isTextRaw
          />

          <section
            aria-label="Platform features and dashboard"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10"
          >
            <CardList cards={platformSectionCard} />
          </section>

          <NavigationContext currentStep="final" />
        </div>
      </main>
    </TheatricalBackground>
  );
}

export default TheFinalSetupPage;
