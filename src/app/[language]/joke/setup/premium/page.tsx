"use client";
import LeadIn from "@/components/dataDisplay/leadIn";
import Card from "@/components/feedback/card";
import { plans } from "@/utils/const";
import CardGrid from "@/components/layout/cardGrid";

function PremiumExperiencePage() {  

  const mappingPlan = plans.map((plan) => ({
    key: plan.title,
    title: `plans.${plan.title}.name`,
    badge: {
      key: `plans.${plan.title}.price`,
      config: { value: plan.price },
    },
    body: `plans.${plan.title}.description`,
    features: plan.features?.map(
      (feature) => `plans.${plan.title}.features.${feature}`
    ),
    icon: plan.icon ? <plan.icon aria-label={plan.title + " icon"} /> : null,
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
    <>
      <section className="flex flex-col gap-8">
        <LeadIn
          heading={translations.leadIn.heading}
          paragraph={translations.leadIn.paragraph}
          redirect={"final"}
          variant="fourth"
        />

        <CardGrid ariaLabel="plar">
          {translations.plans.map((card) => (
            <Card
              key={card.key}
              badge={card.badge}
              title={card.title}
              body={card.body}
              features={card.features}
              icon={card.icon}
              variant={card.variant}
            />
          ))}
        </CardGrid>
      </section>
    </>
  );
}

export default PremiumExperiencePage;
