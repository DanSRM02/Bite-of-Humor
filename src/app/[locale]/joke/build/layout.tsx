import { ReactNode } from "react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

type SetupLayoutProps = {
  children: ReactNode;
};

export default function BuildLayout({ children }: SetupLayoutProps) {
  return (
    <div
      className="min-h-screen flex flex-col"
      aria-label="Public layout wrapper"
    >      
      <h1 className="text-center font-normal m-5">Bite of Humor</h1>
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
