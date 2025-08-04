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
  const t = useTranslations();

  const getContextCards = () => {
    switch (currentStep) {
      case "setup":
        return [
          {
            title: "Next: Start Building",
            description: "Ready to create your first joke? Jump into our workshop and bring your humor to life.",
            actionText: "Open Workshop",
            actionRoute: "/joke/build/workshop",
            iconName: "lucide:hammer",
            variant: "primary" as const
          }
        ];
      
      case "build":
        return [
          {
            title: "Explore Jokes",
            description: "Discover trending jokes and get inspired by the community's best content.",
            actionText: "Browse Jokes",
            actionRoute: "/joke/setup/joke-explorer",
            iconName: "lucide:compass",
            variant: "secondary" as const
          },
          {
            title: "View Analytics",
            description: "Track your jokes' performance and see how your audience engages with your content.",
            actionText: "See Stats",
            actionRoute: "/joke/analytics",
            iconName: "lucide:bar-chart-3",
            variant: "accent" as const
          }
        ];
      
      case "final":
        return [
          {
            title: "Start Creating",
            description: "You're all set! Time to build your first masterpiece and share it with the world.",
            actionText: "Create First Joke",
            actionRoute: "/joke/build/workshop",
            iconName: "lucide:rocket",
            variant: "primary" as const
          },
          {
            title: "Explore Community",
            description: "Join thousands of creators and discover what makes the community laugh.",
            actionText: "Join Community",
            actionRoute: "/joke/community",
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
          What's Next?
        </h2>
        <p className="text-sm text-stone-600">
          Continue your journey with these recommended actions
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
