import { getTranslations } from "next-intl/server";

const CommunityCallToAction = async () => {
  const t = await getTranslations();

  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 text-center">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {t("CommunityPage.callToAction.title")}
      </h3>
      <p className="text-gray-600 text-sm mb-4">
        {t("CommunityPage.callToAction.description")}
      </p>
      <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm">
        {t("CommunityPage.callToAction.button")}
      </button>
    </section>
  );
};

export default CommunityCallToAction;
