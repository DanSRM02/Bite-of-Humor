"use client";
import { useTranslations } from "next-intl";
import { ElementType, ReactNode } from "react";

type HeadingProps = {
  children: string | ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  tabIndex?: number;
};

export default function Heading({
  tabIndex,
  children,
  level = 1,
  className,
}: HeadingProps) {
  const Heading: ElementType = `h${level}` as ElementType;
  const t = useTranslations();

  const content = typeof children === "string" ? t(children) : children;

  return (
    <Heading tabIndex={tabIndex} className={className}>
      {content}
    </Heading>
  );
}
