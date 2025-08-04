"use client";
import { useRouter } from "next/navigation";
import Button from "@/components/inputs/button";

const QuickHeader = () => {
  const router = useRouter();

  const handleNavigation = (action: string) => {
    const routes: Record<string, string> = {
      setup: "/joke/setup/final",
      build: "/joke/build/home",
      punchline: "/joke/punch-line/home"
    };

    const route = routes[action];
    if (route) router.push(route);
  };

  const navigationButtons = [
    { key: "setup", label: "Setup", ariaLabel: "Navigate to Setup page" },
    { key: "build", label: "Build", ariaLabel: "Navigate to Build page" },
    { key: "punchline", label: "Punchline", ariaLabel: "Navigate to Punchline page" }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-stone-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <nav className="flex space-x-6" role="navigation" aria-label="Main navigation">
            {navigationButtons.map(({ key, label, ariaLabel }) => (
              <Button
                key={key}
                variant="secondary"
                size="medium"
                onClick={() => handleNavigation(key)}
                aria-label={ariaLabel}
                className="text-stone-600 hover:text-stone-900 border-transparent hover:border-b-2 hover:border-stone-300 rounded-none transition-colors"
              >
                {label}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default QuickHeader;
