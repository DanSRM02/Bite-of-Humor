import { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";

type SetupLayoutProps = {
  children: ReactNode;
};

export default function BuildLayout({ children }: SetupLayoutProps) {
  const navigationLinks = [
    { key: "navItems.home", href: "/joke/setup/final" },
    { key: "navItems.workshop", href: "/joke/build/workshop" },
    { key: "navItems.community", href: "/joke/punch-line/community" },
  ];

  return (
    <div
      className="min-h-screen flex flex-col"
      aria-label="Build layout wrapper"
    >
      <Navigation links={navigationLinks} />
      <main
        className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 flex flex-col flex-1 gap-8 md:gap-12 lg:gap-20 justify-center"
        aria-label="Main content area"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
