import { ReactNode } from "react";
import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation";

type SetupLayoutProps = {
  children: ReactNode;
};

export default function BuildLayout({ children }: SetupLayoutProps) {
  const navigationLinks = [
    { key: "navItems.home", href: "/joke/build/home" },
    { key: "navItems.workshop", href: "/joke/build/workshop" },
    { key: "navItems.community", href: "/joke/build/community" },
  ];

  return (
    <div
      className="min-h-screen flex flex-col"
      aria-label="Build layout wrapper"
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
