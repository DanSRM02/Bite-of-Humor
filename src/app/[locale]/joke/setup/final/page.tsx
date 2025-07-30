"use client";
import LeadIn from "@/components/dataDisplay/leadIn";
import Card from "@/components/feedback/card";
import { Icon } from "@/components/feedback/icon";
import { platformSectionsFinal } from "@/utils/constants";
import { useRouter } from "next/navigation";
import CardList from "@/components/dataDisplay/cardList";
import ButtonList from "@/components/dataDisplay/buttonList";
import { useTranslations } from "next-intl";


function TheFinalSetupPage() {
  const t  = useTranslations();
  const router = useRouter();

  const handleRedirect = (typeButton: string) => {
    const routes: Record<string, string> = {
      filter: "joke-explorer",
      configuration: "configuration",
      premiumExperience: "premium",
      socialFeatures: "../build/home"
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

  const dashboardTranslations = {
    title: t("TheFinalSetupPage.dashboardCard.title"),
    body: t("TheFinalSetupPage.dashboardCard.body"),
    myFavorites: t("TheFinalSetupPage.dashboardButtons.myFavorites"),
    advancedFilters: t("TheFinalSetupPage.dashboardButtons.advancedFilters"),
    preferences: t("TheFinalSetupPage.dashboardButtons.preferences"),
    settings: t("TheFinalSetupPage.dashboardButtons.settings"),
  };

  const dashboardButtons = [
    {
      label: dashboardTranslations.myFavorites,
      icon: <Icon icon="lucide:laugh" size="1.2rem" aria-hidden="true" />,
      onClick: () => handleRedirect(""),
    },
    {
      label: dashboardTranslations.advancedFilters,
      icon: <Icon icon="ci:heart" size="1.2rem" aria-hidden="true" />,
      onClick: () => handleRedirect(""),
    },
    {
      label: dashboardTranslations.preferences,
      icon: <Icon icon="ci:filter" size="1.2rem" aria-hidden="true" />,
      onClick: () => handleRedirect("filter"),
    },
    {
      label: dashboardTranslations.settings,
      icon: <Icon icon="ion:settings-outline" size="1.2rem" aria-hidden="true" />,
      onClick: () => handleRedirect("configuration"),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <LeadIn
            heading={t("TheFinalSetupPage.leadIn.heading")}
            paragraph={t("TheFinalSetupPage.leadIn.paragraph")}
            isTextRaw={true}
          />
        </div>
        
        <section
          aria-label="Platform features and dashboard"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16"
        >
          <CardList cards={platformSectionCard} />
        </section>
        
        <article
          aria-label="User dashboard actions"
          className="bg-white shadow-lg border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10 max-w-6xl mx-auto"
        >
          <Card
            title={dashboardTranslations.title}
            body={dashboardTranslations.body}      
            isTextRaw={true}      
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-6">
              <ButtonList buttons={dashboardButtons} />
            </div>
          </Card>
        </article>
      </div>
    </div>
  );
}

export default TheFinalSetupPage;
