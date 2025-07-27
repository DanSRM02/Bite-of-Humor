import { ReactNode } from "react";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";

type LanguageWrapperProps = {
  params: Promise<{ locale: string }>;
  children: ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  title: "Bite of Humor",
  description: "Discover, share, and rate jokes from around the world.",
};
export default async function LanguageWrapper({
  params,
  children,
}: LanguageWrapperProps) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      className={`text-xs sm:text-sm md:text-base ${inter.className}`}
      lang={locale}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
