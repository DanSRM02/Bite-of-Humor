import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bite of Humor",
  description:
    "A digital experience crafted to inject a quick, clever dose of laughter into your day.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="text-xs sm:text-sm md:text-base">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
