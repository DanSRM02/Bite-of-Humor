import { ReactNode } from "react";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

type SetupLayoutProps = {
  children: ReactNode;
};

export default function SetupLayout({ children }: SetupLayoutProps) {
  return (
    <div
      className="min-h-screen flex flex-col"
      aria-label="Public layout wrapper"       
    >
      <Navigation />
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
