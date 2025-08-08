"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Button from "@/components/inputs/button";

const CommunityCallToAction = () => {
  const t = useTranslations();
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/joke/build/workshop");
  };

  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 text-center">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {t("CommunityPage.callToAction.title")}
      </h3>
      <p className="text-gray-600 text-sm mb-4">
        {t("CommunityPage.callToAction.description")}
      </p>
      <Button
        onClick={handleRedirect}
        variant="primary"
        size="medium"
        className="inline-block"
      >
        {t("CommunityPage.callToAction.button")}
      </Button>
    </section>
  );
};

export default CommunityCallToAction;
