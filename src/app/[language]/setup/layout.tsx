import { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
type SetupLayoutProps = {
  children: ReactNode;
};

export default function SetupLayout({ children }: SetupLayoutProps) {
  return (
    <div
      className="min-h-screen flex flex-col"
      aria-label="Public layout wrapper"
      tabIndex={0}
    >
      <Navigation />
      <main
        className="mx-[5rem] flex flex-col flex-1 gap-[5rem] justify-center"
        aria-label="Main content area"
        tabIndex={0}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
