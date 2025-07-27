"use client";
import ButtonList from "@/components/dataDisplay/buttonList";
import CardList from "@/components/dataDisplay/cardList";
import LeadIn from "@/components/dataDisplay/leadIn";
import Card from "@/components/feedback/card";
import CardGrid from "@/components/layout/cardGrid";
import { platformSectionsHome } from "@/utils/constants";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/feedback/icon";

export default function HomePage() {
  const t = useTranslations();
  const router = useRouter();

  const handleRedirect = (typeButton: string) => {
    const routes: Record<string, string> = {
      workshop: "workshop",
      configuration: "configuration",
      premiumExperience: "premium",
      socialFeatures: "../build/home",
    };

    const route = routes[typeButton];
    if (route) router.push(route);
  };

  const platformSectionCard = platformSectionsHome.map((section) => ({
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
    title: "TheFinalSetupPage.dashboardCard.title",
    body: "TheFinalSetupPage.dashboardCard.body",
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
      icon: (
        <Icon icon="ion:settings-outline" size="1.2rem" aria-hidden="true" />
      ),
      onClick: () => handleRedirect("configuration"),
    },
  ];

  return (
    <>
      <LeadIn
        heading={dashboardTranslations.title}
        paragraph={dashboardTranslations.body}
      />
      <section
        aria-label="Platform features and dashboard"
        className="flex flex-col gap-20"
      >
        <CardGrid ariaLabel="Platform features list">
          <CardList cards={platformSectionCard} />
        </CardGrid>
        <article
          aria-label="User dashboard actions"
          className="border-2 border-gray-300 rounded-lg"
        >
          <Card
            title={dashboardTranslations.title}
            body={dashboardTranslations.body}
          >
            <span className="flex justify-center items-center p-4 gap-4">
              <ButtonList buttons={dashboardButtons} />
            </span>
          </Card>
        </article>
      </section>
    </>
  );
}
