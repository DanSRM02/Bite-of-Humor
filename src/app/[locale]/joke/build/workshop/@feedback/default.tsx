import { Icon } from "@iconify/react";
import { getTranslations } from "next-intl/server";

async function FeedbackWorkshopJoke() {
  const t = await getTranslations();

  return (
    <section 
      className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-dashed border-blue-200 rounded-xl p-6 sm:p-8 text-center"
      aria-labelledby="feedback-title"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="bg-blue-100 p-4 rounded-full" aria-hidden="true">
          <Icon 
            icon="fluent:brain-circuit-20-filled" 
            className="text-3xl text-blue-600"
          />
        </div>
        <header className="flex flex-col items-center space-y-2">
          <h3 id="feedback-title" className="text-lg font-semibold text-blue-800">
            {t("WorkshopPage.form.feedback.title")}
          </h3>
          <p className="text-sm text-blue-600 max-w-xs leading-relaxed">
            {t("WorkshopPage.form.feedback.description")}
          </p>
        </header>
        <div className="flex items-center gap-2 text-xs text-blue-500" role="status" aria-live="polite">
          <Icon icon="mingcute:loading-line" className="animate-spin" aria-hidden="true" />
          <span>{t("WorkshopPage.form.feedback.status")}</span>
        </div>
      </div>
    </section>
  );
}

export default FeedbackWorkshopJoke;