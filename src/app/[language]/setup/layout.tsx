import { ReactNode } from "react";

type RootProps = {
  children: ReactNode;
};

export default function SetupLayout({ children }: RootProps) {
  return <main>{children}</main>;
}
