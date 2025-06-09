"use client";
import LeadIn from "@/components/dataDisplay/LeadIn";
import Card from "@/components/feedback/Card";
import { LuLaugh } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { CiHeart, CiFilter } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { redirect } from "next/navigation";
import Button from "@/components/inputs/button";
import { platformSections } from "@/utils/const";

function TheFinalSetupPage() {
  const { t } = useTranslation();

  const handleRedirect = (typeButton: string) => {
    const routes: Record<string, string> = {
      filter: "joke-explorer",
      configuration: "configuration",
      premiumExperience: "premium",
    };

    const route = routes[typeButton];
    if (route) redirect(route);
  };

  const platformSectionCard = useMemo(
    () =>
      platformSections.map((section) => ({
        key: section.title,
        title: t(`TheFinalSetupPage.platformCards.${section.title}.title`),
        body: t(`TheFinalSetupPage.platformCards.${section.title}.description`),
        badge: t(`TheFinalSetupPage.platformCards.${section.title}.badge`),
        features: section.features?.map((featureKey) =>
          t(
            `TheFinalSetupPage.platformCards.${section.title}.features.${featureKey}`
          )
        ),
        icon: section.icon ? (
          <section.icon aria-label={`${section.title} icon`} />
        ) : null,
        onExplore: () => handleRedirect(section.title),
        variant: "expandable" as const,
      })),
    [t]
  );

  const dashboardTranslations = useMemo(
    () => ({
      title: t("TheFinalSetupPage.dashboardCard.title"),
      body: t("TheFinalSetupPage.dashboardCard.body"),
      myFavorites: t("TheFinalSetupPage.dashboardButtons.myFavorites"),
      advancedFilters: t("TheFinalSetupPage.dashboardButtons.advancedFilters"),
      preferences: t("TheFinalSetupPage.dashboardButtons.preferences"),
      settings: t("TheFinalSetupPage.dashboardButtons.settings"),
    }),
    [t]
  );

  const dashboardButtons = useMemo(
    () => [
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
    ],
    [dashboardTranslations]
  );

  return (
    <>
      <LeadIn
        heading={dashboardTranslations.title}
        paragraph={dashboardTranslations.body}
      />
      <section aria-label="Platform features and dashboard" tabIndex={0}>
        <article aria-label="Platform features list" tabIndex={0}>
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
        </article>
        <article aria-label="User dashboard actions" tabIndex={0}>
          <Card
            title={dashboardTranslations.title}
            body={dashboardTranslations.body}
          />
          <span>
            {dashboardButtons.map((btn) => (
              <Button
                key={btn.label}
                onClick={btn.onClick}
                size="large"
                variant="outline"
                aria-label={btn.label}
                tabIndex={0}
              >
                {btn.icon}
                <br />
                {btn.label}
              </Button>
            ))}
          </span>
        </article>
      </section>
    </>
  );
}

export default TheFinalSetupPage;
