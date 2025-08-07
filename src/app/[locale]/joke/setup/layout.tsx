import { ReactNode } from "react";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import LanguageSelector from "@/components/inputs/languageSelector";

type SetupLayoutProps = {
  children: ReactNode;
};

export default function SetupLayout({ children }: SetupLayoutProps) {
  const navLinks = [
    { key: "navItems.home", href: "medium" },
    { key: "navItems.signUp", href: "sign-up" },
    { key: "navItems.logIn", href: "log-in" },
  ];

  return (
    <div
      className="min-h-screen flex flex-col"
      aria-label="Public layout wrapper"
    >
      <Navigation links={navLinks} />
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
