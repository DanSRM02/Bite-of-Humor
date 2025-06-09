import { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
type SetupLayoutProps = {
  children: ReactNode;
};

export default function SetupLayout({ children }: SetupLayoutProps) {
  return (
    <div      
      aria-label="Public layout wrapper"
      tabIndex={0}
    >
      <Navigation />
      <main        
        aria-label="Main content area"
        tabIndex={0}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
