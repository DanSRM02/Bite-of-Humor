import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

type LanguageWrapperProps = {
  params: Promise<{ locale: string }>;
  children: ReactNode;
};

export default async function LocaleLayout({ children }: LanguageWrapperProps) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
