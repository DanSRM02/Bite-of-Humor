"use client";
import LeadIn from "@/components/dataDisplay/leadIn";
import { Icon } from "@/components/feedback/icon";
import { useRouter } from "next/navigation";
import CardList from "@/components/dataDisplay/cardList";
import { useTranslations } from "next-intl";
import NavigationContext from "@/components/layout/navigation/context";
import { TheatricalBackground } from "@/components/animations/theatrical";

function CentralHub() {
  const t = useTranslations();
  const router = useRouter();

  const handleRedirect = (typeButton: string) => {
    const routes: Record<string, string> = {
      buildWorkshop: "../build/workshop",
      punchlineCommunity: "../punch-line/community",
      setupExplorer: "joke-explorer",
      setupPremium: "premium",
      setupProfile: "sign-up",
    };

    const route = routes[typeButton];
    if (route) router.push(route);
  };

  const getIconName = (iconType: string): string => {
    const iconMap: Record<string, string> = {
      workshop: "lucide:hammer",
      community: "lucide:users", 
      explorer: "lucide:compass",
      premium: "lucide:crown",
      profile: "lucide:circle"
    };
    return iconMap[iconType] || "lucide:circle";
  };

  const centralHubSections = [
    {
      title: "buildWorkshop",
      iconName: "workshop" as const,
      features: ["jokeBuilder", "templates", "aiAssistance", "collaboration"]
    },
    {
      title: "punchlineCommunity", 
      iconName: "community" as const,
      features: ["shareJokes", "feedback", "voting", "trending"]
    },
    {
      title: "setupExplorer",
      iconName: "explorer" as const, 
      features: ["discover", "categories", "filters", "favorites"]
    },
    {
      title: "setupPremium",
      iconName: "premium" as const,
      features: ["advancedTools", "analytics", "exportOptions", "prioritySupport"]
    },
    {
      title: "setupProfile",
      iconName: "profile" as const,
      features: ["personalSettings", "preferences", "account", "history"]
    }
  ];

  const platformSectionCard = centralHubSections.map((section) => ({
    key: section.title,
    title: `CentralHub.sections.${section.title}.title`,
    body: `CentralHub.sections.${section.title}.description`,
    badge: `CentralHub.sections.${section.title}.badge`,
    features: section.features?.map(
      (featureKey) =>
        `CentralHub.sections.${section.title}.features.${featureKey}`
    ),
    icon: section.iconName ? (
      <Icon icon={getIconName(section.iconName)} aria-label={`${section.title} icon`} />
    ) : null,
    onExplore: () => handleRedirect(section.title),
    variant: "expandable" as const,
  }));

  return (
    <TheatricalBackground type="stage" className="min-h-screen">
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <LeadIn
            heading={t("CentralHub.leadIn.heading")}
            paragraph={t("CentralHub.leadIn.paragraph")}
            isTextRaw
          />

          <section
            aria-label="Main platform sections"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10"
          >
            <CardList cards={platformSectionCard} />
          </section>

          <NavigationContext />
        </div>
      </main>
    </TheatricalBackground>
  );
}

export default CentralHub;
