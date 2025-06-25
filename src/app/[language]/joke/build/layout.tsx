import { ReactNode } from "react";
import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation";

type SetupLayoutProps = {
  children: ReactNode;
};

export default function BuildLayout({ children }: SetupLayoutProps) {
  return (
    <div
      className="min-h-screen flex flex-col"
      aria-label="Public layout wrapper"
    >
      <span className=" flex justify-center mt-5">
        <h2 className="font-bold">Bite of Humor</h2>
      </span>
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
