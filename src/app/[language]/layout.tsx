import LanguageProvider from "@/context/languageContext";
import { ReactNode } from "react";

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
    <html lang={languageFromUrl}>
      <body>
        <LanguageProvider languageParam={languageFromUrl}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
