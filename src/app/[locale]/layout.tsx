import { ReactNode } from "react";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

type LanguageWrapperProps = {
  params: Promise<{ locale: string }>;
  children: ReactNode;
};

export const metadata = {
  title: "Bite of Humor",  
  
};
export default async function LanguageWrapper({
  params,
  children,
}: LanguageWrapperProps) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html className=" text-xs sm:text-sm md:text-base" lang={locale}>
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
