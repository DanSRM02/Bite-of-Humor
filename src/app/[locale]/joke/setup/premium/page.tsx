"use client";
import LeadIn from "@/components/dataDisplay/leadIn";
import { plansForPremiumPage } from "@/utils/constants";
import CardGrid from "@/components/layout/cardGrid";
import Card from "@/components/feedback/card";
import { Icon } from "@iconify/react/dist/iconify.js";
import BenefitItem from "@/components/premium/BenefitItem";
import { useTranslations } from "next-intl";

function PremiumExperiencePage() {
  const t = useTranslations("PremiumPage");  
  
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
      heading: t("plans.heading"),
      paragraph: t("plans.paragraph"),
    },
    plans: mappingPlan,
  };

  const benefits = [
    {
      icon: "lucide:shield-check",
      title: t("benefits.security.title"),
      description: t("benefits.security.description"),
    },
    {
      icon: "lucide:clock",
      title: t("benefits.access.title"),
      description: t("benefits.access.description"),
    },
    {
      icon: "lucide:headphones",
      title: t("benefits.support.title"),
      description: t("benefits.support.description"),
    },
    {
      icon: "lucide:star",
      title: t("benefits.quality.title"),
      description: t("benefits.quality.description"),
    },
    {
      icon: "lucide:users",
      title: t("benefits.community.title"),
      description: t("benefits.community.description"),
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      <header
        className="relative overflow-hidden bg-stone-900 text-white"
        role="banner"
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-stone-800 to-stone-900 opacity-90"
          aria-hidden="true"
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <LeadIn
              heading={translations.leadIn.heading}
              isTextRaw
              paragraph={translations.leadIn.paragraph}
              redirect={"final"}
              variant="fourth"
            />
          </div>
        </div>
      </header>

      <section className="relative -mt-8 z-10" aria-labelledby="plans-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <section className="lg:col-span-8" aria-labelledby="plans-heading">
              <article className="bg-white rounded-3xl shadow-xl border border-stone-200 p-6 sm:p-8 lg:p-10">
                <header className="text-center mb-8">
                  <h1
                    id="plans-heading"
                    className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4"
                  >
                    {t("plans.heading")}
                  </h1>
                  <p className="text-stone-600 max-w-2xl mx-auto">
                    {t("plans.paragraph")}
                  </p>
                </header>

                <div role="group" aria-labelledby="plans-heading">
                  <CardGrid ariaLabel={t("accessibility.plansSection")}>
                    {translations.plans.map((plan) => (
                      <Card
                        key={plan.key}
                        title={plan.title}
                        body={plan.body}
                        icon={plan.icon}
                        badge={plan.badge}
                        config={plan.config}
                        features={plan.features}
                        variant={plan.variant}
                        className="h-full rounded-3xl"
                      />
                    ))}
                  </CardGrid>
                </div>
              </article>
            </section>

            <aside className="lg:col-span-4" aria-labelledby="benefits-heading">
              <article className="bg-white rounded-3xl shadow-xl border border-stone-200 p-6 sm:p-8 h-fit lg:sticky lg:top-8">
                <header>
                  <h2
                    id="benefits-heading"
                    className="text-xl font-bold text-stone-900 mb-6 text-center"
                  >
                    {t("benefits.heading")}
                  </h2>
                </header>

                <section aria-labelledby="features-list">
                  <h3 id="features-list" className="sr-only">
                    {t("accessibility.featuresSection")}
                  </h3>
                  <dl className="grid grid-cols-1 gap-6">
                    {benefits.map((benefit, index) => (
                      <BenefitItem
                        key={index}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                      />
                    ))}
                  </dl>
                </section>

                <section
                  className="mt-8 pt-6 border-t border-stone-200"
                  aria-labelledby="stats-heading"
                >
                  <h3 id="stats-heading" className="sr-only">
                    {t("accessibility.statsSection")}
                  </h3>
                  <dl className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <dt className="text-2xl font-bold text-stone-900">
                        10K+ 
                      </dt>
                      <dd className="text-sm text-stone-600">{t("stats.users")}</dd>
                    </div>
                    <div>
                      <dt className="text-2xl font-bold text-stone-900">
                        99.9%
                      </dt>
                      <dd className="text-sm text-stone-600">{t("stats.uptime")}</dd>
                    </div>
                  </dl>
                </section>
              </article>
            </aside>
          </div>
        </div>
      </section>

      <div className="pb-12 sm:pb-16 lg:pb-20"></div>
    </main>
  );
}

export default PremiumExperiencePage;
