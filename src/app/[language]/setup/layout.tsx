import { ReactNode } from "react";
import "./globals.css";

type RootProps = {
  children: ReactNode;
};

export const metadata = {
  title: "Bite of Humor",
  description: ""
};
export default function SetupLayout({ children }: RootProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
