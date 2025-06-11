"use client";
import LeadIn from "@/components/dataDisplay/LeadIn";
import Card from "@/components/feedback/Card";
// import classes from "./PremiumExpPage.module.scss";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { plans } from "@/utils/const";
import Link from "next/link";

function PremiunExpPage() {
  const { t } = useTranslation();

  const mappingPlan = useMemo(
    () =>
      plans.map((plan) => ({
        key: plan.title,
        title: t(`plans.${plan.title}.name`),
        badge: t(`plans.${plan.title}.price`, { value: plan.price }),
        body: t(`plans.${plan.title}.description`),
        features: plan.features?.map((feature) =>
          t(`plans.${plan.title}.features.${feature}`)
        ),
        icon: plan.icon ? (
          <plan.icon aria-label={plan.title + " icon"} />
        ) : null,
        variant: "expandable" as const,
      })),
    [t]
  );

  const translations = {
    navkLink: {
      text: t("plans.navLink.text"),
    },
    leadIn: {
      heading: t("plans.LeadIn.heading"),
      paragraph: t("plans.LeadIn.paragraph"),
    },
    plans: mappingPlan,
  };

  return (
    <>
      <section className="flex flex-col gap-8">
        <span className="flex flex-row items-center gap-15">
          <Link href={"final"}>
            <FaArrowLeftLong
              size={"2rem"}
              className="hover:fill-secondary-bg hover:border-b-2 hover:border-secondary-bg"
            />
          </Link>
          <LeadIn
            heading={translations.leadIn.heading}
            paragraph={translations.leadIn.paragraph}
          />
        </span>
        <article className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] m-8 gap-4">
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
        </article>
      </section>
    </>
  );
}

export default PremiunExpPage;
