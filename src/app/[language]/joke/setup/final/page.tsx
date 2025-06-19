"use client";
import LeadIn from "@/components/dataDisplay/leadIn";
import Card from "@/components/feedback/card";
import { LuLaugh } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { CiHeart, CiFilter } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import Button from "@/components/inputs/button";
import { platformSections } from "@/utils/const";
import CardGrid from "@/components/layout/cardGrid";
import { useRouter } from "next/navigation";


function TheFinalSetupPage() {
  const { t } = useTranslation();
  const router = useRouter();

  const handleRedirect = (typeButton: string) => {
    const routes: Record<string, string> = {
      filter: "joke-explorer",
      configuration: "configuration",
      premiumExperience: "premium",
      socialFeatures: "build/home"
    };
    console.log(typeButton);
    

    const route = routes[typeButton];
    if (route) router.push(route);
  };

  const platformSectionCard = platformSections.map((section) => ({
    key: section.title,
    title: `TheFinalSetupPage.platformCards.${section.title}.title`,
    body: `TheFinalSetupPage.platformCards.${section.title}.description`,
    badge: `TheFinalSetupPage.platformCards.${section.title}.badge`,
    features: section.features?.map(
      (featureKey) =>
        `TheFinalSetupPage.platformCards.${section.title}.features.${featureKey}`
    ),
    icon: section.icon ? (
      <section.icon aria-label={`${section.title} icon`} />
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
      icon: <LuLaugh size="1.2rem" aria-hidden="true" />,
      onClick: () => handleRedirect(""),
    },
    {
      label: dashboardTranslations.advancedFilters,
      icon: <CiHeart size="1.2rem" aria-hidden="true" />,
      onClick: () => handleRedirect(""),
    },
    {
      label: dashboardTranslations.preferences,
      icon: <CiFilter size="1.2rem" aria-hidden="true" />,
      onClick: () => handleRedirect("filter"),
    },
    {
      label: dashboardTranslations.settings,
      icon: <IoSettingsOutline size="1.2rem" aria-hidden="true" />,
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
          {platformSectionCard.map((card) => (
            <Card
              key={card.key}
              title={card.title}
              body={card.body}
              icon={card.icon}
              badge={card.badge}
              features={card.features}
              onExplore={card.onExplore}
              variant={card.variant}
            />
          ))}
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
              {dashboardButtons.map((btn) => (
                <Button
                  key={btn.label}
                  onClick={btn.onClick}
                  size="medium"
                  variant="outline"
                >
                  <span className="flex items-center gap-2">
                    {btn.icon}
                    {btn.label}
                  </span>
                </Button>
              ))}
            </span>
          </Card>
        </article>
      </section>
    </>
  );
}

export default TheFinalSetupPage;
