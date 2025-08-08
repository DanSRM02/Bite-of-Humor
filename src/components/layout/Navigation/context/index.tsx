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
  showQuickActions?: boolean;
};

const NavigationContext = ({ showQuickActions = true }: NavigationContextProps) => {
  const t = useTranslations("NavigationContext");

  if (!showQuickActions) return null;

  const quickActionCards = [
    {
      title: t("cards.final.startCreating.title"),
      description: t("cards.final.startCreating.description"),
      actionText: t("cards.final.startCreating.actionText"),
      actionRoute: "/joke/build/workshop",
      iconName: "lucide:rocket",
      variant: "primary" as const
    },
    {
      title: t("cards.final.exploreCommunity.title"),
      description: t("cards.final.exploreCommunity.description"),
      actionText: t("cards.final.exploreCommunity.actionText"),
      actionRoute: "/joke/punch-line/community",
      iconName: "lucide:users",
      variant: "secondary" as const
    }
  ];

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
      
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto">
        {quickActionCards.map((card, index) => (
          <ContextCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default NavigationContext;
