"use client";
import CardList from "@/components/dataDisplay/cardList";
import LeadIn from "@/components/dataDisplay/leadIn";
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
      myCreations: "workshop",
      humorHistory: "humor-history",
      communityForum: "community-forum",
      creationToolkit: "workshop",
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

          <NavigationContext currentStep="build" />
        </div>
      </main>
    </TheatricalBackground>
  );
}
