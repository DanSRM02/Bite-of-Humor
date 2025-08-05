"use client";
import { Icon } from "@/components/feedback/icon";
import Button from "@/components/inputs/button";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

type ContextCardProps = {
  title: string;
  description: string;
  actionText: string;
  actionRoute: string;
  iconName: string;
  variant?: "primary" | "secondary" | "accent";
};

const ContextCard = ({ 
  title, 
  description, 
  actionText, 
  actionRoute, 
  iconName,
  variant = "primary" 
}: ContextCardProps) => {
  const router = useRouter();

  const variantStyles = {
    primary: "border-stone-300 bg-stone-50 hover:bg-stone-100",
    secondary: "border-stone-400 bg-white hover:bg-stone-50",
    accent: "border-stone-600 bg-stone-100 hover:bg-stone-200"
  };

  return (
    <div className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors ${variantStyles[variant]}`}>
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-stone-800 text-white rounded-full">
          <Icon icon={iconName} size="1.5rem" />
        </div>
      </div>
      
      <h3 className="font-semibold text-lg text-stone-900 mb-2">
        {title}
      </h3>
      
      <p className="text-stone-600 mb-4 text-sm leading-relaxed">
        {description}
      </p>
      
      <Button 
        onClick={() => router.push(actionRoute)}
        size="medium"
        className="w-full sm:w-auto"
      >
        {actionText}
      </Button>
    </div>
  );
};

type NavigationContextProps = {
  currentStep?: "setup" | "build" | "final";
};

const NavigationContext = ({ currentStep = "setup" }: NavigationContextProps) => {
  const t = useTranslations("NavigationContext");

  const getContextCards = () => {
    switch (currentStep) {
      case "setup":
        return [
          {
            title: t("cards.setup.nextBuilding.title"),
            description: t("cards.setup.nextBuilding.description"),
            actionText: t("cards.setup.nextBuilding.actionText"),
            actionRoute: "/joke/build/workshop",
            iconName: "lucide:hammer",
            variant: "primary" as const
          }
        ];
      
      case "build":
        return [
          {
            title: t("cards.build.exploreJokes.title"),
            description: t("cards.build.exploreJokes.description"),
            actionText: t("cards.build.exploreJokes.actionText"),
            actionRoute: "/joke/setup/joke-explorer",
            iconName: "lucide:compass",
            variant: "secondary" as const
          },
          {
            title: t("cards.build.viewAnalytics.title"),
            description: t("cards.build.viewAnalytics.description"),
            actionText: t("cards.build.viewAnalytics.actionText"),
            actionRoute: "/joke/analytics",
            iconName: "lucide:bar-chart-3",
            variant: "accent" as const
          }
        ];
      
      case "final":
        return [
          {
            title: t("cards.final.startCreating.title"),
            description: t("cards.final.startCreating.description"),
            actionText: t("cards.final.startCreating.actionText"),
            actionRoute: "/joke/build/home",
            iconName: "lucide:rocket",
            variant: "primary" as const
          },
          {
            title: t("cards.final.exploreCommunity.title"),
            description: t("cards.final.exploreCommunity.description"),
            actionText: t("cards.final.exploreCommunity.actionText"),
            actionRoute: "/joke/build/community",
            iconName: "lucide:users",
            variant: "secondary" as const
          }
        ];
      
      default:
        return [];
    }
  };

  const contextCards = getContextCards();

  if (contextCards.length === 0) return null;

  return (
    <section className="mt-8 sm:mt-12 lg:mt-16">
      <div className="text-center mb-6">
        <h2 className="text-lg font-semibold text-stone-800 mb-2">
          {t("title")}
        </h2>
        <p className="text-sm text-stone-600">
          {t("subtitle")}
        </p>
      </div>
      
      <div className={`grid gap-4 sm:gap-6 ${
        contextCards.length === 1 
          ? "grid-cols-1 max-w-md mx-auto" 
          : "grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto"
      }`}>
        {contextCards.map((card, index) => (
          <ContextCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default NavigationContext;
