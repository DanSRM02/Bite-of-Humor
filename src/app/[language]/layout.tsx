import LanguageProvider from "@/contexts/languageContext";
import { ReactNode } from "react";
import "../globals.css";

type LanguageWrapperProps = {
  params: Promise<{ language: string }>;
  children: ReactNode;
};

export const metadata = {
  title: "Bite of Humor",
  description: "",
};
export default async function LanguageWrapper({
  params,
  children,
}: LanguageWrapperProps) {
  const resolvedParams = await params;
  const languageFromUrl = resolvedParams.language;
  return (
    <html className=" text-xs sm:text-sm md:text-base " lang={languageFromUrl}>
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>
        <LanguageProvider languageParam={languageFromUrl}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
