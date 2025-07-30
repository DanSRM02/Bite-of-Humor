"use client";
import LeadIn from "@/components/dataDisplay/leadIn";
import { plansForPremiumPage } from "@/utils/constants";
import CardGrid from "@/components/layout/cardGrid";
import CardList from "@/components/dataDisplay/cardList";
import { Icon } from "@iconify/react/dist/iconify.js";

function PremiumExperiencePage() {
  const mappingPlan = plansForPremiumPage.map((plan) => ({
    key: plan.title,
    title: `plans.${plan.title}.name`,
    badge: `plans.${plan.title}.price`,
    config: { value: plan.price || 10 },
    body: `plans.${plan.title}.description`,
    features: plan.features?.map(
      (feature) => `plans.${plan.title}.features.${feature}`
    ),
    icon: <Icon icon={plan.iconName || ""} aria-label={plan.title + " icon"} />,
    variant: "expandable" as const,
  }));

  const translations = {
    leadIn: {
      heading: "plans.LeadIn.heading",
      paragraph: "plans.LeadIn.paragraph",
    },
    plans: mappingPlan,
  };

  return (
    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
        <LeadIn
          heading={translations.leadIn.heading}
          paragraph={translations.leadIn.paragraph}
          redirect={"final"}
          variant="fourth"
        />
      </div>

      <div className="w-full">
        <CardGrid ariaLabel="plans list">
          <CardList cards={translations.plans} />
        </CardGrid>
      </div>
    </div>
  );
}

export default PremiumExperiencePage;
