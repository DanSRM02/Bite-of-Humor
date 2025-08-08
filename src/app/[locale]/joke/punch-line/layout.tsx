import { ReactNode } from "react";
import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation";

type PunchLineLayoutProps = {
  children: ReactNode;
};

export default function PunchLineLayout({
  children,
}: PunchLineLayoutProps) {
  const navigationLinks = [
    { key: "navItems.home", href: "/joke/setup/final" },
    { key: "navItems.workshop", href: "/joke/build/workshop" },
    { key: "navItems.community", href: "/joke/punch-line/community" },
  ];

  return (
    <div
      className="min-h-screen flex flex-col"
      aria-label="Punch Line layout wrapper"
    >
      <Navigation links={navigationLinks} />
      <main
        className="flex-1"
        aria-label="Main content area"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}