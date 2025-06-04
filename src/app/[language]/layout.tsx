import LanguageProvider from "@/context/languageContext";
import { ReactNode, use } from "react";

type LanguageWrapperProps = {
  params: Promise<{ language: string }>;
  children: ReactNode;
};
export default function LanguageWrapper({
  params,
  children,
}: LanguageWrapperProps) {
  const resolvedParams = use(params);
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
