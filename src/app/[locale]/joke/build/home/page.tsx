"use client";
import ButtonList from "@/components/dataDisplay/buttonList";
import CardList from "@/components/dataDisplay/cardList";
import LeadIn from "@/components/dataDisplay/leadIn";
import Card from "@/components/feedback/card";
import NavigationContext from "@/components/layout/navigation/context";
import { platformSectionsHome } from "@/utils/constants";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/feedback/icon";
import { TheatricalBackground } from "@/components/animations/theatrical";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const router = useRouter();

  const handleRedirect = (typeButton: string) => {
    const routes: Record<string, string> = {
      myCreations: "my-creations",
      humorHistory: "humor-history",
      communityForum: "community-forum",
      workshop: "workshop",
      analytics: "analytics",
      drafts: "drafts",
      publish: "publish",
    };

    const route = routes[typeButton];
    if (route) router.push(route);
  };

  const platformSectionCard = platformSectionsHome.map((section) => ({
    key: section.title,
    title: `HomePage.platformCards.${section.title}.title`,
    body: `HomePage.platformCards.${section.title}.description`,
    badge: `HomePage.platformCards.${section.title}.badge`,
    features: section.features?.map(
      (featureKey) =>
        `HomePage.platformCards.${section.title}.features.${featureKey}`
    ),
    icon: section.iconName ? (
      <Icon icon={section.iconName} aria-label={`${section.title} icon`} />
    ) : null,
    onExplore: () => handleRedirect(section.title),
    variant: "expandable" as const,
  }));

  const buildToolsData = {
    title: t("buildTools.title"),
    body: t("buildTools.body"),
    tools: [
      {
        label: t("buildTools.actions.createNew"),
        icon: (
          <Icon icon="lucide:plus-circle" size="1.2rem" aria-hidden="true" />
        ),
        onClick: () => handleRedirect("workshop"),
      },
      {
        label: t("buildTools.actions.viewDrafts"),
        icon: <Icon icon="lucide:file-text" size="1.2rem" aria-hidden="true" />,
        onClick: () => handleRedirect("drafts"),
      },
      {
        label: t("buildTools.actions.analytics"),
        icon: (
          <Icon icon="lucide:bar-chart-3" size="1.2rem" aria-hidden="true" />
        ),
        onClick: () => handleRedirect("analytics"),
      },
      {
        label: t("buildTools.actions.publish"),
        icon: <Icon icon="lucide:rocket" size="1.2rem" aria-hidden="true" />,
        onClick: () => handleRedirect("publish"),
      },
    ],
  };

  return (
    <TheatricalBackground type="writersroom" className="min-h-screen">
      <main
        aria-label={t("ariaLabels.homeMainContent")}
        className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <LeadIn
            heading={t("leadIn.heading")}
            paragraph={t("leadIn.paragraph")}
            isTextRaw
          />

          <section
            aria-label={t("ariaLabels.platformFeaturesList")}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10"
          >
            <CardList cards={platformSectionCard} />
          </section>

          <article
            aria-label={t("ariaLabels.userDashboardActions")}
            className="bg-white shadow-lg border border-gray-200 rounded-2xl p-4 sm:p-6 md:p-8"
          >
            <Card
              title={buildToolsData.title}
              body={buildToolsData.body}
              isTextRaw
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6">
                <ButtonList buttons={buildToolsData.tools} />
              </div>
            </Card>
          </article>

          <NavigationContext currentStep="build" />
        </div>
      </main>
    </TheatricalBackground>
  );
}
