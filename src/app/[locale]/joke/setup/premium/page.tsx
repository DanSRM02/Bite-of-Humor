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
    <section className="flex flex-col gap-8">
      <LeadIn
        heading={translations.leadIn.heading}
        paragraph={translations.leadIn.paragraph}
        redirect={"final"}
        variant="fourth"
      />

      <CardGrid ariaLabel="plans list">
        <CardList cards={translations.plans} />
      </CardGrid>
    </section>
  );
}

export default PremiumExperiencePage;
