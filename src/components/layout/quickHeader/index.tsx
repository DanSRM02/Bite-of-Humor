"use client";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Button from "@/components/inputs/button";

type QuickHeaderRoute = {
  key: string;
  path: string;
  translationKey: string;
};

const QuickHeader = () => {
  const router = useRouter();
  const t = useTranslations("QuickNavigation");

  const routes: QuickHeaderRoute[] = [
    { key: "setup", path: "/joke/setup/final", translationKey: "setup" },
    { key: "build", path: "/joke/build/home", translationKey: "build" },
    { key: "workshop", path: "/joke/build/workshop", translationKey: "workshop" }
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <header 
      className="bg-white shadow-sm border-b border-stone-200 sticky top-0 z-40"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <nav 
            className="flex space-x-4 sm:space-x-6" 
            role="navigation" 
            aria-label="Quick navigation"
          >
            {routes.map(({ key, path, translationKey }) => (
              <Button
                key={key}
                variant="secondary"
                size="medium"
                onClick={() => handleNavigation(path)}
                aria-label={`Navigate to ${translationKey} page`}
                className="text-stone-600 hover:text-stone-900 border-transparent hover:border-b-2 hover:border-stone-300 rounded-none transition-colors px-3 py-2"
              >
                {t(translationKey)}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default QuickHeader;
