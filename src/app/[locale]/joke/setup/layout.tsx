import { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";

type SetupLayoutProps = {
  children: ReactNode;
};

export default function SetupLayout({ children }: SetupLayoutProps) {
  const navigationLinks = [
    { key: "navItems.home", href: "/joke/setup/medium" },
    { key: "navItems.signUp", href: "/joke/setup/sign-up" },
    { key: "navItems.logIn", href: "/joke/setup/log-in" },
  ];

  return (
    <div
      className="min-h-screen flex flex-col"
      aria-label="Public layout wrapper"
    >
      <Navigation links={navigationLinks} />
      <main
        className="mx-[5rem] flex flex-col flex-1 gap-[5rem] justify-center"
        aria-label="Main content area"
      >
        {children}
      </main>      
      <Footer />
    </div>
  );
}
