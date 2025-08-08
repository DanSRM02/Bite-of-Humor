import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFoundPage() {
  const t = useTranslations("ErrorPage");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="flex flex-col items-center justify-center border border-gray-300 max-w-2xl w-full p-12 text-center rounded-lg bg-white shadow-sm">
        <div className="text-6xl mb-6" role="img" aria-label="Error icon">
          🔍
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {t("content.title")}
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-md">
          {t("content.message")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/">{t("actions.button")}</Link>
        </div>
      </div>
    </main>
  );
}
